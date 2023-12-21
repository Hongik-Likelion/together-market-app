import { ContinueBtn, PreviousBtn } from '@assets/signUp/CommonSignUpScreenIcon';
import GuideOption from '@components/signUp/guide/GuideOption';
import GuideTopTab from '@components/signUp/guide/GuideTopTab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { postfavMarket, signUp } from 'api/auth';
import { COLORS } from 'colors';
import { Auth } from 'context/AuthContext';
import { UserInfo } from 'context/UserInfoContext';
import format from 'pretty-format';
import React, { useContext, useState } from 'react';
import { Alert, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';

function GuideSignUpScreen(props) {
  const {
    user: [signUpRequest, setSignUpRequest],
    market: [favouriteMarketRequest, setFavouriteMarketRequest],
  } = useContext(Auth);

  const navigation = useNavigation();
  const { userType } = useContext(UserInfo);

  const [guide, selectGuide] = useState(0); //guide가 1이면 보겠다, 2면 안보겠다

  const onPressContinueBtn = async () => {
    // 회원가입과 자주가는 시장 등록
    try {
      await handleSignUp();
      if (userType === 1) {
      } else await handleFavoriteMarket();
      navigation.navigate('guideSignUpScreen'); // 이동은 여기서 호출

      if (guide === 1) {
        navigation.reset({
          routes: [
            {
              name: 'home-tab',
              state: {
                routes: [
                  {
                    name: 'marketInfo',
                  },
                ],
              },
            },
          ],
        });
      } else {
        navigation.reset({ routes: [{ name: 'home-tab' }] });
      }
    } catch (err) {
      console.log(format(err));
      return;
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await signUp(signUpRequest);
      const { accessToken, refreshToken } = response.data;

      await AsyncStorage.setItem('access_token', accessToken);
      await AsyncStorage.setItem('refresh_token', refreshToken);
    } catch (signUpErr) {
      Alert.alert('회원가입 오류', '잠시 후 다시 진행해 주세요');
      throw signUpErr;
    }
  };

  const handleFavoriteMarket = async () => {
    try {
      await postfavMarket(favouriteMarketRequest);
    } catch (addFavoriteMarketErr) {
      console.log(format(addFavoriteMarketErr));
      Alert.alert('자주가는 시장 등록 오류', '잠시 후 다시 진행해 주세요');
      throw addFavoriteMarketErr;
    }
  };

  const onPressPreviousBtn = () => {
    selectGuide('');
    if (userType === 1) {
      navigation.navigate('ownerSignUpSpecificScreen');
    } else if (userType === 2) {
      navigation.navigate('userSignUpScreen');
    }
  };

  return (
    <Container>
      <GuideTopTab />
      <MainInfoTxt1>김영희님,</MainInfoTxt1>
      <MainInfoTxt2>
        <Text style={{ color: COLORS.main }}>함께 시장 안내서</Text>를 확인하시겠어요?
      </MainInfoTxt2>
      <SubTxt>안내를 통해 서비스 이용에 큰 도움을 드릴 수 있어요.</SubTxt>
      <GuideOption content={guide} onChange={selectGuide} />
      <PreviousBtn marginBottom={hp(2)} marginLeft={wp(4.8)} onPress={onPressPreviousBtn} />
      <ContinueBtn
        fontColor={guide ? 'white' : COLORS.main}
        backColor={guide ? COLORS.main : 'white'}
        width={wp(100)}
        marginBottom={hp(6.15)}
        justifyContent="center"
        onPress={onPressContinueBtn}
      />
    </Container>
  );
}

const Container = styled.View`
  background-color: white;
  flex: 1;
  position: relative;
`;

const MainInfoTxt1 = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  margin-left: ${wp(4.8)}px;
  margin-top: ${hp(18.7)}px;
`;

const MainInfoTxt2 = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  margin-left: ${wp(4.8)}px;
  margin-top: ${RFValue(5)}px;
`;

const SubTxt = styled.Text`
  color: ${COLORS.gray01};
  margin-left: ${wp(4.8)}px;
  margin-top: ${hp(1.23)}px;
  margin-bottom: ${hp(5.41)}px;
  font-size: ${RFValue(14)}px;
`;

export default GuideSignUpScreen;
