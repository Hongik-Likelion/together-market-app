import React from 'react';
import { styled } from 'styled-components/native';
import { COLORS } from 'colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

function CardNews({ cardData, onPressCardNewsDetail }) {
  return (
    <Container onPress={onPressCardNewsDetail}>
      <CardImg>{cardData.cardImg}</CardImg>
      <CardContent numberOfLines={2}>
        {cardData.cardCategory}
        {cardData.cardContent1}
      </CardContent>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  padding-left: ${wp(4)}px;
  padding-right: ${wp(4)}px;

  width: ${wp(50)}px;

  margin-top: ${hp(2.5)}px;
  flex: 0 0 50%; /* flex-grow, flex-shrink, flex-basis*/
`;

const CardImg = styled.View`
  align-items: center;
`;

const CardContent = styled.Text`
  font-size: ${RFValue(13)}px;
  font-weight: 700;
  padding-top: ${hp(1.5)}px;
  line-height: 25px;
`;

export default CardNews;
