import React, { useEffect, useState } from 'react';
import { COLORS } from 'colors';
import { styled } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import PostIcon from '@assets/PostItem/PostIcon';
// import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

function PostButton() {
    // const [isOwner, setIsOwner] = useState(false);

    const navigation = useNavigation();

    const isOwner = true; // 일단 손님

    // const dummyUser = [
    //     {
    //         id: 5,
    //         is_owner: true,
    //     },
    //     {
    //         id: 6,
    //         is_owner: false,
    //     },
    // ];


    // useEffect(() => {
    //     axios.get('/user/info')
    //     .then(res => {
    //         const data = res.data;
    //         setIsOwner(data.is_owner);
    //     })
    //     .catch(err => console.log(err));
    // }, []);

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