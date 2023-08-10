import { COLORS } from 'colors';
import PropTypes from 'prop-types';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import { styled } from 'styled-components/native';

function GetMarketTab({ content, onChange }) {
  return (
    <>
      <Tab>
        <LocationTxt>시장 위치</LocationTxt>
        <Input value={content} onChangeText={onChange} placeholder="망원시장" placeholderTextColor={COLORS.gray01} />
        <Feather
          name={'search'}
          size={25}
          color={COLORS.main}
          style={{ position: 'absolute', top: hp(8.5), right: 30 }}
        />
      </Tab>
      <SubTxt>복수 입력 불가</SubTxt>
    </>
  );
}

GetMarketTab.propTypes = {
  content: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const Tab = styled.View`
  flex: 1;
`;

const LocationTxt = styled.Text`
  position: relative;
  margin-left: ${wp(5)}px;
  margin-top: ${hp(3)}px;
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

const SubTxt = styled.Text`
  position: absolute;
  color: ${COLORS.gray01};
  margin-left: ${wp(5)}px;
  top: ${hp(42)}px;
  font-size: 16px;
`;

export default GetMarketTab;
