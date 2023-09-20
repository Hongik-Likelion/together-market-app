import { KakaoLoginBtn, MainIcon } from '@assets/login/LoginScreenIcon';
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { styled } from 'styled-components/native';
import * as KakaoLogins from '@react-native-seoul/kakao-login';
import { login } from 'api/auth';
import { Auth } from 'context/AuthContext';

function LoginScreen1() {
  const {
    user: [signUpRequest, setSignUpRequest],
  } = useContext(Auth);

  const navigation = useNavigation();

  const onPressLogin = () => {
    // async function kakaoLogin() {
    //   let email,
    //     nickname,
    //     profile_url = null;
    //   try {
    //     const profile = await KakaoLogins.getProfile();
    //     email = profile.email;
    //     nickname = profile.nickname;
    //     profile_url = profile.profileImageUrl;
    //   } catch (err) {}

    //   try {
    //     const response = await login(email);
    //     // 로그인 성공 -> 홈 화면으로 이동
    //     if (response.status === 200) {
    //       const { access_token, refresh_token } = response.data;
    //       navigation.navigate('home-tab');
    //     }
    //   } catch (err) {
    //     const status = err.response.status;

    //     // 로그인 실패 -> 회원가입 페이지로 이동
    //     if (status === 404) {
    //       setSignUpRequest((prev) => ({
    //         ...prev,
    //         email,
    //         nickname,
    //         profile: profile_url,
    //       }));
    //       navigation.navigate('commonSignUpScreen');
    //     }
    //   }
    // }

    setSignUpRequest((prev) => ({
      ...prev,
      email: 'fnjd@jkk.com',
      nickname: '하위하',
      profile: 'https://example.com/profile-image.jpg', // 실제 이미지 URL로 대체
    }));

    navigation.navigate('commonSignUpScreen');
  };

  /* 카카오 로그인 부분
  const onPressKakao = () => {
    async function kakaoLogin() {
      try {
        const token = await KakaoLogins.login();
        console.log('login success!');
        console.log(format(token));
      } catch (err) {}

      try {
        const profile = await KakaoLogins.getProfile();
        const { nickname, email, gender } = profile;

        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('nickname', nickname);
        await AsyncStorage.setItem('gender', gender);

        // 만약 회원 data가 없으면, loginScreen2로 가고
        // 있으면 곧바로 home으로 부분 추가해야함.
        navigation.navigate('loginScreen2');
      } catch (err) {}
    }

    kakaoLogin();
  };
  */
  return (
    <>
      <MainBackground source={require('@assets/login/Login1Background.png')} />
      <Container>
        <StyledMainIcon>
          <MainIcon />
        </StyledMainIcon>
        <LoginInfoText>카카오 로그인으로 시작해보세요!</LoginInfoText>
        <KakaoButton>
          <KakaoLoginBtn onPress={onPressLogin} />
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
