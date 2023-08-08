import { PreviousBtn, ContinueBtn } from '@assets/signUp/CommonSignUpScreenIcon';
import UserSignUpHeader from '@assets/signUp/UserSignUpScreen';
import ChooseGuideTab from '@components/signUp/ChooseGuideTab';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from 'colors';
import { UserInfo } from 'context/UserInfoContext';
import React, { useContext } from 'react';
import { Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';

function GuideSignUpScreen(props) {
  const navigation = useNavigation();
  const { userType, setUserType } = useContext(UserInfo);

  const onPressPreviousBtn = () => {
    setUserType('');
    navigation.navigate('loginScreen1');
  };

  const onPressContinueBtn = () => {
    if (userType === 1) {
      navigation.navigate('ownerSignUpScreen');
    } else if (userType === 2) {
      navigation.navigate('userSignUpScreen');
    }
  };
  return (
    <Container>
      <MainInfoTxt1>김영희님,</MainInfoTxt1>
      <MainInfoTxt2>
        <Text style={{ color: COLORS.main }}>함께 시장 안내서</Text>를 확인하시겠어요?
      </MainInfoTxt2>
      <SubTxt>한 가지 유형을 선택해주세요. (필수)</SubTxt>
      <ChooseGuideTab />
      <PreviousBtn marginBottom={hp(2)} marginLeft={wp(4.8)} onPress={onPressPreviousBtn} />
      <ContinueBtn
        fontColor={userType ? 'white' : COLORS.main}
        backColor={userType ? COLORS.main : 'white'}
        width={wp(100)}
        marginBottom={hp(6.15)}
        justifyContent="center"
        onPress={onPressContinueBtn}
      />
      <UserSignUpHeaderContainer>
        <UserSignUpHeader position="absolute" marginTop={hp(10)} />
      </UserSignUpHeaderContainer>
    </Container>
  );
}

const Container = styled.View`
  background-color: white;
  flex: 1;
  position: relative;
`;

const MainInfoTxt1 = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-left: ${wp(4.8)}px;
  margin-top: ${hp(18.7)}px;
`;

const MainInfoTxt2 = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-left: ${wp(4.8)}px;
  margin-top: 5px;
`;

const SubTxt = styled.Text`
  color: ${COLORS.gray01};
  margin-left: ${wp(4.8)}px;
  margin-top: ${hp(1.23)}px;
  margin-bottom: ${hp(5.41)}px;
  font-size: 16px;
`;

const UserSignUpHeaderContainer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  align-items: center;
`;
export default GuideSignUpScreen;
