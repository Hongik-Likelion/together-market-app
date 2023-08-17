import { client } from './client';

//[프로필] 개인 정보 조회
const fetchUserInfo = () => client.get('/user/info');

//[프로필] 나의 게시물
const fetchMyPost = () => client.get('/board');

//[프로필-사장] 가게 후기
const fetchMyMarkComment = () => client.get('/board/review');

export { fetchUserInfo, fetchMyPost, fetchMyMarkComment };
