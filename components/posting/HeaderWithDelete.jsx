import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS } from 'colors';
import { styled } from 'styled-components/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

function HeaderWithDelete() {
//   const navigation = useNavigation();

  return (
    <Container>
      <Title>삭제하기</Title>
    </Container>
  );
}

const Container = styled.TouchableOpacity`

`;



const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 600;
  color: ${COLORS.main};
  margin-right: ${wp(3)}px;
`;

export default HeaderWithDelete;