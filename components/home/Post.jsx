import React, { useState } from 'react';
import { styled } from 'styled-components/native';
import PostItem from './PostItem';
import { FlatList } from 'react-native';
import axios from 'axios';

function Post() {
  // const [postItems, setPostItems] = useState([]);

  //   useEffect(() => {
  //     axios.get('/markets')
  //     .then(res => {
  //       const markets= res.data;

  //       const boardData = markets.map(market => {
  //         const marketId = market.market_id;

  //         return axios.get(`/board?market_id=${marketId}`)
  //         .then(boardRes => boardRes.data);
  //       });

  //       Promise.all(boardDataPromises)
  //       .then(boardDataArray => {
  //         const combinedData = markets.map((market, index) => {
  //           return {
  //             ...market,
  //             boardData: boardDataArray[index],
  //           };
  //         });
  //       setPostItems(combinedData);
  //     })
  //     .catch(err => console.log('board data err', err));
  //   })
  //   .catch(err => console.log('market data err', err));
  // }, []);

  const postItems = [
    {
      id: 1,
      profile: require('@assets/PostItem/owner_profile.png'),
      user: '사장님',
      name: '바삭마차',
      rating: '4.3',
      date: '2023.08.18',
      content:
        '오늘도 맛있게 조리중입니다. 갓 튀긴 바삭바삭 돈까스와 바삭마차의 특별 소스로 대접하겠습니다. 단체 주문은 채팅 문의 부탁드립니다. ^^',
      image: require('@assets/PostItem/owner_image.png'),
      like: '10',
      comment: '0',
      open: '영업중',
      address: '서울 마포구 월드컵로13길 64 바삭마차',
      time: '매주 11:00~18:00',
      goods: '돈까스, 치즈까스, 마시멜로 아이스크림 등',
    },
    {
      id: 2,
      profile: require('@assets/PostItem/customer_profile.png'),
      user: '시장탐방러',
      name: '이것도사자',
      rating: '4.3',
      date: '2023.08.18',
      content: '[바삭마차 리뷰] 와 여기 진짜 넘 신선해요 튀김이... 오마카세<<<바삭마차 압승입니다.',
      image: require('@assets/PostItem/customer_image.png'),
      like: '3',
      comment: '0',
      open: '영업중',
      address: '서울 마포구 월드컵로13길 64 바삭마차',
      time: '매주 11:00~18:00',
      goods: '돈까스, 치즈까스, 마시멜로 아이스크림 등',
    },
  ];

  return (
    <Container>
      <FlatList
        data={postItems}
        renderItem={({ item }) => {
          const { profile, user, name, rating, date, content, image, like, comment, open, address, time, goods } = item;
          return (
            <PostItem
              profile={profile}
              user={user}
              name={name}
              rating={rating}
              date={date}
              content={content}
              image={image}
              like={like}
              comment={comment}
              open={open}
              address={address}
              time={time}
              goods={goods}
            />
          );
        }}
      />
    </Container>
  );
}

const Container = styled.View`
  height: 94%;
`;
export default Post;
