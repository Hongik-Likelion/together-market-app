import { COLORS } from 'colors';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import { styled } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

function GetMarketAddressTab({ marketAddress, onChangeAddress }) {
  return (
    <>
      <Tab>
        <LocationTxt>가게 주소</LocationTxt>
        <Input
          value={marketAddress}
          onChangeText={(text) => {
            onChangeAddress(text);
          }}
          placeholder="주소를 입력해주세요."
          placeholderTextColor={COLORS.gray01}
        />
        <Feather
          name={'search'}
          size={25}
          color={COLORS.main}
          style={{ position: 'absolute', top: hp(8.5), right: 30 }}
        />
      </Tab>
    </>
  );
}

const Tab = styled.View`
  flex: 1;
`;

const LocationTxt = styled.Text`
  position: relative;
  margin-left: ${wp(5)}px;
  margin-top: ${hp(3)}px;
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

export default GetMarketAddressTab;
