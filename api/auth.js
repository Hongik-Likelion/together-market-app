import { client } from './client';

//[프로필] 개인 정보 조회
const fetchUserInfo = () =>
  client.get('/user/info', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMTE4NTQ1LCJpYXQiOjE2OTIyNTQ1NDUsImp0aSI6Ijc3NDk2ZjEzOWMyMTQ3MzZiN2E4YWQxYzA0NjAxZGJlIiwidXNlcl9pZCI6M30.iJ1CJIuNaEkk4iThrhZzWpWm-LvsmAykVd8iiOCjs0Y',
    },
  });

//[프로필-고객] 나의 관심 가게
const fetchMyfavShop = () =>
  client.get('/shop', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMTE4NTQ1LCJpYXQiOjE2OTIyNTQ1NDUsImp0aSI6Ijc3NDk2ZjEzOWMyMTQ3MzZiN2E4YWQxYzA0NjAxZGJlIiwidXNlcl9pZCI6M30.iJ1CJIuNaEkk4iThrhZzWpWm-LvsmAykVd8iiOCjs0Y',
    },
  });

//[프로필] 나의 게시물
const fetchMyPost = () =>
  client.get('/board', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMTE4NTQ1LCJpYXQiOjE2OTIyNTQ1NDUsImp0aSI6Ijc3NDk2ZjEzOWMyMTQ3MzZiN2E4YWQxYzA0NjAxZGJlIiwidXNlcl9pZCI6M30.iJ1CJIuNaEkk4iThrhZzWpWm-LvsmAykVd8iiOCjs0Y',
    },
  });

//[프로필-사장] 가게 후기
const fetchMyMarkComment = () =>
  client.get('/board/review', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMTE2NDcyLCJpYXQiOjE2OTIyNTI0NzIsImp0aSI6IjhmZDUwN2M4Y2JkYTQ5OTk5NDRhNTI1YjUxMzc0NWNjIiwidXNlcl9pZCI6NH0.tCwa2bUYFRVQy_hbxUmDId2eUhv6Q-P-pOMQ0gbt2zI',
    },
  });

export { fetchUserInfo, fetchMyfavShop, fetchMyPost, fetchMyMarkComment };
