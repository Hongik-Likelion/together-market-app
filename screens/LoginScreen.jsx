import { MainBackground, MainIcon, KakaoLoginBtn } from '@assets/login/LoginScreenIcon';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';

function LoginScreen() {
  const navigation = useNavigation();

  const onPressKakao = () => {
    navigation.navigate('loginScreen2');
  };

  return (
    <>
      <MainBackground position="absolute" z-index="-1" width={wp(100)} height={hp(100)} />
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

export default LoginScreen;
