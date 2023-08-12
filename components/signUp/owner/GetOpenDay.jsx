import { COLORS } from 'colors';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

function GetOpenDay({ openDays, onChangeOpenDays }) {
  return (
    <>
      <Tab>
        <OpenDayTxt>영업일</OpenDayTxt>
        <Input
          value={openDays}
          onChangeText={onChangeOpenDays}
          placeholder="(예시: 매일, 월~금, 화~토...)"
          placeholderTextColor={COLORS.gray01}
        />
      </Tab>
    </>
  );
}

const Tab = styled.View``;

const OpenDayTxt = styled.Text`
  position: relative;
  margin-left: ${wp(5)}px;
  margin-top: ${hp(-13)}px;
  font-size: ${RFValue(16)}px;
  font-weight: bold;
`;

const Input = styled.TextInput`
  background-color: ${COLORS.gray02};
  position: relative;

  margin-left: ${wp(4.8)}px;
  top: ${hp(1.5)}px;

  width: ${wp(90.4)}px;
  height: ${hp(6.28)}px;
  border-radius: 8px;

  padding-left: ${RFValue(4)}px;
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  padding: ${RFValue(10)}px;
`;

export default GetOpenDay;
