import { client } from './client';

//[프로필] 개인 정보 조회
const fetchUserInfo = () =>
  client.get('/user/info', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMTI3MDY4LCJpYXQiOjE2OTIyNjMwNjgsImp0aSI6IjI4M2FmMjBkMjQ5YzRiYzU4ZmE1ZjYxZTkzMjRhOTM2IiwidXNlcl9pZCI6M30.V0mXBej6lpJqs1KT4Gl47er23lt905sSPJVJDmHShW0',
    },
  });

//[프로필] 나의 게시물
const fetchMyPost = () =>
  client.get('/board/', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMTI3MDY4LCJpYXQiOjE2OTIyNjMwNjgsImp0aSI6IjI4M2FmMjBkMjQ5YzRiYzU4ZmE1ZjYxZTkzMjRhOTM2IiwidXNlcl9pZCI6M30.V0mXBej6lpJqs1KT4Gl47er23lt905sSPJVJDmHShW0',
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

//[프로필-사장] 가게 후기
const fetchMyMarkComment = () =>
  client.get('/board/review', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMTI3MDY4LCJpYXQiOjE2OTIyNjMwNjgsImp0aSI6IjI4M2FmMjBkMjQ5YzRiYzU4ZmE1ZjYxZTkzMjRhOTM2IiwidXNlcl9pZCI6M30.V0mXBej6lpJqs1KT4Gl47er23lt905sSPJVJDmHShW0',
    },
  });

export { fetchUserInfo, fetchMyPost, fetchMyfavShop, fetchMyMarkComment };
