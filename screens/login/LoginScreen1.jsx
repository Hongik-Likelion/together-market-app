import { KakaoLoginBtn, MainIcon } from '@assets/login/LoginScreenIcon';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { styled } from 'styled-components/native';

function LoginScreen1() {
  const navigation = useNavigation();

  const onPressKakao = () => {
    navigation.navigate('loginScreen2');
  };

  return (
    <>
      <MainBackground source={require('@assets/login/Login1Background.png')} />
      <Container>
        <StyledMainIcon>
          <MainIcon />
        </StyledMainIcon>
        <LoginInfoText>카카오 로그인으로 시작해보세요!</LoginInfoText>
        <KakaoButton>
          <KakaoLoginBtn onPress={onPressKakao} />
        </KakaoButton>
      </Container>
    </>
  );
}

const MainBackground = styled.Image`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
`;

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const StyledMainIcon = styled.View`
  margin-top: 195px;
`;

const LoginInfoText = styled.Text`
  margin-top: 53px;
  font-weight: bold;
`;

const KakaoButton = styled.TouchableOpacity`
  margin-top: 15px;
`;

export default LoginScreen1;
