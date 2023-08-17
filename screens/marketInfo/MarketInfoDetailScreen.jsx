import TogetherMarketProfile from '@assets/marketInfo/TogetherMarketProfile';
import React from 'react';
import { styled } from 'styled-components/native';
import { useRoute } from '@react-navigation/native';
import { COLORS } from 'colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Img1 from '@assets/marketInfo/CardNews1/Img1';
import Img4 from '@assets/marketInfo/CardNews1/Img4';
import Img2 from '@assets/marketInfo/CardNews1/Img2';
import Img3 from '@assets/marketInfo/CardNews1/Img3';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function MarketInfoDetailScreen() {

  const route = useRoute();
  const { cardData } = route.params;

  return (
    <KeyboardAwareScrollView>
    <Container>
      <SubContainer>
        <TogetherMarketProfile></TogetherMarketProfile>
        <Name>함께사장</Name>
        <Date>2023.08.18</Date>
      </SubContainer>


      <Content1>{cardData.cardCategory}{cardData.cardContent1}</Content1>
      <Content2>{cardData.cardContent2}</Content2>
      <Content3>{cardData.cardContent3}</Content3>
      <Content4>{cardData.cardContent4}</Content4>

      <Text>{cardData.text}</Text>
      
      {cardData.cardNewsImg1}
      {cardData.cardNewsImg2}
      {cardData.cardNewsImg3}
      {cardData.cardNewsImg4}
    </Container>
    </KeyboardAwareScrollView>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding-left: ${wp(5)}px;
  padding-right: ${wp(5)}px;
`;

const SubContainer = styled.View`

  padding-top: ${hp(2)}px;
  padding-bottom: ${hp(2)}px;
 
 flex-direction: row;
 align-items: center;
justify-content: space-between;
`;

const Name = styled.Text`
    font-size: ${RFValue(17)}px;
    font-weight: 700;
    margin-left: -${wp(35)}px;
`;

const Date = styled.Text`
    
`;


const Content1 = styled.Text`
font-size: ${RFValue(14)}px;
line-height: 30px;
margin-bottom: ${hp(4)}px;
`;
const Content2 = styled.Text`
font-size: ${RFValue(14)}px;
margin-left: ${wp(7)}px;
line-height: 30px;
`;

const Content3 = styled.Text`
font-size: ${RFValue(14)}px;
margin-left: ${wp(7)}px;
line-height: 30px;
`;
const Content4 = styled.Text`
font-size: ${RFValue(14)}px;
margin-left: ${wp(7)}px;
line-height: 30px;
`;

const Text = styled.Text`
margin-top: ${hp(4)}px;
font-size: ${RFValue(14)}px;
`;

export default MarketInfoDetailScreen;