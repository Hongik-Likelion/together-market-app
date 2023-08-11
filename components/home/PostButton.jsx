import React from 'react';
import { COLORS } from 'colors';
import { styled } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import PostIcon from '@assets/PostItem/PostIcon';

function PostButton() {
    return(
        <Container>
            <PostIcon></PostIcon>
            <Text>글쓰기</Text>
        </Container>
    );
}

const Container = styled.TouchableOpacity`
    position: absolute;
    width: ${wp(30)}px;
    height: ${hp(6)}px;
    border-radius: 30px;
    background-color: ${COLORS.main};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: ${hp(70)}px;
    margin-left: ${wp(65)}px;
    
`;

const Text = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${COLORS.white};
    font-weight: 700;
    margin-left: ${wp(1)}px;
`;

export default PostButton;