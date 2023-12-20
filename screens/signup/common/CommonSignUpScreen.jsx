import { ContinueBtn, CustomerSelect, OwnerSelect, PreviousBtn } from '@assets/signUp/CommonSignUpScreenIcon';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from 'colors';
import { Auth } from 'context/AuthContext';
import React, { useContext, useMemo, useState } from 'react';
import { Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';
import format from 'pretty-format';

function CommonSignUpScreen() {
  const navigation = useNavigation();

  const {
    user: [signUpRequest, setSignUpRequest],
  } = useContext(Auth);

  const [userType, setUserType] = useState(1);

  const USER_TYPE = useMemo(
    () => ({
      CUSTOMER: 2,
      OWNER: 1,
    }),
    [],
  );

  const { CUSTOMER, OWNER } = USER_TYPE;

  const onPressPreviousBtn = () => {
    setUserType('');
    navigation.navigate('loginScreen1');
  };

  const onPressContinueBtn = () => {
    if (userType === CUSTOMER) {
      console.log('고객입니다');
      setSignUpRequest((prev) => ({
        ...prev,
        is_owner: false,
      }));
      navigation.navigate('userSignUpScreen');
    } else if (userType === OWNER) {
      console.log('사장입니다');
      setSignUpRequest((prev) => ({
        ...prev,
        is_owner: true,
      }));
      navigation.navigate('ownerSignUpScreen');
    }
  };

  return (
    <Container>
      <MainInfoTxt1>{signUpRequest.nickname}님,</MainInfoTxt1>
      <MainInfoTxt2>
        <Text style={{ color: COLORS.main }}>유형</Text>을 선택해주세요!
      </MainInfoTxt2>
      <SubTxt>한 가지 유형을 선택해주세요. (필수)</SubTxt>
      <SelectOption>
        <OwnerSelect
          backColor={userType === OWNER ? '#E4FFF5' : '#FFFFFF'}
          strokeColor={userType === OWNER ? COLORS.main : COLORS.gray01}
          fontColor={userType === OWNER ? COLORS.black : '#666666'}
          onPress={() => setUserType(OWNER)}
        />
        <CustomerSelect
          backColor={userType === CUSTOMER ? '#E4FFF5' : '#FFFFFF'}
          strokeColor={userType === CUSTOMER ? COLORS.main : COLORS.gray01}
          fontColor={userType === CUSTOMER ? COLORS.black : '#666666'}
          onPress={() => setUserType(CUSTOMER)}
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
