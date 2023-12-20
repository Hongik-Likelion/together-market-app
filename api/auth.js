import { client } from './client';

// 로그인
const login = (email) => client.post('/user/login/', { email });

//[프로필] 개인 정보 조회
const fetchUserInfo = () =>
  client.get('/user/info', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzYUBuYXYuY29tIiwiaWQiOjIsImV4cCI6MTcwMzY2NjkwM30.KdaqhSEKJHTb8my3IxMxzOMIi5Qsfcq4aq81n5ozTl8',
    },
  });

//[프로필] 나의 게시물
const fetchMyPost = () =>
  client.get('/board/', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJpQGkuY29tIiwiaWQiOjEyLCJleHAiOjE3MDM1OTg2MjZ9.CDrTNNm306L-TO6PfcHQmSbFPvdZ45kdjQd1xpD-9VM',
    },
  });

//[프로필-고객] 나의 관심 가게
const fetchMyfavShop = () =>
  client.get('/shop/', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMTI3MDY4LCJpYXQiOjE2OTIyNjMwNjgsImp0aSI6IjI4M2FmMjBkMjQ5YzRiYzU4ZmE1ZjYxZTkzMjRhOTM2IiwidXNlcl9pZCI6M30.V0mXBej6lpJqs1KT4Gl47er23lt905sSPJVJDmHShW0',
    },
  });

//[프로필-고객] 자기소개 수정
const patchUserModify = (data) =>
  client.patch('/user/modify/', data, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMTI3MDY4LCJpYXQiOjE2OTIyNjMwNjgsImp0aSI6IjI4M2FmMjBkMjQ5YzRiYzU4ZmE1ZjYxZTkzMjRhOTM2IiwidXNlcl9pZCI6M30.V0mXBej6lpJqs1KT4Gl47er23lt905sSPJVJDmHShW0',
    },
  });

//[프로필-사장] 가게 후기
const fetchMyMarkComment = () =>
  client.get('/board/review/', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMTI3MDY4LCJpYXQiOjE2OTIyNjMwNjgsImp0aSI6IjI4M2FmMjBkMjQ5YzRiYzU4ZmE1ZjYxZTkzMjRhOTM2IiwidXNlcl9pZCI6M30.V0mXBej6lpJqs1KT4Gl47er23lt905sSPJVJDmHShW0',
    },
  });

//시장 조회
const getAllMarkets = () => client.get('/markets');

export { fetchUserInfo, fetchMyPost, fetchMyfavShop, patchUserModify, fetchMyMarkComment, getAllMarkets, login };
