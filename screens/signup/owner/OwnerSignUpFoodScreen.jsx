import { PreviousBtn, ContinueBtn } from '@assets/signUp/CommonSignUpScreenIcon';
import OwnerSignUpHeader from '@assets/signUp/OwnerSignUpScreen';
import ChooseSellingFoodBtn from '@components/signUp/owner/ChooseSellingFoodBtn';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from 'colors';
import React, { useState } from 'react';
import { Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { v4 as uuidv4 } from 'uuid';

function OwnerSignUpFoodScreen() {
  const navigation = useNavigation();
  const [sellFoods, selectSellFood] = useState([]); // 판매하는 상품 분류 저장 배열

  const onSelectFood = (photoInfo) => {
    const newSellFood = {
      id: uuidv4(),
      content: photoInfo,
    };
    selectSellFood((prev) => [...prev, newSellFood]);
  };

  const onDeleteFood = (selectedPhotoInfo) => {
    selectSellFood((prev) => prev.filter((sellFood) => sellFood.content !== selectedPhotoInfo));
  };

  const onPressPreviousBtn = () => navigation.navigate('ownerSignUpScreen');

  const onPressContinueBtn = () => {
    console.log('판매하는 상품들:', sellFoods);
    navigation.navigate('ownerSignUpSpecificScreen');
  };

  return (
    <Container>
      <UserSignUpHeaderContainer>
        <OwnerSignUpHeader
          secondPage={COLORS.main}
          thirdPage={COLORS.main}
          fourthPage={COLORS.gray01}
          fifthPage={COLORS.gray01}
          position="absolute"
          marginTop={hp(10)}
        />
      </UserSignUpHeaderContainer>
      <MainInfoTxt1>김영희님,</MainInfoTxt1>
      <MainInfoTxt2>
        <Text style={{ color: COLORS.main }}>어떤 상품을 </Text>판매하시나요?
      </MainInfoTxt2>
      <SubTxt>판매하는 상품 분류를 한가지 이상 선택해주세요. (필수)</SubTxt>
      <ChooseSellingFoodBtn sellFoods={sellFoods} onSelectFood={onSelectFood} onDeleteFood={onDeleteFood} />
      <PreviousBtn marginBottom={hp(2)} marginLeft={wp(4.8)} onPress={onPressPreviousBtn} />
      <ContinueBtn
        fontColor={sellFoods.length > 0 ? 'white' : COLORS.main}
        backColor={sellFoods.length > 0 ? COLORS.main : 'white'}
        width={wp(100)}
        marginBottom={hp(6.15)}
        justifyContent="center"
        onPress={onPressContinueBtn}
      />
    </Container>
  );
}

const UserSignUpHeaderContainer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  align-items: center;
`;

const Container = styled.View`
  background-color: white;
  flex: 1;
  position: relative;
`;

const MainInfoTxt1 = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  margin-left: ${wp(4.8)}px;
  margin-top: ${hp(18.7)}px;
`;

const MainInfoTxt2 = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  margin-left: ${wp(4.8)}px;
  margin-top: ${RFValue(5)}px;
`;

const SubTxt = styled.Text`
  position: relative;
  color: ${COLORS.gray01};
  margin-left: ${wp(5)}px;
  top: ${hp(1.23)}px;
  font-size: ${RFValue(14)}px;
`;

export default OwnerSignUpFoodScreen;
