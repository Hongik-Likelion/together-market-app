import { PreviousBtn, ContinueBtn } from '@assets/signUp/CommonSignUpScreenIcon';
import UserSignUpHeader from '@assets/signUp/UserSignUpScreen';
import SelectMarketModal from '@components/signUp/common/SelectMarketModal';
import SelectedMarketItem from '@components/signUp/common/SelectedMarketItem';
import MarketInputGroup from '@components/signUp/owner/MarketInputGroup';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from 'colors';
import React, { useState, useContext } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { signUp, postfavMarket } from 'api/auth';
import format from 'pretty-format';
import { Auth } from 'context/AuthContext';

function UserSignUpScreen() {
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
  const onPressDelete = () => {
    setMarket('');
    setShopRequest((prev) => ({ ...prev, market_id: -1 }));
  };

  /** 이전 버튼 */
  const onPressPreviousBtn = () => navigation.goBack();

  //회원가입 API
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [shopIsError, setShopIsError] = useState(false);
  //자주 찾는 시장 등록 API
  const [shopData, setShopData] = useState(null);

  const onPressContinueBtn = () => {
    if (market_id !== -1) {
      // API 호출 및 데이터 처리
      setIsLoading(true);
      console.log(format(signUpRequest));
      signUp(signUpRequest)
        .then((res) => {
          console.log(format(res.data));
          setUserData(res.data);

          postfavMarket({ market_id }, res.data.access_token)
            .then((res) => {
              console.log(format(res.data));
              setShopData(res.data);
            })
            .catch((err) => {
              console.log('자주찾는시장등록 오류');
              console.log(format(err.response));
              setShopIsError(true);
            });
        })
        .catch((err) => {
          console.log('회원가입오류');
          console.log(format(err.response));

          setIsError(true);
        })
        .finally(() => {
          setIsLoading(false);
          navigation.navigate('guideSignUpScreen'); // 이동은 여기서 호출
        });
    }
  };

  if (isLoading) {
    return (
      <View>
        <Text>로딩중...</Text>
      </View>
    );
  }

  if (isError || shopIsError) {
    return (
      <View>
        <Text>에러 발생</Text>
      </View>
    );
  }

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
          <MarketInputGroup market={market} onPress={() => setModal(true)} />
          <SelectedMarketItem marketName={market} onPressDelete={onPressDelete} />
        </Form>
        <ButtonContainer>
          <PreviousBtn marginBottom={hp(2)} marginLeft={wp(4.8)} onPress={onPressPreviousBtn} />

          <ContinueBtn
            fontColor={market_id !== -1 ? 'white' : COLORS.main}
            backColor={market_id !== -1 ? COLORS.main : 'white'}
            width={wp(100)}
            marginBottom={hp(6.15)}
            justifyContent="center"
            onPress={onPressContinueBtn}
          />
        </ButtonContainer>
        <SelectMarketModal
          open={modal}
          onClose={() => setModal(false)}
          market={market}
          onSelect={(market) => setMarket(market)}
        />
        {console.log('Modal State:', modal)}
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

export default UserSignUpScreen;
