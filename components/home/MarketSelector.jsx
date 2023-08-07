import React from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { RFValue } from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';
import { styled } from 'styled-components/native';

function MarketSelector() {
  return (
    <Container>
      <MarketName>망원 시장</MarketName>
      <SelectorIcon name={'chevron-down'} size={RFValue(15)} />
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: ${wp(2)}px;
`;

const SelectorIcon = styled(Feather)`
  margin-left: ${wp(2)}px;
`;

const MarketName = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: 600;
`;

export default MarketSelector;
