import React from 'react';
import { Eating, Seafood, Fruit, Extra } from '@assets/signUp/OwnerSignUpFoodScreen';
import { styled } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Text } from 'react-native';
import { COLORS } from 'colors';

function ChooseSellingFoodBtn({ sellFoods, onSelectFood, onDeleteFood }) {
  const isFoodSelected = (photoInfo) => sellFoods.some((item) => item.content === photoInfo);

  const handlePhotoSelect = (photoInfo) => {
    if (!isFoodSelected(photoInfo)) {
      onSelectFood(photoInfo);
    } else {
      onDeleteFood(photoInfo);
    }
  };

  return (
    <Container>
      <Description>
        상품 분류 <Text style={{ fontSize: RFValue(13), fontWeight: 'light' }}>(중복 선택 가능)</Text>
      </Description>
      <Pictures>
        <FirstRow>
          <Content onPress={() => handlePhotoSelect('먹거리')}>
            <Eating
              backgroundColor={isFoodSelected('먹거리') ? '#E4FFF5' : COLORS.white}
              iconColor={isFoodSelected('먹거리') ? COLORS.main : COLORS.gray01}
            />
            <Name>먹거리</Name>
          </Content>
          <Content onPress={() => handlePhotoSelect('해산물')}>
            <Seafood
              backgroundColor={isFoodSelected('해산물') ? '#E4FFF5' : COLORS.white}
              iconColor={isFoodSelected('해산물') ? COLORS.main : COLORS.gray01}
            />
            <Name>해산물</Name>
          </Content>
        </FirstRow>
        <SecondRow>
          <Content onPress={() => handlePhotoSelect('채소/과일')}>
            <Fruit
              backgroundColor={isFoodSelected('채소/과일') ? '#E4FFF5' : COLORS.white}
              iconColor={isFoodSelected('채소/과일') ? COLORS.main : COLORS.gray01}
            />
            <Name>채소/과일</Name>
          </Content>
          <Content onPress={() => handlePhotoSelect('기타')}>
            <Extra
              backgroundColor={isFoodSelected('기타') ? '#E4FFF5' : COLORS.white}
              iconColor={isFoodSelected('기타') ? COLORS.main : COLORS.gray01}
            />
            <Name>기타</Name>
          </Content>
        </SecondRow>
      </Pictures>
    </Container>
  );
}
const Container = styled.View`
  flex: 1;
`;

const Description = styled.Text`
  margin-left: ${wp(4.8)}px;
  margin-top: ${hp(4)}px;
  font-size: ${RFValue(16)}px;
  font-weight: bold;
`;

const Pictures = styled.View`
  margin-top: ${hp(4)}px;
`;

const FirstRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: ${hp(1.5)}px;
`;

const Content = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
`;

const Name = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(13)}px;
  margin-top: ${hp(1.5)}px;
`;

const SecondRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export default ChooseSellingFoodBtn;
