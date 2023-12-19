import React, { useContext } from 'react';
import { styled } from 'styled-components/native';
import { COLORS } from 'colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { CommonPostingContext } from 'context/CommonPostingContext';
import { useNavigation } from '@react-navigation/native';


function PostingButton() {

    const navigation = useNavigation();

    const {
        marketExists,
        shopExists,
        selectedTag,
        reviewText,
    } = useContext(CommonPostingContext);

    const isAllFilled = marketExists && shopExists && selectedTag !== -1 && reviewText !== "";
    return (
        <Container>
            <PostingBtn isAllFilled={isAllFilled} disabled={!isAllFilled} onPress={() => navigation.navigate('home-list')}>
                <ButtonLabel isAllFilled={isAllFilled}>게시물 올리기</ButtonLabel>
            </PostingBtn>
        </Container>
    );
}

const Container = styled.View`
    
`;

const PostingBtn = styled.TouchableOpacity`
    margin-top: ${wp(4)}px;
    margin-bottom: ${wp(4)}px;
    margin-left: ${wp(5)}px;
    margin-right: ${wp(5)}px;
    height: ${hp(4.5)}px;
    border: solid 1px ${COLORS.main};
    background-color: ${(props) => (props.isAllFilled ? COLORS.main : COLORS.white)};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const ButtonLabel = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${(props) => (props.isAllFilled ? COLORS.white : COLORS.main)};
    font-weight: 700;
`;

export default PostingButton;