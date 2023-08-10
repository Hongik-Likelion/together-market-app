import { COLORS } from 'colors';
import PropTypes from 'prop-types';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

function SetMarketNameTab({ marketName, onChangeMarketName }) {
  return (
    <>
      <Tab>
        <LocationTxt>가게 이름</LocationTxt>
        <Input
          value={marketName}
          onChangeText={onChangeMarketName}
          placeholder="싱글벙글 과일가게"
          placeholderTextColor={COLORS.gray01}
        />
      </Tab>
    </>
  );
}

SetMarketNameTab.propTypes = {
  marketName: PropTypes.string.isRequired,
  onChangeMarketName: PropTypes.func.isRequired,
};

const Tab = styled.View`
  flex: 1;
`;

const LocationTxt = styled.Text`
  position: relative;
  margin-left: ${wp(5)}px;
  margin-top: ${hp(-6)}px;
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

export default SetMarketNameTab;
