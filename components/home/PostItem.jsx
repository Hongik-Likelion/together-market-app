import { COLORS } from 'colors';
import React, { useContext, useState } from 'react';
import { styled } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Modal, Pressable, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSharedState } from 'context/FavAndLikeContext';
import MarketModal from './MarketModal';
import { useModalContext } from 'context/MarketModalContext';
import format from 'pretty-format';
import { doLike, doUnlike } from 'api/board';




function PostItem({ post }) {
    

    const { user_info: { user_id, isOwner: is_owner, nickname, profile }, shop_info: { shop_id, shop_name, average_rating }, board_info: { board_id,updated_at: date, rating, photo: image, content, like_count, is_liked } } = post;
    const { favorite, setFavorite, userLike, setUserLike, likeCount, setLikeCount } = useSharedState();


    const [modal, setModal] = useState(false);
    // // '가게 정보' 버튼 클릭시 가게 정보 모달창 띄우기
    const toggleModal = () => {
        setModal(!modal);
    }

    // '채팅 문의' 버튼 클릭시 채팅탭으로(chat)
    // 게시물 클릭시 자세하게 볼 수 있도록(home-detail)
    const navigation = useNavigation();


    // 신고 팝업창 띄우기
    const [banModal, setBanModal] = useState(false);

    // 하트 아이콘(관심 기능)
    const addFav = () => {
        setFavorite(!favorite);
        // DB에 저장된 정보(유저 정보, 하트 누른 게시물 등...) 수정하는 코드 작성?
    }

    // 좋아요 기능
    const addLike = () => {
        
        // DB에 저장된 정보(유저 정보, 좋아요 누른 게시물 등...) 수정하는 코드 작성?
        // DB 연동해서 좋아요 개수 업데이트 시키는 거 구현해야됨
        if (!is_liked) {
            doLike(board_id).then(res => {
                console.log('좋아요 성공');
            }).catch(err => {
                console.log('좋아요 실패');
            })

        } else {
            doUnlike(board_id).then(res => {
                console.log('싫어요 성공');
            }).catch(err => {
                console.log('싫어요 실패');
            })
        }
    }


    return (
        <Container>
            <SubContainer>
                <Info>
                    <Profile source={{ uri: profile }} />
                    <Wrapper>
                        <User user={is_owner}>
                            <UserLabel numberOfLines={1}>
                                {is_owner ? '사장님' : '시장탐방러'}
                            </UserLabel>
                        </User>
                        <Name numberOfLines={1}>{nickname}</Name>
                        <Rating>
                            {is_owner ? '평균 별점 ' : '평균 리뷰 별점 '}
                            <RatingLabel><FontAwesome name={'star'} /> {average_rating}</RatingLabel>
                        </Rating>
                    </Wrapper>
                    <SubWrapper>
                        <Date>{date}</Date>
                    </SubWrapper>
                </Info>
                <Content>{content}</Content>
                <Img>
                    <Image source={{ uri: image }} />
                </Img>
            </SubContainer>

            <Button>
                <InfoButton onPress={(() => setModal(true))}>
                    <MaterialIcons name={'storefront'} color={COLORS.main} size={RFValue(15)} />
                    <ButtonLabel> 가게 정보</ButtonLabel>
                </InfoButton>

                <MarketModal shop_id={shop_id} modal={modal} toggleModal={toggleModal} />

                <ChatButton onPress={() => navigation.navigate('chat')}>
                    <Ionicons name={'chatbubble-ellipses-outline'} color={COLORS.main} size={RFValue(15)} />
                    <ButtonLabel> 채팅 문의</ButtonLabel>
                </ChatButton>
            </Button>


            <Line>
                <Like>
                    {is_liked ? (
                        <Pressable onPress={() => addLike()}>
                            <AntDesign name={'like1'} size={RFValue(15)} color={COLORS.main} />
                        </Pressable>
                    ) : (
                        <Pressable onPress={() => addLike()}>
                            <AntDesign name={'like2'} size={RFValue(15)} />
                        </Pressable>
                    )}

                    <LikeNum>{likeCount}</LikeNum>
                </Like>
                <Comment>
                    <Ionicons name={'chatbubble-ellipses-outline'} size={RFValue(15)} />
                    <CommentNum>0</CommentNum>
                </Comment>
                <Other>
                    <TouchableOpacity onPress={() => setBanModal(true)}>
                        <Entypo name={'dots-three-horizontal'} size={RFValue(13)} />
                    </TouchableOpacity>

                    <Modal
                        animationType='none'
                        transparent={true}
                        visible={banModal}
                    >
                        <BanModal>
                            <Box1><BoxLabel color={COLORS.black}>게시물 신고하기</BoxLabel></Box1>
                            <Box2><BoxLabel color={COLORS.red}>사용자 차단하기</BoxLabel></Box2>
                            <Box3 onPress={() => setBanModal(false)}><BoxLabel color={COLORS.black}>취소</BoxLabel></Box3>
                        </BanModal>
                    </Modal>


                    {favorite ? (
                        <Pressable onPress={() => addFav()}>
                            <AntDesign name={'heart'} size={RFValue(15)} color={COLORS.red} />
                        </Pressable>
                    ) : (
                        <Pressable onPress={() => addFav()}>
                            <AntDesign name={'hearto'} size={RFValue(15)} />
                        </Pressable>
                    )}


                </Other>
            </Line>

        </Container>
    );
}

const SubContainer = styled.View`

`;

const BanModal = styled.View`

    margin-left: ${wp(5)}px;
    margin-right: ${wp(5)}px;
    height: 180px;
    margin-top: ${hp(75)}px;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);

`;

const Box1 = styled.TouchableOpacity`
    background-color: ${COLORS.white};
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    align-items: center;
    height: ${hp(6)}px;
    justify-content: center;
    margin-bottom: 1px;
`;

const Box2 = styled.TouchableOpacity`
    background-color: ${COLORS.white};
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    align-items: center;
    height: ${hp(6)}px;
    justify-content: center;
    margin-bottom: 2px;
`;

const Box3 = styled.TouchableOpacity`
    background-color: ${COLORS.white};
    border-radius: 10px;
    align-items: center;
    height: ${hp(7)}px;
    justify-content: center;
`;

const BoxLabel = styled.Text`
    font-size: ${RFValue(18)}px;
    color : ${(props) => (props.color)};
`;


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
    ${({ user }) =>
        user
            ? `background-color: ${COLORS.main};` : `background-color: ${COLORS.gray01};`
    };
    
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
    width: ${wp(30)}px;

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

const InfoButton = styled.TouchableOpacity` 
    width: 48%;
    height: ${hp(4.5)}px;
    border: solid 1px ${COLORS.main};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;

`;

const ChatButton = styled.TouchableOpacity` 
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