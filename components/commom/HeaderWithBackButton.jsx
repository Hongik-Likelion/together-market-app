import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { styled } from 'styled-components/native';

function HeaderWithBackButton({ title }) {
  const navigation = useNavigation();

  return (
    <Container>
      <BackButton name="arrow-left" size={20} onPress={() => navigation.goBack()} />
      <Title>{title}</Title>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const BackButton = styled(SimpleLineIcons)`
  margin-right: ${RFValue(4)}px;
`;

const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: 600;
`;

export default HeaderWithBackButton;
