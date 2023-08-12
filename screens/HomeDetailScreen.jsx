import React, {useState} from 'react';
import { styled } from 'styled-components/native';
import { COLORS } from 'colors';
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

function HomeDetailScreen({route}) {
  const {profile, user, name, rating, date, content, image, like, comment, open, address, time, goods} = route.params;
  const { favorite, setFavorite, userLike, setUserLike, likeCount, setLikeCount } = useSharedState();
  
  // '가게 정보' 버튼 클릭시 가게 정보 모달창 띄우기
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
      setModal(!modal);
  }

  // '채팅 문의' 버튼 클릭시 채팅탭으로
  // 게시물 클릭시 자세하게 볼 수 있도록
  const navigation = useNavigation();


  // 신고 팝업창 띄우기
  const [banModal, setBanModal] = useState(false);

  // 하트 아이콘(관심 기능)
  // const [favorite, setFavorite] = useState(false);
  const addFav = () => {
      setFavorite(!favorite);
      // DB에 저장된 정보(유저 정보, 하트 누른 게시물 등...) 수정하는 코드 작성?
  }

  // 좋아요 기능
  // const [userLike, setUserLike] = useState(false);
  // const [likeCount, setLikeCount] = useState(parseInt(like));
  
  const addLike = () => {
      setUserLike(!userLike);
      // DB에 저장된 정보(유저 정보, 좋아요 누른 게시물 등...) 수정하는 코드 작성?
      // DB 연동해서 좋아요 개수 업데이트 시키는 거 구현해야됨
      if (userLike) {
          setLikeCount(likeCount - 1);
      
      } else {
          setLikeCount(likeCount + 1);
          
      }
  }

  return (
    <Container>
    <SubContainer>
      <Info>
        <Profile source={profile}/>
        <Wrapper>
          <User user={user}>
            <UserLabel numberOfLines={1}>{user}</UserLabel>
          </User>
          <Name numberOfLines={1}>{name}</Name>
          <Rating>
            {user === '사장님' ? '평균 별점 ' : '평균 리뷰 별점 '}
            <RatingLabel><FontAwesome name={'star'}/> {rating}</RatingLabel>
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
        <InfoButton onPress={() => toggleModal()}>
          <MaterialIcons name={'storefront'} color={COLORS.main} size={RFValue(15)}/>
          <ButtonLabel> 가게 정보</ButtonLabel>
        </InfoButton>
                
        <Modal
          animationType='none'
          transparent={true}
          visible={modal}
          onRequestClose={toggleModal}
        >
          <TouchableWithoutFeedback onPress={() => toggleModal()}>
            {/*일단 모달창 한번더 클릭했을 때 닫히도록 구현 */}
            {/*onBackdropPress 옵션 찾아보기 */}
          <MarketInfoModal favorite={favorite}>
            <Group>
              <NameAndOpen>
                <NameModal>{name}</NameModal>
                 <OpenModal>{open}</OpenModal>
              </NameAndOpen>

              {favorite ? (
                  <Pressable onPress={() => addFav()}>
                    <AntDesign name={'heart'} size={RFValue(18)} color={COLORS.red}/>
                  </Pressable>
              ) : (
                  <Pressable onPress={() => addFav()}>
                    <AntDesign name={'hearto'} size={RFValue(18)}/>
                  </Pressable>
              )}

            </Group>

            <RatingModal>
              <FontAwesome name={'star'} size={RFValue(14)}/>
              {rating}/5
            </RatingModal>
            <SubGroup>
              <LeftGroup>
                <Title>주소</Title>
                <Title>영업시간</Title>
                <Title>판매 상품</Title>
              </LeftGroup>
              <RightGroup>
                <Detail>{address}</Detail>
                <Detail>{time}</Detail>
                <Detail>{goods}</Detail>
              </RightGroup>
            </SubGroup>
          </MarketInfoModal>
          </TouchableWithoutFeedback>
        </Modal>

        <ChatButton onPress={() => navigation.navigate('chat')}>
          <Ionicons name={'chatbubble-ellipses-outline'} color={COLORS.main} size={RFValue(15)}/>
          <ButtonLabel> 채팅 문의</ButtonLabel>
        </ChatButton>
      </Button>


      <Line>
        <Like>
          {userLike ? (
              <Pressable onPress={() => addLike()}>
                <AntDesign name={'like1'} size={RFValue(15)} color={COLORS.main}/>
              </Pressable>
          ) : (
              <Pressable onPress={() => addLike()}>
                <AntDesign name={'like2'} size={RFValue(15)}/>
              </Pressable>
          )}
                    
          <LikeNum>{likeCount}</LikeNum>
        </Like>
        <Comment>
          <Ionicons name={'chatbubble-ellipses-outline'} size={RFValue(15)}/>
          <CommentNum>{comment}</CommentNum>
        </Comment>
        <Other>
          <TouchableOpacity onPress={() => setBanModal(true)}>
            <Entypo name={'dots-three-horizontal'} size={RFValue(13)}/>
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
              <AntDesign name={'heart'} size={RFValue(15)} color={COLORS.red}/>
            </Pressable>
        ) : (
            <Pressable onPress={() => addFav()}>
                <AntDesign name={'hearto'} size={RFValue(15)}/>
            </Pressable>
        )}
            
                    
        </Other>
      </Line>

    </SubContainer>
    </Container>
  );
}


const Container = styled.View`
  flex: 1;
  background-color: #ffffff;

`;

const SubContainer = styled.View`
    padding-left: ${wp(6)}px;
    padding-right: ${wp(6)}px;
    padding-top: ${hp(2)}px;
    border-bottom-color: ${COLORS.gray01};
    border-bottom-width: 1px;
    border-top-color: ${COLORS.gray01};
    border-top-width: 1.3px;
    background-color: ${COLORS.white};
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


const MarketInfoModal = styled.View`

    background-color: #FFFFFF;
    border: solid 2px ${COLORS.main};
    border-radius: 10px;
    margin-left: ${wp(5)}px;
    margin-right: ${wp(5)}px;
    height: 180px;
    margin-top: ${hp(55)}px;
    padding: 15px;

`;

const Group = styled.View`
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const NameAndOpen = styled.View`
    flex-direction: row;
    align-items: center;
`;

const NameModal = styled.Text`
    font-size: ${RFValue(18)}px;
    font-weight: 700;
    margin-right: ${wp(2)}px;
`;

const OpenModal = styled.Text`
    font-size: ${RFValue(11)}px;
    font-weight: 700;
    color: ${COLORS.main};
`;

const RatingModal = styled.Text`
    flex-direction: row;
    font-size: ${RFValue(14)}px;
    margin-bottom: 10px;
`;

const SubGroup = styled.View`
    flex-direction: row;
    
`;

const LeftGroup = styled.View`

`;

const RightGroup = styled.View`
  
`;

const Title = styled.Text`
    font-size: ${RFValue(13)}px;
    font-weight: 700;
    line-height: 28px;
`;

const Detail = styled.Text`
    font-size: ${RFValue(13)}px;
    line-height: 28px;
    margin-left: 13px;
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
    ${({user}) => 
        user === '사장님' 
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
    width: ${wp(25)}px;

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


export default HomeDetailScreen;