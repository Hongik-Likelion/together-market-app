import { ContinueBtn, PreviousBtn } from '@assets/signUp/CommonSignUpScreenIcon';
import GuideOption from '@components/signUp/guide/GuideOption';
import GuideTopTab from '@components/signUp/guide/GuideTopTab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { postOwnerShop, postfavMarket, signUp } from 'api/auth';
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
    shop: [shopRequest, setShopRequest],
    market: [favouriteMarketRequest, setFavouriteMarketRequest],
  } = useContext(Auth);
  const { userType } = useContext(UserInfo);

  const navigation = useNavigation();

  const [guide, selectGuide] = useState(0); //guide가 1이면 보겠다, 2면 안보겠다

  console.log(`userTYpe = ${userType}`);
  const onPressContinueBtn = async () => {
    try {
      // 공통 회원가입
      await handleSignUp();
      if (userType === 1) await handleRegisterShop();
      else await handleFavoriteMarket();

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

  const handleRegisterShop = async () => {
    try {
      await postOwnerShop(shopRequest);
    } catch (registerShopErr) {
      console.log(format(addFavoriteMarketErr));
      Alert.alert('상점 등록 오류', '잠시 후 다시 진행해 주세요');
      throw registerShopErr;
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
