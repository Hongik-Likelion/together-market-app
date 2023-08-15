import React from 'react';
import InfoTopTab from '@components/profile/mainProfile/InfoTopTab';
import { styled } from 'styled-components/native';

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
  const myPosting = [
    {
      shop_info: {
        shop_name: '바삭마차',
      },
      board_info: {
        board_id: 1,
        rating: 5,
        photo: require('@assets/profile/myProfileMarket.png'),
        content: '[바삭마차 리뷰] 와 튀김이 진짜 대박 완전 갓 튀겨가지고 맛있네용 사장님도 친절하시고 짱입니당',
        created_at: '2023-08-18',
      },
    },
  ];

  // 나의 관심 가게 API 응답 데이터 예시
  const myFavMarket = [
    {
      market_name: '망원시장',
      shop_name: '바삭마차',
      shop_address: '서울 마포구 월드컵로13길 64 바삭마차',
      opening_time: '11:00',
      closing_time: '18:00',
      opening_frequency: '월요일 - 일요일',
      average_rating: 4.3,
      is_liked: true,
    },
    {
      market_name: '광장시장',
      shop_name: '싱싱과일',
      shop_address: '서울 종로구 창경궁로 12길 싱싱과일',
      opening_time: '11:00',
      closing_time: '18:00',
      opening_frequency: '월요일 - 일요일',
      average_rating: 4.1,
      is_liked: true,
    },
  ];

  return (
    <Container>
      <TopInfo>
        <InfoTopTab
          nickname={userInfo.nickname}
          profile={userInfo.profile}
          introduction={userInfo.introduction}
          is_owner={userInfo.is_owner}
          myPostingCount={myPosting.length}
          myFavMarketCount={myFavMarket.length}
        />
      </TopInfo>
    </Container>
  );
}

const Container = styled.View`
  background-color: white;
  flex: 1;
`;

const TopInfo = styled.View``;

export default UserProfileScreen;
