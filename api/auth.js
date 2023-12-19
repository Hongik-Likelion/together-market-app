import { client } from './client';

// 로그인
const login = (email) => client.post('/user/login/', { email });

// 회원가입
const signUp = (data) => client.post('/user/', data);

//먹거리 조회
const fetchEatingCatergory = () => client.get('/products/', {});

//상점 등록 - 사장 회원가입
const postOwnerShop = (data, token) =>
  client.post('/shop/', data, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

// 자주 방문 시장 등록- 손님 회원가입
const postfavMarket = (data, token) =>
  client.post('/markets/favourite/', data, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

//[프로필] 개인 정보 조회
const fetchUserInfo = () =>
  client.get('/user/info', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhQGEuY29tIiwiaWQiOjQsImV4cCI6MTcwMzU5ODU2MX0.4SbyqXdyMp9ZvKv4A4Qq0luq1YufLKLRWTz_CynGsxQ',
    },
  });

//[프로필] 나의 게시물
const fetchMyPost = () =>
  client.get('/board', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhQGEuY29tIiwiaWQiOjQsImV4cCI6MTcwMzU5ODU2MX0.4SbyqXdyMp9ZvKv4A4Qq0luq1YufLKLRWTz_CynGsxQ',
    },
  });

//[프로필-고객] 나의 관심 가게
const fetchMyfavShop = () =>
  client.get('/shop', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJpQGkuY29tIiwiaWQiOjEyLCJleHAiOjE3MDM1OTg2MjZ9.CDrTNNm306L-TO6PfcHQmSbFPvdZ45kdjQd1xpD-9VM',
    },
  });

//[프로필] 자기소개 수정
const patchUserModify = (data) =>
  client.patch('/user/modify', data, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhQGEuY29tIiwiaWQiOjQsImV4cCI6MTcwMzU5ODU2MX0.4SbyqXdyMp9ZvKv4A4Qq0luq1YufLKLRWTz_CynGsxQ',
    },
  });

//[프로필-사장] 가게 후기
const fetchMyMarkComment = () =>
  client.get('/board/review', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhQGEuY29tIiwiaWQiOjQsImV4cCI6MTcwMzU5ODU2MX0.4SbyqXdyMp9ZvKv4A4Qq0luq1YufLKLRWTz_CynGsxQ',
    },
  });

//[프로필 환경설정-손님] 시장 조회
const getAllMarkets = () =>
  client.get('/markets', {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJpQGkuY29tIiwiaWQiOjEyLCJleHAiOjE3MDM1OTg2MjZ9.CDrTNNm306L-TO6PfcHQmSbFPvdZ45kdjQd1xpD-9VM',
    },
  });

export {
  fetchEatingCatergory,
  fetchUserInfo,
  fetchMyPost,
  fetchMyfavShop,
  patchUserModify,
  fetchMyMarkComment,
  getAllMarkets,
  login,
  signUp,
  postOwnerShop,
  postfavMarket,
};
