import { OwnerSelect, CustomerSelect, PreviousBtn, ContinueBtn } from '@assets/signUp/CommonSignUpScreenIcon';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from 'colors';
import { UserInfo } from 'context/UserInfoContext';
import React, { useContext } from 'react';
import { Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';

function CommonSignUpScreen() {
  const navigation = useNavigation();

  const { setUserType } = useContext(UserInfo);

  //색 변화하는 부분 넣기
  const onPressUserSelectBtn = () => {};

  const onPressPreviousBtn = () => {
    navigation.navigate('login');
  };

  const onPressContineBtn = () => {
    navigation.navigate('login');
  };

  return (
    <Container>
      <MainInfoTxt1>김영희님,</MainInfoTxt1>
      <MainInfoTxt2>
        <Text style={{ color: COLORS.main }}>유형</Text>을 선택해주세요!
      </MainInfoTxt2>
      <SubTxt>한 가지 유형을 선택해주세요. (필수)</SubTxt>
      <SelectOption>
        <OwnerSelect onPress={(onPressUserSelectBtn, setUserType(1))} />
        <CustomerSelect onPress={(onPressUserSelectBtn, setUserType(2))} />
      </SelectOption>
      <PreviousBtn marginBottom={hp(2)} marginLeft={wp(4.8)} onPress={onPressPreviousBtn} />
      <ContinueBtn width={wp(100)} marginBottom={hp(6.15)} justifyContent="center" onPress={onPressContineBtn} />
    </Container>
  );
}

const Container = styled.View`
  background-color: white;
  flex: 1;
`;

const MainInfoTxt1 = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-left: ${wp(4.8)}px;
  margin-top: ${hp(18.7)}px;
`;

const MainInfoTxt2 = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-left: ${wp(4.8)}px;
  margin-top: 5px;
`;

const SubTxt = styled.Text`
  color: ${COLORS.gray01};
  margin-left: ${wp(4.8)}px;
  margin-top: ${hp(1.23)}px;
  margin-bottom: ${hp(5.41)}px;
  font-size: 16px;
`;

const SelectOption = styled.View`
  margin-left: ${wp(29.8)}px;
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
`;

export default CommonSignUpScreen;
