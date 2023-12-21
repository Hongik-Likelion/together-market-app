import { KakaoLoginBtn, MainIcon } from '@assets/login/LoginScreenIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';
import { login } from 'api/auth';
import { Auth } from 'context/AuthContext';
import format from 'pretty-format';
import React, { useContext, useEffect } from 'react';
import { Alert } from 'react-native';
import { styled } from 'styled-components/native';
import * as Google from 'expo-auth-session/providers/google';

function LoginScreen1() {
  const {
    user: [signUpRequest, setSignUpRequest],
  } = useContext(Auth);

  const navigation = useNavigation();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '779740922835-emm9m5evhd87eerncceaimgma8b2tqtn.apps.googleusercontent.com',
  });

  const handle = () => {
    promptAsync();
  };

  useEffect(() => {
    handleLoginWithGoogle();
  }, [response]);

  const handleLoginWithGoogle = async () => {
    if (response?.type === 'success') {
      console.log('login');
      try {
        const googleResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
          headers: { Authorization: `Bearer ${response.authentication.accessToken}` },
        });
        const profile = await googleResponse.json();

        const { email, name, picture } = profile;

        try {
          const loginResponse = await login(email);
          // 로그인 성공 -> 홈 화면으로 이동

          if (loginResponse.status === 202) {
            const { accessToken, refreshToken } = loginResponse.data;

            await AsyncStorage.setItem('access_token', accessToken);
            await AsyncStorage.setItem('refresh_token', refreshToken);

            navigation.reset({ routes: [{ name: 'home-tab' }] });
          }
        } catch (err) {
          console.log(`error ${format(err)}`);
          const status = err.response.status;
          // 로그인 실패 -> 회원가입 페이지로 이동
          if (status === 404) {
            setSignUpRequest((prev) => ({
              ...prev,
              email,
              nickname: name,
              profile: picture,
            }));
            navigation.navigate('commonSignUpScreen');
          }
        }
      } catch (err) {
        console.log(`hello ${format(err)}`);
      }
    }
  };

  const onPressLogin = () => {
    async function handleKakaoLogin() {
      try {
        await KakaoLogins.login();
      } catch (err) {
        Alert.alert('카카오 로그인 실패', JSON.stringify(err));
      }

      try {
        const profile = await KakaoLogins.getProfile();
        const { email, nickname, profileImageUrl } = profile;

        try {
          const response = await login(email);
          // 로그인 성공 -> 홈 화면으로 이동
          if (response.status === 202) {
            const { accessToken, refreshToken } = response.data;

            await AsyncStorage.setItem('access_token', accessToken);
            await AsyncStorage.setItem('refresh_token', refreshToken);

            navigation.reset({ routes: [{ name: 'home-tab' }] });
          }
        } catch (err) {
          const status = err.response.status;
          // 로그인 실패 -> 회원가입 페이지로 이동
          if (status === 404) {
            setSignUpRequest((prev) => ({
              ...prev,
              email,
              nickname,
              profile: profileImageUrl,
            }));
            navigation.navigate('commonSignUpScreen');
          }
        }
      } catch (err) {}
    }

    handleKakaoLogin();
  };

  return (
    <>
      <MainBackground source={require('@assets/login/Login1Background.png')} />
      <Container>
        <StyledMainIcon>
          <MainIcon />
        </StyledMainIcon>
        <LoginInfoText>카카오 로그인으로 시작해보세요!</LoginInfoText>

        <KakaoButton onPress={handle}>
          <KakaoLoginBtn />
        </KakaoButton>
      </Container>
    </>
  );
}

const MainBackground = styled.Image`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const Container = styled.View`
  flex: 1;
  z-index: 2;
  align-items: center;
`;

const StyledMainIcon = styled.View`
  margin-top: 195px;
`;

const LoginInfoText = styled.Text`
  margin-top: 53px;
  font-weight: bold;
`;

const KakaoButton = styled.Pressable`
  margin-top: 15px;
`;

export default LoginScreen1;
