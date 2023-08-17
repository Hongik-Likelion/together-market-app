import React, { useState } from 'react';
// import { Platform } from 'react-native';
import { AccessPhoto, AccessCamera, StartBtn } from '@assets/login/LoginScreen2Icon';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
// import { check, request } from 'react-native-permissions';

const LoginScreen2 = () => {
  const navigation = useNavigation();

  const onPressStart = () => {
    navigation.navigate('commonSignUpScreen');
  };

  //엑세스 허용 시도 부분
  /*
  const requestPhotoPermission = async () => {
    const permission = Platform.OS === 'android' ? 'android.permission.READ_EXTERNAL_STORAGE' : 'photo';

    try {
      const result = await check(permission);
      if (result === 'denied' || result === 'blocked') {
        const granted = await request(permission);
        if (granted === 'granted') {
          console.log('사진 엑세스 권한 허용됨');
        } else {
          console.log('사진 엑세스 권한 거부됨');
        }
      } else if (result === 'granted') {
        console.log('이미 사진 엑세스 권한이 허용되어 있음');
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const requestCameraPermission = async () => {
    const permission = Platform.OS === 'android' ? 'android.permission.CAMERA' : 'camera';

    try {
      const result = await check(permission);
      if (result === 'denied' || result === 'blocked') {
        const granted = await request(permission);
        if (granted === 'granted') {
          console.log('카메라 엑세스 권한 허용됨');
        } else {
          console.log('카메라 엑세스 권한 거부됨');
        }
      } else if (result === 'granted') {
        console.log('이미 카메라 엑세스 권한이 허용되어 있음');
      }
    } catch (error) {
      console.warn(error);
    }
  };
  */

  return (
    <>
      <MainBackground2 source={require('@assets/login/Login2Background.png')} />
      <Container>
        <Description1>더 나은 함께사장 서비스 이용을 위하여</Description1>
        <Description2>동의가 필요한 내용을 확인해주세요.</Description2>
        <AccessMention>선택적 접근 권한</AccessMention>
        <AccessIcon>
          <AccessPhoto />
          <AccessCamera />

          {/* 
          <AccessPhoto onPress={requestPhotoPermission} />
          <AccessCamera onPress={requestCameraPermission} />
          */}
        </AccessIcon>
        <Icon onPress={onPressStart}>
          <StartBtn />
        </Icon>
      </Container>
    </>
  );
};
const MainBackground2 = styled.Image`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
`;

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
  font-size: ${RFValue(15)}px;
  margin-top: ${RFValue(28.12)}px;
  margin-left: ${wp(5.12)}px;
`;

const Description2 = styled.Text`
  font-size: ${RFValue(15)}px;
  margin-top: ${RFValue(7)}px;
  margin-left: ${wp(5.12)}px;
`;

const AccessMention = styled.Text`
  margin-top: ${hp(2)}px;
  margin-left: ${wp(5.12)}px;
  font-weight: bold;
  font-size: ${RFValue(12)}px;
`;

const AccessIcon = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: ${hp(2)}px;
`;

const Icon = styled.TouchableOpacity`
  margin-top: ${hp(5)}px;
  align-items: center;
`;

export default LoginScreen2;
