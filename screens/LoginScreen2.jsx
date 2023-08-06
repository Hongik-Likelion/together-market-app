import { MainBackground2, AccessPhoto, AccessCamera, StartBtn } from '@assets/login/LoginScreen2Icon';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';

function LoginScreen2() {
  const navigation = useNavigation();

  const onPressStart = () => {
    navigation.navigate('commonSignUpScreen');
  };

  return (
    <>
      <MainBackground2 position="absoulte" z-index="-1" width={wp(100)} height={hp(100)} />
      <Container>
        <Description1>더 나은 함께사장 서비스 이용을 위하여</Description1>
        <Description2>동의가 필요한 내용을 확인해주세요.</Description2>
        <AccessMention>선택적 접근 권한</AccessMention>
        <AccessIcon>
          <AccessPhoto />
          <AccessCamera />
        </AccessIcon>
        <Icon onPress={onPressStart}>
          <StartBtn />
        </Icon>
      </Container>
    </>
  );
}

const Container = styled.View`
  background-color: white;

  position: absolute;
  bottom: 0;

  width: ${wp(100)}px;
  height: ${hp(49)}px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

const Description1 = styled.Text`
  font-size: 18px;
  margin-top: 28.12px;
  margin-left: ${wp(5.12)}px;
`;

const Description2 = styled.Text`
  font-size: 18px;
  margin-top: 8px;
  margin-left: ${wp(5.12)}px;
`;

const AccessMention = styled.Text`
  margin-top: ${hp(1.15)}px;
  margin-left: ${wp(5.12)}px;
  font-weight: bold;
`;

const AccessIcon = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: ${hp(2.748)}px;
`;

const Icon = styled.TouchableOpacity`
  margin-top: ${hp(4.68)}px;
  align-items: center;
`;

export default LoginScreen2;
