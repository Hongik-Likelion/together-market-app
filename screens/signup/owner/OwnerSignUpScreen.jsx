import { PreviousBtn, ContinueBtn } from '@assets/signUp/CommonSignUpScreenIcon';
import OwnerSignUpHeader from '@assets/signUp/OwnerSignUpScreen';
import GetMarketTab from '@components/signUp/owner/GetMarketTab';
import SetMarketNameTab from '@components/signUp/owner/SetMarketNameTab';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from 'colors';
import React, { useState } from 'react';
import { Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';

function OwnerSignUpScreen() {
  const navigation = useNavigation();

  const [marketLocation, selectMarket] = useState(''); //사장님의 시장위치가 marketLocation 저장됨
  const [marketName, setMarketName] = useState(''); //가게이름이 marketName에 담겨 있음

  const onChangeLocation = (text) => selectMarket(text);
  const onChangeMarketName = (text) => setMarketName(text);

  const onPressPreviousBtn = () => navigation.navigate('commonSignUpScreen');

  const onPressContinueBtn = () => {
    // 시장 위치&가게이름을 Owner 정보관련 배열에 넣어야할듯
    if (marketLocation && marketName) {
      navigation.navigate('guideSignUpScreen');
    }
  };

  return (
    <Container>
      <UserSignUpHeaderContainer>
        <OwnerSignUpHeader
          secondPage={COLORS.main}
          thirdPage={COLORS.gray01}
          fourthPage={COLORS.gray01}
          fifthPage={COLORS.gray01}
          position="absolute"
          marginTop={hp(10)}
        />
      </UserSignUpHeaderContainer>
      <MainInfoTxt1>김영희님,</MainInfoTxt1>
      <MainInfoTxt2>
        <Text style={{ color: COLORS.main }}>시장 위치와 가게 이름</Text>을 입력해주세요.
      </MainInfoTxt2>
      <SubTxt>시장 위치, 가게 이름 모두 입력해주세요. (필수)</SubTxt>
      <GetMarketTab content={marketLocation} onChange={onChangeLocation} />
      <SetMarketNameTab content={marketName} onChange={onChangeMarketName} />
      <PreviousBtn marginBottom={hp(2)} marginLeft={wp(4.8)} onPress={onPressPreviousBtn} />
      <ContinueBtn
        fontColor={marketLocation && marketName ? 'white' : COLORS.main}
        backColor={marketLocation && marketName ? COLORS.main : 'white'}
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
  position: relative;
  color: ${COLORS.gray01};
  margin-left: ${wp(5)}px;
  top: ${hp(1.23)}px;
  font-size: 16px;
`;

export default OwnerSignUpScreen;
