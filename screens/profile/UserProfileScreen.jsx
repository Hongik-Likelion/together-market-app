import React, { useState } from 'react';
import InfoTopTab from '@components/profile/mainProfile/InfoTopTab';
import MyPostingList from '@components/profile/mainProfile/user/MyPostingList';
import FavMarkList from '@components/profile/mainProfile/user/FavMarkList';
import { RFValue } from 'react-native-responsive-fontsize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';
import { COLORS } from 'colors';

function UserProfileScreen() {
  //개인정보 조회 API 응답 데이터 예시
  const userInfo = {
    id: 1,
    email: 'anfhgkfdfd@gmail.com',
    nickname: '나는야먹보',
    profile: require('@assets/profile/Ellipse.png'),
    introduction: '망원시장 정복중인 돼지런한 직장인입니다.',
    is_owner: false,
    favourite_markets: [
      {
        market_id: 10,
        market_name: '바삭마차',
      },
      {
        market_id: 11,
        market_name: '싱싱과일',
      },
    ],
  };

  // 나의 게시물 API 응답 데이터 예시
  const myPostings = [
    {
      shop_info: {
        shop_name: '바삭마차',
      },
      board_info: {
        board_id: 1,
        rating: 4,
        photo: require('@assets/profile/myProfileMarket.png'),
        content: '[바삭마차 리뷰] 와 튀김이 진짜 대박 완전 갓 튀겨가지고 맛있네용 사장님도 친절하시고',
        created_at: '2023.08.18',
      },
    },
    {
      shop_info: {
        shop_name: '바삭바삭..',
      },
      board_info: {
        board_id: 2,
        rating: 5,
        photo: require('@assets/profile/myProfileMarket.png'),
        content: '[바삭바삭.. 리뷰] 와 튀김이 진짜 대박 완전 갓 튀겨가지고 맛있네용 ',
        created_at: '2023.11.12',
      },
    },
  ];

  // 나의 관심 가게 API 응답 데이터 예시
  const myFavMarkets = [
    {
      market_name: '망원시장',
      shop_name: '바삭마차',
      shop_address: '서울 마포구 월드컵로13길 64 바삭마차',
      opening_time: '11:00',
      closing_time: '18:00',
      opening_frequency: '월-일',
      average_rating: 4.3,
      is_liked: true,
      photo: require('@assets/profile/Img1.png'),
    },
    {
      market_name: '광장시장',
      shop_name: '싱싱과일',
      shop_address: '서울 종로구 창경궁로 12길 싱싱과일',
      opening_time: '11:00',
      closing_time: '18:00',
      opening_frequency: '화목금',
      average_rating: 4.1,
      is_liked: true,
      photo: require('@assets/profile/Img2.png'),
    },
  ];

  const [isMyPost, selectMyPost] = useState(true);
  const [isFavMark, selectFavMark] = useState(false);

  const onPressMyPostBtn = () => {
    selectMyPost(true);
    selectFavMark(false);
  };
  const onPressFavMarkBtn = () => {
    selectMyPost(false);
    selectFavMark(true);
  };

  return (
    <Container>
      <InfoTopTab
        nickname={userInfo.nickname}
        profile={userInfo.profile}
        introduction={userInfo.introduction}
        is_owner={userInfo.is_owner}
        myPostingsCount={myPostings.length}
        myFavMarketsCount={myFavMarkets.length}
      />
      <SelectMenu>
        <MyPost isMyPost={isMyPost} onPress={onPressMyPostBtn}>
          <MyPostTxt isMyPost={isMyPost}>나의 게시물</MyPostTxt>
        </MyPost>
        <FavMark isFavMark={isFavMark} onPress={onPressFavMarkBtn}>
          <FavMarkTxt isFavMark={isFavMark}> 관심 가게</FavMarkTxt>
        </FavMark>
      </SelectMenu>
      <ShowMainInfo>
        {isFavMark ? <FavMarkList myFavMarkets={myFavMarkets} /> : <MyPostingList myPostings={myPostings} />}
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
  border-bottom-color: ${({ isFavMark }) => (isFavMark ? 'black' : COLORS.gray01)};
`;

const FavMarkTxt = styled.Text`
  font-size: ${RFValue(15)}px;
  ${({ isFavMark }) =>
    isFavMark
      ? `
      font-weight: bold;
      `
      : `
      font-weight: normal;
      `}
`;

const ShowMainInfo = styled.View``;

export default UserProfileScreen;
