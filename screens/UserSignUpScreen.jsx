import { PreviousBtn, ContinueBtn } from '@assets/signUp/CommonSignUpScreenIcon';
import UserSignUpHeader from '@assets/signUp/UserSignUpScreen';
import SelectMarketTab from '@components/signUp/SelectMarketTab';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from 'colors';
import React, { useState } from 'react';
import { Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';

function UserSignUpScreen() {
  const navigation = useNavigation();

  const [favMarket, selectMarket] = useState(''); //회원이 작성한 시장이 favMarket에 저장됨
  const onChange = (text) => selectMarket(text);

  const onPressPreviousBtn = () => {
    navigation.navigate('commonSignUpScreen');
  };

  const onPressContinueBtn = () => {
    // 선택한 시장을 User 정보관련 배열에 넣어야할듯
    // 다음 단계로 이동
  };

  return (
    <Container>
      <MainInfoTxt1>김영희님,</MainInfoTxt1>
      <MainInfoTxt2>
        <Text style={{ color: COLORS.main }}>자주 방문하는 시장</Text>을 설정해주세요.
      </MainInfoTxt2>
      <SelectMarketTab content={favMarket} onChange={onChange} />
      <PreviousBtn marginBottom={hp(2)} marginLeft={wp(4.8)} onPress={onPressPreviousBtn} />
      <ContinueBtn
        fontColor={favMarket ? 'white' : COLORS.main}
        backColor={favMarket ? COLORS.main : 'white'}
        width={wp(100)}
        marginBottom={hp(6.15)}
        justifyContent="center"
        onPress={onPressContinueBtn}
      />
      <UserSignUpHeaderContainer>
        <UserSignUpHeader position="absolute" marginTop={hp(10)} borderColor="black" />
      </UserSignUpHeaderContainer>
    </Container>
  );
}
const Container = styled.View`
  background-color: white;
  flex: 1;
  position: relative;
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

const UserSignUpHeaderContainer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  align-items: center;
`;

export default UserSignUpScreen;
