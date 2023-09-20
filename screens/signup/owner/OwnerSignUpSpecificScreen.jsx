import { PreviousBtn } from '@assets/signUp/CommonSignUpScreenIcon';
import CompleteBtn from '@assets/signUp/OwnerSignUpSpecificScreen';
import OwnerSignUpHeader from '@assets/signUp/OwnerSignUpScreen';
import GetMarketAddressTab from '@components/signUp/owner/GetMarketAddressTab';
import GetMainProductTab from '@components/signUp/owner/GetMainProductTab';
import GetOpenTime from '@components/signUp/owner/GetOpenTime';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from 'colors';
import React, { useContext, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import GetOpenDay from '@components/signUp/owner/GetOpenDay';
import { Auth } from 'context/AuthContext';
import format from 'pretty-format';
import { signUp, postOwnerShop } from 'api/auth';

function OwnerSignUpSpecificScreen() {
  const {
    user: [signUpRequest, setSignUpRequest],
    shop: [shopRequest, setShopRequest],
  } = useContext(Auth);

  const { shop_address, selling_products, opening_time, closing_tme, opening_frequency } = shopRequest;

  const navigation = useNavigation();

  const [marketAddress, setMarketAddress] = useState(''); // 가게 주소
  const [mainProducts, setMainProducts] = useState(''); // 대표 상품명
  const [startTimeString, setStartTimeString] = useState(''); // 시작 시간 문자열
  const [endTimeString, setEndTimeString] = useState(''); // 종료 시간 문자열
  const [openDays, setOpenDays] = useState(''); // 영업일

  const onChangeAddress = (text) => setMarketAddress(text);
  const onChangeMainProducts = (text) => setMainProducts(text);
  const onChangeOpenDays = (text) => setOpenDays(text);

  const onPressPreviousBtn = () => navigation.navigate('ownerSignUpFoodScreen');

  const onSaveTimeData = (start, end) => {
    setStartTimeString(start);
    setEndTimeString(end);
  };

  //회원가입 API
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [shopIsError, setShopIsError] = useState(false);
  //상점 등록 API
  const [shopData, setShopData] = useState(null);

  const onPressContinueBtn = () => {
    if (marketAddress && mainProducts && startTimeString && endTimeString) {
      const request = {
        ...shopRequest,

        shop_address: marketAddress,
        selling_products: mainProducts,
        opening_time: startTimeString,
        closing_time: endTimeString,
        opening_frequency: openDays,
      };

      console.log(format(request));
      console.log(format(signUpRequest));

      // API 호출 및 데이터 처리
      setIsLoading(true);
      signUp(signUpRequest)
        .then((res) => {
          console.log(format(res.data));
          setUserData(res.data);

          postOwnerShop(request, res.data.access_token)
            .then((res) => {
              console.log(format(res.data));
              setShopData(res.data);
            })
            .catch((err) => {
              console.log('상점등록 오류');
              console.log(err);
              setShopIsError(true);
            });
        })
        .catch((err) => {
          console.log('회원가입오류');
          console.log(err);
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
      <GetOpenTime onSaveTimeData={onSaveTimeData} />
      <GetOpenDay openDays={openDays} onChangeOpenDays={onChangeOpenDays} />
      <PreviousBtn marginBottom={hp(2)} marginLeft={wp(4.8)} onPress={onPressPreviousBtn} />
      <CompleteBtn
        fontColor={marketAddress && mainProducts && startTimeString && endTimeString ? 'white' : COLORS.main}
        backColor={marketAddress && mainProducts && startTimeString && endTimeString ? COLORS.main : 'white'}
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
