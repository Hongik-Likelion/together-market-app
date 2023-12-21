import React, { useState } from 'react';
import { styled } from 'styled-components/native';
import { COLORS } from 'colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AddImage from '@assets/PostItem/AddImage';
import { Text, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

function ImageUpload({ setPhoto, photo }) {
  const [imgUrl, setImgUrl] = useState('');

  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  const uploadImage = async () => {
    if (!status?.granted) {
      const permission = await requestPermission();
      if (!permission.granted) {
        return null;
      }
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
      aspect: [1, 1],
      base64: true, // base64 형식으로 이미지 변환을 위해 설정
    });
    if (result.cancelled) {
      return null;
    }
    setImgUrl(result.uri);
    setPhoto(result.base64); // base64로 변환된 이미지를 setPhoto를 통해 전달
  };

  return (
    <Container>
      <Title>
        <TitleLabel>
          사진<Text style={{ color: COLORS.main, fontSize: RFValue(13), fontWeight: 500 }}> (선택)</Text>
        </TitleLabel>
      </Title>
      <ImgContainer>
        <TouchableOpacity onPress={uploadImage}>
          {photo === '' ? (
            <AddImage style={{ marginLeft: wp(5), marginTop: hp(2), marginBottom: hp(1) }} />
          ) : imgUrl === '' || imgUrl === undefined ? (
            <Image
              source={{ uri: photo }}
              style={{ width: 100, height: 100, marginLeft: wp(5), marginTop: hp(2), marginBottom: hp(1) }}
            />
          ) : (
            <Image
              source={{ uri: imgUrl }}
              style={{ width: 100, height: 100, marginLeft: wp(5), marginTop: hp(2), marginBottom: hp(1) }}
            />
          )}
        </TouchableOpacity>
        <SubText1>* 직접 촬영한 사진을 첨부해주세요.</SubText1>
        <SubText2>* 리뷰와 무관한 사진은 삭제될 수 있습니다.</SubText2>
      </ImgContainer>
    </Container>
  );
}

const Container = styled.View`
  border-bottom-width: 8px;
  border-bottom-color: ${COLORS.gray02};
`;

const Title = styled.View`
  border-bottom-color: ${COLORS.gray02};
  border-bottom-width: 2px;
`;

const TitleLabel = styled.Text`
  font-size: ${RFValue(17)};
  font-weight: 700;
  padding-top: ${hp(1.5)}px;
  padding-bottom: ${hp(1.5)}px;
  padding-left: ${wp(5)}px;
`;

const ImgContainer = styled.View``;

const SubText1 = styled.Text`
  font-size: ${RFValue(12)}px;
  margin-left: ${wp(5)}px;
  margin-bottom: ${hp(1)}px;
`;

const SubText2 = styled.Text`
  font-size: ${RFValue(12)}px;
  margin-left: ${wp(5)}px;
  margin-bottom: ${hp(2)}px;
`;

export default ImageUpload;
