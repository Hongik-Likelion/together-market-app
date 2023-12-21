import { ContinueBtn, PreviousBtn } from '@assets/signUp/CommonSignUpScreenIcon';
import UserSignUpHeader from '@assets/signUp/UserSignUpScreen';
import SelectMarketModal from '@components/signUp/common/SelectMarketModal';
import SelectedMarketItem from '@components/signUp/common/SelectedMarketItem';
import MarketInputGroup from '@components/signUp/owner/MarketInputGroup';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from 'colors';
import { Auth } from 'context/AuthContext';
import React, { useContext, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';

function UserSignUpScreen() {
  const navigation = useNavigation();

  const {
    user: [signUpRequest, setSignUpRequest],
    market: [favouriteMarketRequest, setFavouriteMarketRequest],
  } = useContext(Auth);

  /** 선택된 시장 */
  const [market, setMarket] = useState({
    id: -1,
    name: '',
  });

  /** 시장 선택 모달 상태 */
  const [modal, setModal] = useState(false);

  /** 시장 선택 취소 */
  const onPressDelete = () => setMarket(() => ({ id: -1, name: '' }));

  /** 이전 버튼 */
  const onPressPreviousBtn = () => navigation.goBack();

  const handleAddFavoriteMarket = (id, name) => {
    setMarket((prev) => ({
      ...prev,
      id,
      name,
    }));
    setFavouriteMarketRequest(id);
  };

  const onPress = () => {
    if (favouriteMarketRequest === -1) {
      Alert.alert('오류', '자주가는 시장을 선택해주세요');
      return;
    }
    navigation.navigate('guideSignUpScreen');
  };

  const handleModalOpen = () => setModal(true);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Container contentContainerStyle={{ flexGrow: 1 }}>
        <Header>
          <StatusContainer>
            <UserSignUpHeader isNextPage={COLORS.gray01} />
          </StatusContainer>
          <InformationContainer>
            <MainInfoTxt1>{signUpRequest.nickname}님,</MainInfoTxt1>
            <MainInfoTxt2>
              <Text style={{ color: COLORS.main }}>자주 방문하는 시장</Text>을 설정해주세요.
            </MainInfoTxt2>
          </InformationContainer>
        </Header>
        <Form>
          <MarketInputGroup market={market.name} onPress={handleModalOpen} />
          <SelectedMarketItem marketName={market.name} onPressDelete={onPressDelete} />
        </Form>
        <ButtonContainer>
          <PreviousBtn marginBottom={hp(2)} marginLeft={wp(4.8)} onPress={onPressPreviousBtn} />

          <ContinueBtn
            fontColor={market.id !== -1 ? 'white' : COLORS.main}
            backColor={market.id !== -1 ? COLORS.main : 'white'}
            width={wp(100)}
            marginBottom={hp(6.15)}
            justifyContent="center"
            onPress={onPress}
          />
        </ButtonContainer>
      </Container>
      <SelectMarketModal
        open={modal}
        onClose={() => setModal(false)}
        market={market}
        onSelect={handleAddFavoriteMarket}
      />
    </SafeAreaView>
  );
}

const Container = styled.View`
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

const Form = styled.Pressable`
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

export default UserSignUpScreen;
