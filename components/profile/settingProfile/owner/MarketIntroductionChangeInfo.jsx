import { COLORS } from 'colors';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

function MarketIntroductionChangeInfo({ introduction, changedIntroduction, onChangeIntroduction }) {
  return (
    <Tab>
      <Txt>가게 소개</Txt>
      <Input
        value={changedIntroduction}
        onChangeText={onChangeIntroduction}
        placeholder={introduction ? introduction : '가게 소개를 입력해주세요.'}
        placeholderTextColor={COLORS.gray01}
      />
    </Tab>
  );
}

const Tab = styled.View`
  flex: 1;
  display: flex;
`;

const Txt = styled.Text`
  margin-left: ${wp(5)}px;
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  height: ${RFValue(18)}px;
  margin-bottom: ${hp(1)}px;
`;

const Input = styled.TextInput`
  background-color: ${COLORS.gray02};

  margin-left: ${wp(4.8)}px;

  width: ${wp(90.4)}px;
  height: ${hp(6.28)}px;
  border-radius: 8px;

  padding-left: ${RFValue(4)}px;
  font-size: ${RFValue(16)}px;
  font-weight: bold;
  padding: ${RFValue(10)}px;
`;

export default MarketIntroductionChangeInfo;
