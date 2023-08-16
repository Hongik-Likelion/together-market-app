import React, { useState } from 'react';
import OwnerInfoTopTab from '@components/profile/mainProfile/owner/OwnerInfoTopTab';
import MyMarkCommentList from '@components/profile/mainProfile/owner/MyMarkCommentsList';
import OwnerPostingList from '@components/profile/mainProfile/owner/OwnerPostingList';

import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';
import { COLORS } from 'colors';

function OwnerProfileScreen() {
  //개인정보 조회 API 응답 데이터 예시
  const userInfo = {
    id: 1,
    email: 'gdhkvdkd@gmail.com',
    nickname: '바삭마차',
    profile: require('@assets/profile/profileOwner.png'),
    introduction: '바삭함으로 승부보는 튀김전문점 바삭마차',
    is_owner: true,
    opening_time: '11:00',
    closing_time: '18:00',
  };

  // 나의 게시물 API 응답 데이터 예시
  const myPostings = [
    {
      shop_info: {
        shop_name: '바삭마차',
      },
      board_info: {
        board_id: 1,
        created_at: '2023.08.18',
        photo: require('@assets/profile/myProfileMarket.png'),
        content: '오늘도 맛있게 조리중입니다. 갓튀긴 바삭바삭한 돈까스와 바삭마차의 조화를 느껴보세요',
      },
    },
  ];

  // 가게 후기 API 응답 데이터 예시
  const myMarkComments = [
    {
      user_info: {
        nickname: '나는야먹보',
      },
      board_info: {
        board_id: 1,
        created_at: '2023.08.18',
        rating: 5,
        photo: require('@assets/profile/myProfileMarket.png'),
        content: '[바삭마차 리뷰] 와 튀김이 진짜 대박 완전 갓 튀겨가지고 맛있네용 사장님도 친절하시고',
        like_count: 2,
        is_liked: true,
      },
    },
    {
      user_info: {
        nickname: '이것도사자',
      },
      board_info: {
        board_id: 2,
        created_at: '2023.08.18',
        rating: 2,
        photo: require('@assets/profile/myProfileMarket.png'),
        content: '[바삭마차 리뷰] 와 튀김이 진짜 대박 완전 갓 튀겨가지고 맛있네용 사장님도 친절하시고',
        like_count: 2,
        is_liked: true,
      },
    },
    {
      user_info: {
        nickname: '또다른사자',
      },
      board_info: {
        board_id: 3,
        created_at: '2023.08.18',
        rating: 2,
        photo: require('@assets/profile/myProfileMarket.png'),
        content: '[바삭마차 리뷰] 와 튀김이 진짜 대박 완전 갓 튀겨가지고 맛있네용 사장님도 친절하시고',
        like_count: 2,
        is_liked: true,
      },
    },
    {
      user_info: {
        nickname: '나는코끼리',
      },
      board_info: {
        board_id: 4,
        created_at: '2023.08.18',
        rating: 2,
        photo: require('@assets/profile/myProfileMarket.png'),
        content: '[바삭마차 리뷰] 와 튀김이 진짜 대박 완전 갓 튀겨가지고 맛있네용 사장님도 친절하시고',
        like_count: 2,
        is_liked: true,
      },
    },
    {
      user_info: {
        nickname: '배고파',
      },
      board_info: {
        board_id: 5,
        created_at: '2023.08.18',
        rating: 2,
        photo: require('@assets/profile/myProfileMarket.png'),
        content: '[바삭마차 리뷰] 와 튀김이 진짜 대박 완전 갓 튀겨가지고 맛있네용 사장님도 친절하시고',
        like_count: 2,
        is_liked: true,
      },
    },
  ];

  const [isMyPost, selectMyPost] = useState(true);
  const [isMarkComment, selecMarkComment] = useState(false);

  const onPressMyPostBtn = () => {
    selectMyPost(true);
    selecMarkComment(false);
  };
  const onPressMarkCommentBtn = () => {
    selectMyPost(false);
    selecMarkComment(true);
  };

  return (
    <Container>
      <OwnerInfoTopTab
        nickname={userInfo.nickname}
        profile={userInfo.profile}
        introduction={userInfo.introduction}
        is_owner={userInfo.is_owner}
        myPostingsCount={myPostings.length}
        myFavMarketsCount={myMarkComments.length}
        opening_time={userInfo.opening_time}
        closing_time={userInfo.closing_time}
      />
      <SelectMenu>
        <MyPost isMyPost={isMyPost} onPress={onPressMyPostBtn}>
          <MyPostTxt isMyPost={isMyPost}>나의 게시물</MyPostTxt>
        </MyPost>
        <FavMark isMarkComment={isMarkComment} onPress={onPressMarkCommentBtn}>
          <FavMarkTxt isMarkComment={isMarkComment}> 가게 후기</FavMarkTxt>
        </FavMark>
      </SelectMenu>
      <ShowMainInfo>
        {isMarkComment ? (
          <MyMarkCommentList myMarkComments={myMarkComments} />
        ) : (
          <OwnerPostingList myPostings={myPostings} />
        )}
      </ShowMainInfo>
    </Container>
  );
}

const Container = styled.View`
  background-color: white;
  flex: 1;
`;

const SelectMenu = styled.View`
  flex-direction: row;
  width: 100%;
  height: ${hp(5)}px;
  justify-content: center;
  align-items: center;
`;

const MyPost = styled.TouchableOpacity`
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-color: ${({ isMyPost }) => (isMyPost ? 'black' : COLORS.gray01)};
`;

const MyPostTxt = styled.Text`
  font-size: ${RFValue(15)}px;
  ${({ isMyPost }) =>
    isMyPost
      ? `
      font-weight: bold;
      `
      : `
      font-weight: normal;
      `}
`;

const FavMark = styled.TouchableOpacity`
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-color: ${({ isMarkComment }) => (isMarkComment ? 'black' : COLORS.gray01)};
`;

const FavMarkTxt = styled.Text`
  font-size: ${RFValue(15)}px;
  ${({ isMarkComment }) =>
    isMarkComment
      ? `
      font-weight: bold;
      `
      : `
      font-weight: normal;
      `}
`;

const ShowMainInfo = styled.View``;

export default OwnerProfileScreen;
