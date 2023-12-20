import React, { useEffect, useState } from 'react';
import { COLORS } from 'colors';
import { styled } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import PostIcon from '@assets/PostItem/PostIcon';
import { useNavigation } from '@react-navigation/native';
import { fetchUserInfo } from 'api/auth';

function PostButton() {
    const [isOwner, setIsOwner] = useState(false);

    const navigation = useNavigation();

    // 개인정보조회해서 isOwner 확인(사장님/손님)
    useEffect(() => {
        fetchUserInfo()
        .then(res => {
            // console.log(res.data.is_owner);
            setIsOwner(res.data.is_owner);
        })
        .catch(err => console.log(err));
    })

    const onPressPosting = () => {
        navigation.navigate(isOwner ? 'owner-posting' : 'user-posting', {isOwner});
    };

    return(
        <Container onPress={onPressPosting}>
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