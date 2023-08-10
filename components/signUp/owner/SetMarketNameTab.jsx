import { COLORS } from 'colors';
import PropTypes from 'prop-types';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';

function SetMarketNameTab({ content, onChange }) {
  return (
    <>
      <Tab>
        <LocationTxt>가게 이름</LocationTxt>
        <Input
          value={content}
          onChangeText={onChange}
          placeholder="싱글벙글 과일가게"
          placeholderTextColor={COLORS.gray01}
        />
      </Tab>
    </>
  );
}

SetMarketNameTab.propTypes = {
  content: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const Tab = styled.View`
  flex: 1;
`;

const LocationTxt = styled.Text`
  position: relative;
  margin-left: ${wp(5)}px;
  margin-top: ${hp(-6)}px;
  font-size: 18px;
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

  padding-left: 4px;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
`;

export default SetMarketNameTab;
