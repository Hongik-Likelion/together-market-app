import { OwnerSelect, CustomerSelect, PreviousBtn, ContinueBtn } from '@assets/signUp/CommonSignUpScreenIcon';
import { COLORS } from 'colors';
import React from 'react';
import { Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';

function CommonSignUpScreen() {
  return (
    <Container>
      <MainInfoTxt1>김영희님,</MainInfoTxt1>
      <MainInfoTxt2>
        <Text style={{ color: COLORS.main }}>유형</Text>을 선택해주세요!
      </MainInfoTxt2>
      <Text
        style={{ color: COLORS.gray01, marginLeft: wp(4.8), marginTop: hp(1.23), marginBottom: hp(5.41), fontSize: 16 }}
      >
        한 가지 유형을 선택해주세요. (필수)
      </Text>
      <SelectOption>
        <OwnerSelect />
        <CustomerSelect />
      </SelectOption>
      <PreviousBtn marginBottom={hp(1.23)} marginLeft={wp(4.8)} />
      <ContinueBtn width={wp(100)} marginBottom={hp(6.15)} justifyContent="center" />
    </Container>
  );
}

const Container = styled.View`
  background-color: white;
  flex: 1;
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

const SelectOption = styled.View`
  margin-left: ${wp(29.8)}px;
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
`;

export default CommonSignUpScreen;
