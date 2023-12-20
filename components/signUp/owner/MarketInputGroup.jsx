import { COLORS } from 'colors';
import PropTypes from 'prop-types';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import { styled } from 'styled-components/native';

MarketInputGroup.propTypes = {
  market: PropTypes.string,
  onPress: PropTypes.func,
};

function MarketInputGroup({ market, onPress }) {
  return (
    <InputGroup>
      <LocationTxt>시장 위치</LocationTxt>
      <InputContainer onPress={onPress}>
        <Input>{market}</Input>
        <Feather name={'search'} size={25} color={COLORS.main} />
      </InputContainer>
      <SubTxt>복수 입력 불가</SubTxt>
    </InputGroup>
  );
}

const InputGroup = styled.View`
  height: ${hp(20)}px;
  justify-content: space-around;

  padding: ${RFValue(12)}px;
`;

const InputContainer = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${COLORS.gray02};
  border-radius: 8px;

  justify-content: space-between;
  align-items: center;
  width: ${wp(90.4)}px;
  height: ${hp(6.28)}px;
  padding: ${RFValue(10)}px;
`;

const LocationTxt = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: bold;
`;

const Input = styled.Text`
  width: 90%;
  font-size: ${RFValue(16)}px;
  font-weight: bold;
`;

const SubTxt = styled.Text`
  color: ${COLORS.gray01};
  font-size: ${RFValue(14)}px;
`;

export default MarketInputGroup;
