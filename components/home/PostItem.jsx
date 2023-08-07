import { COLORS } from 'colors';
import React from 'react';
import { styled } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function PostItem({profile, user, name, rating, date, content, image, like, comment}) {

    return (
        <Container>
            <Info>
                <Profile source={profile}/>
                <Wrapper>
                    <User>
                        <UserLabel numberOfLines={1}>{user}</UserLabel>
                    </User>
                    <Name numberOfLines={1}>{name}</Name>
                    <Rating>
                        평균 별점 <RatingLabel><FontAwesome name={'star'}/> {rating}</RatingLabel>
                    </Rating>
                </Wrapper>
                <SubWrapper>
                    <Date>{date}</Date>
                </SubWrapper>
            </Info>
            <Content>{content}</Content>
            <Img>
                <Image source={image}/>
            </Img>
            <Button>
                <InfoButton>
                    <MaterialIcons name={'storefront'} color={COLORS.main} size={RFValue(15)}/>
                    <ButtonLabel> 가게 정보</ButtonLabel>
                </InfoButton>
                <ChatButton>
                    <Ionicons name={'chatbubble-ellipses-outline'} color={COLORS.main} size={RFValue(15)}/>
                    <ButtonLabel> 채팅 문의</ButtonLabel>
                </ChatButton>
            </Button>
            <Line>
                <Like>
                    <AntDesign name={'like2'} size={RFValue(15)}/>
                    <LikeNum>{like}</LikeNum>
                </Like>
                <Comment>
                    <Ionicons name={'chatbubble-ellipses-outline'} size={RFValue(15)}/>
                    <CommentNum>{comment}</CommentNum>
                </Comment>
                <Other>
                    <Entypo name={'dots-three-horizontal'} size={RFValue(13)}/>
                    <Feather name={'heart'} size={RFValue(15)} />
                </Other>
            </Line>
            
        </Container>
    );
}

const Container = styled.View`
    padding-left: ${wp(6)}px;
    padding-right: ${wp(6)}px;
    padding-top: ${hp(2)}px;
    border-bottom-color: ${COLORS.gray01};
    border-bottom-width: 1px;
`;

const Info = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`;

const Profile = styled.Image`
    height: 55px;
    width: 55px;
`;

const Wrapper = styled.View`
    margin-left: ${wp(1)}px;
    width: ${wp(50)}px;
    height: 100%;

`;

const SubWrapper = styled.View`
     height: 100%;
     width: ${wp(20)}px;
`;

const User = styled.View`
    background-color: ${COLORS.main};
    height: ${hp(2)}px;
    width: ${wp(13)}px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-bottom: ${hp(0.5)}px;
`;

const UserLabel = styled.Text`
    font-size: ${RFValue(9)}px;
    color: ${COLORS.white};
    
`;

const Name = styled.Text`
    font-size: ${RFValue(14)}px;
    font-weight: 700;
    width: ${wp(20)}px;
    margin-bottom: ${hp(0.5)}px;
`;

const Rating = styled.Text`
    font-size: ${RFValue(10)}px;
    width: ${wp(20)}px;

`;

const RatingLabel = styled.Text`
    color: ${COLORS.main};

`;

const Date = styled.Text`
    font-size: ${RFValue(10)}px;
    text-align: right;

`;

const Content = styled.Text`
    font-size: ${RFValue(13)}px;
    padding: 13px 0px;
    line-height: 25px;

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
    justify-content: space-between;
    align-items: center;
    padding: 15px 0px;

    width: 100%;
`;

const InfoButton = styled.View` 
    width: 48%;
    height: ${hp(4.5)}px;
    border: solid 1px ${COLORS.main};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const ChatButton = styled.View` 
    width: 48%;
    height: ${hp(4.5)}px;
    border: solid 1px ${COLORS.main};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const ButtonLabel = styled.Text`
    font-size: ${RFValue(13)}px;
    color: ${COLORS.main};
    font-weight: 700;
`;

const Line = styled.View`
    flex-direction: row;
    padding-bottom: 13px;
    width: 100%;
`;

const Like = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 12%;

`;

const LikeNum = styled.Text`
    font-size: ${RFValue(14)}px;
`;

const Comment = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 11%;
    margin-left: 10px;

`;

const CommentNum = styled.Text`
    font-size: ${RFValue(14)}px;
`;

const Other = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 74%;
    padding-left: 200px;
`;

export default PostItem;