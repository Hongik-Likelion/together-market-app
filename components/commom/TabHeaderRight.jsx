import { COLORS } from 'colors';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { styled } from 'styled-components/native';

function TabHeaderRight() {
  return (
    <Container>
      <SimpleLineIcons name={'bell'} size={RFValue(18)} color={COLORS.main} />
      <Feather name={'search'} size={RFValue(18)} color={COLORS.main} />
    </Container>
  );
}

const Container = styled.View`
  width: ${wp(13)}px;
  margin-right: ${wp(2)}px;

  flex-direction: row;
  justify-content: space-between;
`;

export default TabHeaderRight;
