import { OwnerSelect, CustomerSelect, PreviousBtn, ContinueBtn } from '@assets/signUp/CommonSignUpScreenIcon';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from 'colors';
import React, { useContext } from 'react';
import { Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { UserInfo } from 'context/UserInfoContext';

function CommonSignUpScreen() {
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
        <Text style={{ color: COLORS.main }}>유형</Text>을 선택해주세요!
      </MainInfoTxt2>
      <SubTxt>한 가지 유형을 선택해주세요. (필수)</SubTxt>
      <SelectOption>
        <OwnerSelect
          backColor={userType === 1 ? '#E4FFF5' : '#FFFFFF'}
          strokeColor={userType === 1 ? COLORS.main : COLORS.gray01}
          fontColor={userType === 1 ? COLORS.black : '#666666'}
          onPress={() => setUserType(1)}
        />
        <CustomerSelect
          backColor={userType === 2 ? '#E4FFF5' : '#FFFFFF'}
          strokeColor={userType === 2 ? COLORS.main : COLORS.gray01}
          fontColor={userType === 2 ? COLORS.black : '#666666'}
          onPress={() => setUserType(2)}
        />
      </SelectOption>
      <PreviousBtn marginBottom={hp(2)} marginLeft={wp(4.8)} onPress={onPressPreviousBtn} />

      <ContinueBtn
        fontColor={userType ? 'white' : COLORS.main}
        backColor={userType ? COLORS.main : 'white'}
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
`;

const MainInfoTxt1 = styled.Text`
  font-size: ${RFValue(22)}px;
  font-weight: bold;
  margin-left: ${wp(4.8)}px;
  margin-top: ${hp(18.7)}px;
`;

const MainInfoTxt2 = styled.Text`
  font-size: ${RFValue(22)}px;
  font-weight: bold;
  margin-left: ${wp(4.8)}px;
  margin-top: ${RFValue(5)}px;
`;

const SubTxt = styled.Text`
  color: ${COLORS.gray01};
  margin-left: ${wp(4.8)}px;
  margin-top: ${hp(1.23)}px;
  margin-bottom: ${hp(5.41)}px;
  font-size: ${RFValue(16)}px;
`;

const SelectOption = styled.View`
  margin-left: ${wp(29.8)}px;
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
`;

export default CommonSignUpScreen;
