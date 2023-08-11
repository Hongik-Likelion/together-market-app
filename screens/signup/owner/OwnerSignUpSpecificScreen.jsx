import { PreviousBtn, ContinueBtn } from '@assets/signUp/CommonSignUpScreenIcon';
import OwnerSignUpHeader from '@assets/signUp/OwnerSignUpScreen';
import GetMarketAddressTab from '@components/signUp/owner/GetMarketAddressTab';
import GetMainProductTab from '@components/signUp/owner/GetMainProductTab';
import GetOpenTime from '@components/signUp/owner/GetOpenTime';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from 'colors';
import React, { useState } from 'react';
import { Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

function OwnerSignUpSpecificScreen() {
  const navigation = useNavigation();

  const [marketAddress, setMarketAddress] = useState(''); //가게 주소
  const [mainProducts, setMainProducts] = useState(''); // 대표 상품명

  const onChangeAddress = (text) => setMarketAddress(text);
  const onChangeMainProducts = (text) => setMainProducts(text);

  const onPressPreviousBtn = () => navigation.navigate('ownerSignUpFoodScreen');

  const onPressContinueBtn = () => {
    if (marketAddress && mainProducts) {
      navigation.navigate('guideSignUpScreen');
    }
  };

  return (
    <Container>
      <UserSignUpHeaderContainer>
        <OwnerSignUpHeader
          secondPage={COLORS.main}
          thirdPage={COLORS.main}
          fourthPage={COLORS.main}
          fifthPage={COLORS.gray01}
          position="absolute"
          marginTop={hp(10)}
        />
      </UserSignUpHeaderContainer>
      <MainInfoTxt1>김영희님,</MainInfoTxt1>
      <MainInfoTxt2>
        <Text style={{ color: COLORS.main }}>가게 상세 정보</Text>를 입력해주세요.
      </MainInfoTxt2>
      <SubTxt>모든 항목을 기입해주세요. (필수)</SubTxt>

      <GetMarketAddressTab marketAddress={marketAddress} onChangeAddress={onChangeAddress} />
      <GetMainProductTab mainProducts={mainProducts} onChangeMainProducts={onChangeMainProducts} />
      <GetOpenTime />

      <PreviousBtn marginBottom={hp(2)} marginLeft={wp(4.8)} onPress={onPressPreviousBtn} />
      <ContinueBtn
        fontColor={marketAddress && mainProducts ? 'white' : COLORS.main}
        backColor={marketAddress && mainProducts ? COLORS.main : 'white'}
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

export default OwnerSignUpSpecificScreen;
