import { ContinueBtn, PreviousBtn } from '@assets/signUp/CommonSignUpScreenIcon';
import OwnerSignUpHeader from '@assets/signUp/OwnerSignUpScreen';
import SelectMarketModal from '@components/signUp/common/SelectMarketModal';
import SelectedMarketItem from '@components/signUp/common/SelectedMarketItem';
import MarketInputGroup from '@components/signUp/owner/MarketInputGroup';
import ShopNameInputGroup from '@components/signUp/owner/ShopNameInputGroup';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from 'colors';

import { Auth } from 'context/AuthContext';
import format from 'pretty-format';
import React, { useContext, useState } from 'react';
import { Alert, SafeAreaView, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

function OwnerSignUpScreen() {
  const {
    user: [signUpRequest, setSignUpRequest],
    shop: [shopRequest, setShopRequest],
  } = useContext(Auth);
  const navigation = useNavigation();
  const { market_id, shop_name } = shopRequest;

  /** 선택된 시장 */
  const [market, setMarket] = useState('');
  /** 시장 선택 모달 상태 */
  const [modal, setModal] = useState(false);

  /** 시장 선택 취소 */
  const onPressDelete = () => setMarket(() => ({ id: -1, name: '' }));

  const handleMarketSelect = (id, name) => {
    setShopRequest((prev) => ({
      ...prev,
      market_id: id,
    }));
    setMarket(name);
  };

  /** 이전 버튼 */
  const onPressPreviousBtn = () => navigation.goBack();

  /** 다음으로 가기 버튼 */
  const onPressContinueBtn = () => {
    /** 시장 등록하고, 가게 이름 등록해야 다음으로 이동 가능 */
    const { market_id, shop_name } = shopRequest;
    if (market_id === -1 || shop_name === '') {
      Alert.alert('오류', '시장과 가게 이름을 입력해주세요');
      return;
    }

    navigation.navigate('ownerSignUpFoodScreen');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Container contentContainerStyle={{ flexGrow: 1 }}>
        <Header>
          <StatusContainer>
            <OwnerSignUpHeader
              secondPage={COLORS.main}
              thirdPage={COLORS.gray01}
              fourthPage={COLORS.gray01}
              fifthPage={COLORS.gray01}
            />
          </StatusContainer>
          <InformationContainer>
            <MainInfoTxt1>{signUpRequest.nickname}님,</MainInfoTxt1>
            <MainInfoTxt2>
              <Text style={{ color: COLORS.main }}>시장 위치와 가게 이름</Text>을 입력해주세요.
            </MainInfoTxt2>
            <SubTxt>시장 위치, 가게 이름 모두 입력해주세요. (필수)</SubTxt>
          </InformationContainer>
        </Header>
        <Form>
          <MarketInputGroup market={market} onPress={() => setModal(true)} />
          <SelectedMarketItem marketName={market} onPressDelete={onPressDelete} />
          <ShopNameInputGroup />
        </Form>

        <ButtonContainer>
          <PreviousBtn marginBottom={hp(2)} marginLeft={wp(4.8)} onPress={onPressPreviousBtn} />

          <ContinueBtn
            fontColor={market_id !== -1 && shop_name !== '' ? 'white' : COLORS.main}
            backColor={market_id !== -1 && shop_name !== '' ? COLORS.main : 'white'}
            width={wp(100)}
            marginBottom={hp(6.15)}
            justifyContent="center"
            onPress={onPressContinueBtn}
          />
        </ButtonContainer>

        <SelectMarketModal open={modal} onClose={() => setModal(false)} market={market} onSelect={handleMarketSelect} />
      </Container>
    </SafeAreaView>
  );
}

const Container = styled(KeyboardAwareScrollView)`
  flex: 1;
  background-color: white;
`;

const Header = styled.View`
  flex: 1;
`;

const StatusContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

const InformationContainer = styled.View`
  flex: 3;
  padding: ${RFValue(12)}px ${RFValue(12)}px;
`;

const Form = styled.View`
  flex: 2;
`;

const MainInfoTxt1 = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
`;

const MainInfoTxt2 = styled.Text`
  font-size: ${RFValue(18)}px;
  margin-top: ${RFValue(4)}px;
  font-weight: bold;
`;

const SubTxt = styled.Text`
  color: ${COLORS.gray01};
  margin-top: ${RFValue(12)}px;
  font-size: ${RFValue(14)}px;
`;

const ButtonContainer = styled.View`
  flex: 0.5;
`;

export default OwnerSignUpScreen;
