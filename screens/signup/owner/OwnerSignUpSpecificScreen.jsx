import { PreviousBtn } from '@assets/signUp/CommonSignUpScreenIcon';
import OwnerSignUpHeader from '@assets/signUp/OwnerSignUpScreen';
import CompleteBtn from '@assets/signUp/OwnerSignUpSpecificScreen';
import SignUpInput from '@components/signUp/common/SignUpInput';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';

import { useNavigation } from '@react-navigation/native';
import { postOwnerShop, signUp } from 'api/auth';
import { COLORS } from 'colors';
import { Auth } from 'context/AuthContext';
import format from 'pretty-format';
import React, { useContext, useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

function OwnerSignUpSpecificScreen() {
  const {
    user: [signUpRequest, setSignUpRequest],
    shop: [shopRequest, setShopRequest],
  } = useContext(Auth);

  const { shop_address, selling_products, opening_time, closing_time, opening_frequency } = shopRequest;

  const [isVisibleTimePicker, setIsVisibleTimePicker] = useState(false);
  const [inputTimeType, setInputTimeType] = useState('');

  const handleOpenTimePicker = (timeType) => {
    setIsVisibleTimePicker((visible) => !visible);
    setInputTimeType(timeType);
  };

  const navigation = useNavigation();

  const onChangeAddress = (text) => {
    console.log(text);
    setShopRequest((prev) => ({
      ...prev,
      shop_address: text,
    }));
  };

  const onChangeMainProducts = (text) =>
    setShopRequest((prev) => ({
      ...prev,
      selling_products: text,
    }));
  const onChangeOpenDays = (text) =>
    setShopRequest((prev) => ({
      ...prev,
      opening_frequency: text,
    }));

  const handleTimeChange = (event, date) => {
    const { type } = event;

    switch (type) {
      case 'set':
        if (!date) return;

        if (inputTimeType === 'open') {
          setShopRequest((prev) => ({
            ...prev,
            opening_time: getFormattedTime(date),
          }));
        } else if (inputTimeType === 'close') {
          setShopRequest((prev) => ({
            ...prev,
            closing_time: getFormattedTime(date),
          }));
        }
        setIsVisibleTimePicker(false);
      case 'dismissed':
        setIsVisibleTimePicker(false);
        break;
      default:
        break;
    }
  };

  const onPressPreviousBtn = () => navigation.navigate('ownerSignUpFoodScreen');

  function getFormattedTime(date) {
    const hour = date.getHours() % 12 || 12; // Use 12 for midnight
    const minute = date.getMinutes();
    const period = date.getHours() >= 12 ? 'PM' : 'AM';

    return `${hour}:${minute} ${period}`;
  }

  const onPressContinueBtn = () => {
    if (shop_address && selling_products && opening_time && closing_time && opening_frequency) {
      navigation.navigate('guideSignUpScreen'); // 이동은 여기서 호출
    } else {
      Alert.alert('오류', '모든 정보를 입력해주세요!.');
      return;
    }
  };

  return (
    <Container>
      <OwnerSignUpHeader
        secondPage={COLORS.main}
        thirdPage={COLORS.main}
        fourthPage={COLORS.main}
        fifthPage={COLORS.gray01}
        alignSelf="center"
        marginTop={hp(4)}
      />
      <MainInfoTxt1>김영희님,</MainInfoTxt1>
      <MainInfoTxt2>
        <Text style={{ color: COLORS.main }}>가게 상세 정보</Text>를 입력해주세요.
      </MainInfoTxt2>
      <SubTxt>모든 항목을 기입해주세요. (필수)</SubTxt>
      <InputTitle>가게 주소</InputTitle>
      <SignUpInput
        name="shop_address"
        value={shop_address}
        placeholder="주소를 입력해주세요."
        onChangeText={onChangeAddress}
      >
        <Feather name={'search'} size={25} color={COLORS.main} />
      </SignUpInput>
      <InputTitle>대표 상품명</InputTitle>
      <SignUpInput
        name="selling_products"
        value={selling_products}
        placeholder="떡볶이, 순대, 튀김"
        onChangeText={onChangeMainProducts}
      />
      <InputTitle>영업 시간</InputTitle>
      <OpenTimeInputGroup>
        <OpenTimeSubTitle>시작</OpenTimeSubTitle>
        <Pressable style={{ flexGrow: 1, marginRight: 12 }} onPress={handleOpenTimePicker.bind(this, 'open')}>
          <SignUpInput value={opening_time} placeholder="11:00 AM" editable={false}>
            <MaterialIcons name={'keyboard-arrow-down'} size={RFValue(18)} />
          </SignUpInput>
        </Pressable>
        <OpenTimeSubTitle>종료</OpenTimeSubTitle>
        <Pressable style={{ flexGrow: 1 }} onPress={handleOpenTimePicker.bind(this, 'close')}>
          <SignUpInput value={closing_time} placeholder="6:00 PM" editable={false}>
            <MaterialIcons name={'keyboard-arrow-down'} size={RFValue(18)} />
          </SignUpInput>
        </Pressable>
      </OpenTimeInputGroup>

      <InputTitle>영업일</InputTitle>
      <SignUpInput
        name="opening_frequency"
        value={opening_frequency}
        placeholder="(예시: 매일, 월~금, 화~토....)"
        onChangeText={onChangeOpenDays}
      />

      <PreviousBtn marginBottom={hp(2)} marginTop={hp(2)} onPress={onPressPreviousBtn} />
      <CompleteBtn
        fontColor={
          shop_address && selling_products && opening_time && closing_time && opening_frequency ? 'white' : COLORS.main
        }
        backColor={
          shop_address && selling_products && opening_time && closing_time && opening_frequency ? COLORS.main : 'white'
        }
        alignSelf="center"
        onPress={onPressContinueBtn}
      />

      {isVisibleTimePicker && (
        <DateTimePicker value={new Date()} mode="time" display="spinner" onChange={handleTimeChange} />
      )}
    </Container>
  );
}

// const UserSignUpHeaderContainer = styled.View`
//   position: absolute;
//   left: 0;
//   right: 0;
//   align-items: center;
// `;

const Container = styled(KeyboardAwareScrollView)`
  flex: 1;
  padding-top: ${hp(1)}px;
  padding-left: ${wp(6)}px;
  padding-right: ${wp(6)}px;

  background-color: white;
`;

const MainInfoTxt1 = styled.Text`
  margin-top: ${hp(2)}px;
  font-size: ${RFValue(20)}px;
  font-weight: bold;
`;

const MainInfoTxt2 = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: bold;
`;

const SubTxt = styled.Text`
  color: ${COLORS.gray01};
  font-size: ${RFValue(14)}px;
`;

const InputTitle = styled.Text`
  margin-top: ${hp(3)}px;
  margin-bottom: ${hp(3)}px;
  font-size: ${RFValue(16)}px;
  font-weight: bold;
`;

const OpenTimeInputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const OpenTimeSubTitle = styled.Text`
  margin-right: ${wp(3)}px;
  font-size: ${RFValue(14)}px;
  font-weight: bold;
`;

export default OwnerSignUpSpecificScreen;
