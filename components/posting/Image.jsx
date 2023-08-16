import React from 'react';
import { styled } from 'styled-components/native';
import { COLORS } from 'colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AddImage from '@assets/PostItem/AddImage';
import { Text } from 'react-native';

function Image() {

    return (
        <Container>
            <Title>
                <TitleLabel>
                사진<Text style={{color: COLORS.main, fontSize: RFValue(13), fontWeight: 500}}> (선택)</Text>
                </TitleLabel>
            </Title>
            <ImgContainer>
                <AddImage style={{marginLeft: wp(5), marginTop: hp(2), marginBottom: hp(1)}}></AddImage>
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


const ImgContainer = styled.View`
    
`;

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

export default Image;