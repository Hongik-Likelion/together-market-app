import { COLORS } from 'colors';
import React from 'react';
import { styled } from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function PostItem({profile, user, name, rating, date, content, image}) {

    return (
        <Container>
            <Info>
                <Profile source={profile}/>
                <Wrapper>
                    <User>
                        <UserLabel>{user}</UserLabel>
                    </User>
                    <Name>{name}</Name>
                    <Rating>평균 별점 {rating}</Rating>
                </Wrapper>
                <Date>{date}</Date>
            </Info>
            <Content>{content}</Content>
            <Img>
                <Image source={image}/>
            </Img>
            <Button>
                <InfoButton>
                    <MaterialIcons name={'storefront'} color={COLORS.main} size={18}/>
                    <ButtonLabel>가게 정보</ButtonLabel>
                </InfoButton>
                <ChatButton>
                    <Ionicons name={'chatbubble-ellipses-outline'} color={COLORS.main} size={18}/>
                    <ButtonLabel>채팅 문의</ButtonLabel>
                </ChatButton>
            </Button>
            <Line>
                <Like>
                    <AntDesign name={'like2'} size={14}/>
                </Like>
                <Comment>
                    <Ionicons name={'chatbubble-ellipses-outline'} size={14}/>
                </Comment>
                <Entypo name={'dots-three-horizontal'} size={14}/>
                <Feather name={'heart'} size={14}/>
            </Line>
            
        </Container>
    );
}

const Container = styled.View`
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 20px;
    border-bottom-color: ${COLORS.gray01};
    border-bottom-width: 1.3px;
`;

const Info = styled.View`
    flex-direction: row;
    width:100%;
`;

const Profile = styled.Image`
    height: 55px;
    width: 55px;
    background-color: yellow;
`;

const Wrapper = styled.View`
    padding-left: 15px;
background-color: blue;

`;

const User = styled.View`
    background-color: ${COLORS.main};
    height: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`;

const UserLabel = styled.Text`
    font-size: 12px;
    color: ${COLORS.white};

`;

const Name = styled.Text`
    font-size: 18px;
    font-weight: 700;
`;

const Rating = styled.Text`

`;

const Date = styled.Text`
background-color: red;
   
`;

const Content = styled.Text`
    font-size: 15px;
    padding: 10px 0px;
    line-height: 25%;
`;

const Img = styled.View`
    justify-content: center;
    align-items: center;
`;

const Image = styled.Image`
    height: 153px;
    width: 100%;
`;

const Button = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0px;
`;

const InfoButton = styled.View` 
    width: 166px;
    height: 38px;
    border: solid 1px ${COLORS.main};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const ChatButton = styled.View` 
    width: 166px;
    height: 38px;
    border: solid 1px ${COLORS.main};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const ButtonLabel = styled.Text`
    font-size: 18px;
    color: ${COLORS.main};
    font-weight: 500;
`;

const Line = styled.View`
    flex-direction: row;
    padding-bottom: 10px;
    
`;

const Like = styled.View`
    
`;

const Comment = styled.View`
    
`;

export default PostItem;