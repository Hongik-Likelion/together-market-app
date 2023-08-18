import { client } from './client';

// 로그인
const login = (email) => client.post('/user/login/', { email });

//[프로필] 개인 정보 조회
const fetchUserInfo = () =>
  client.get('/user/info', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMjEzNzU0LCJpYXQiOjE2OTIzNDk3NTQsImp0aSI6IjJhZjI0MjEzNGJlMTQwMmU5YTQ0ZDRhYzU5NTE3NGZiIiwidXNlcl9pZCI6MTZ9.1HlK5U6KEZEmzsSwDcAPQ5AS5HSevTDqyqAzPX0pzFQ',
    },
  });

//[프로필] 나의 게시물
const fetchMyPost = () =>
  client.get('/board/', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMjEzNzU0LCJpYXQiOjE2OTIzNDk3NTQsImp0aSI6IjJhZjI0MjEzNGJlMTQwMmU5YTQ0ZDRhYzU5NTE3NGZiIiwidXNlcl9pZCI6MTZ9.1HlK5U6KEZEmzsSwDcAPQ5AS5HSevTDqyqAzPX0pzFQ',
    },
  });

//[프로필-고객] 나의 관심 가게
const fetchMyfavShop = () =>
  client.get('/shop/', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMjEzNzU0LCJpYXQiOjE2OTIzNDk3NTQsImp0aSI6IjJhZjI0MjEzNGJlMTQwMmU5YTQ0ZDRhYzU5NTE3NGZiIiwidXNlcl9pZCI6MTZ9.1HlK5U6KEZEmzsSwDcAPQ5AS5HSevTDqyqAzPX0pzFQ',
    },
  });

//[프로필-고객] 자기소개 수정
const patchUserModify = (data) =>
  client.patch('/user/modify/', data, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMjEzNzU0LCJpYXQiOjE2OTIzNDk3NTQsImp0aSI6IjJhZjI0MjEzNGJlMTQwMmU5YTQ0ZDRhYzU5NTE3NGZiIiwidXNlcl9pZCI6MTZ9.1HlK5U6KEZEmzsSwDcAPQ5AS5HSevTDqyqAzPX0pzFQ',
    },
  });

//[프로필-사장] 가게 후기
const fetchMyMarkComment = () =>
  client.get('/board/review/', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMjAyMzgyLCJpYXQiOjE2OTIzMzgzODIsImp0aSI6ImM1ZjhhNzA5ZThiOTQ5ODVhYWVjNDgxZjBiZWZhMjMzIiwidXNlcl9pZCI6N30.7-dOu8mjqK5qr8gaiif6MEFwJR94Qra7C27LHc3BzwA',
    },
  });

//[프로필 환경설정-손님] 시장 조회
const getAllMarkets = () =>
  client.get('/markets', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMTI3MDY4LCJpYXQiOjE2OTIyNjMwNjgsImp0aSI6IjI4M2FmMjBkMjQ5YzRiYzU4ZmE1ZjYxZTkzMjRhOTM2IiwidXNlcl9pZCI6M30.V0mXBej6lpJqs1KT4Gl47er23lt905sSPJVJDmHShW0',
    },
  });

//게시물 단일 조회
const getSinglePost = (board_id) =>
  client.get(`/board/${board_id}`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMTI3MDY4LCJpYXQiOjE2OTIyNjMwNjgsImp0aSI6IjI4M2FmMjBkMjQ5YzRiYzU4ZmE1ZjYxZTkzMjRhOTM2IiwidXNlcl9pZCI6M30.V0mXBej6lpJqs1KT4Gl47er23lt905sSPJVJDmHShW0',
    },
  });

//게시물 수정
const getModifyPost = (board_id) =>
  client.put(`/board/${board_id}`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMTI3MDY4LCJpYXQiOjE2OTIyNjMwNjgsImp0aSI6IjI4M2FmMjBkMjQ5YzRiYzU4ZmE1ZjYxZTkzMjRhOTM2IiwidXNlcl9pZCI6M30.V0mXBej6lpJqs1KT4Gl47er23lt905sSPJVJDmHShW0',
    },
  });

export {
  fetchUserInfo,
  fetchMyPost,
  fetchMyfavShop,
  patchUserModify,
  fetchMyMarkComment,
  getAllMarkets,
  login,
  getSinglePost,
  getModifyPost,
};
