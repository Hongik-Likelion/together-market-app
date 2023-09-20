import { PreviousBtn, ContinueBtn } from '@assets/signUp/CommonSignUpScreenIcon';
import OwnerSignUpHeader from '@assets/signUp/OwnerSignUpScreen';
import ChooseSellingFoodBtn from '@components/signUp/owner/ChooseSellingFoodBtn';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from 'colors';
import React, { useContext } from 'react';
import { Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Auth } from 'context/AuthContext';

function OwnerSignUpFoodScreen() {
  const {
    shop: [shopRequest, setShopRequest],
  } = useContext(Auth);

  const { product_categories } = shopRequest;

  const navigation = useNavigation();
  const onPressPreviousBtn = () => navigation.navigate('ownerSignUpScreen');

  const onPressContinueBtn = () => {
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
      <ChooseSellingFoodBtn />
      <PreviousBtn marginBottom={hp(2)} marginLeft={wp(4.8)} onPress={onPressPreviousBtn} />
      <ContinueBtn
        fontColor={product_categories ? 'white' : COLORS.main}
        backColor={product_categories ? COLORS.main : 'white'}
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
