import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import { styled } from 'styled-components/native';

function MarketSelector() {
// 회원가입시 설정한 시장으로 뜨도록 수정해야함
  const navigation = useNavigation();

  return (
    <Container>
      <MarketName>망원시장</MarketName>
      <SelectorIcon name={'chevron-down'} size={RFValue(15)} onPress={() => navigation.navigate('market-select')}/>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: ${wp(3)}px;
`;

const SelectorIcon = styled(Feather)`
  margin-left: ${wp(2)}px;
`;

const MarketName = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: 700;
`;

export default MarketSelector;
