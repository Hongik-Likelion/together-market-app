import { client } from './client';

// 게시글 리스트 조회(시장에 따른)
const fetchBoardList = (marketId) =>
  client.get('/board', {
    params: { market_id: marketId },
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhQGEuY29tIiwiaWQiOjQsImV4cCI6MTcwMzU5ODU2MX0.4SbyqXdyMp9ZvKv4A4Qq0luq1YufLKLRWTz_CynGsxQ',
    },
  });

// 게시글 좋아요
const doLike = (board_id) =>
  client.patch(`/board/${board_id}/like`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhQGEuY29tIiwiaWQiOjQsImV4cCI6MTcwMzU5ODU2MX0.4SbyqXdyMp9ZvKv4A4Qq0luq1YufLKLRWTz_CynGsxQ',
    },
  });

// 게시글 좋아요 삭제
const doUnlike = (board_id) =>
  client.patch(`/board/${board_id}/unlike`, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhQGEuY29tIiwiaWQiOjQsImV4cCI6MTcwMzU5ODU2MX0.4SbyqXdyMp9ZvKv4A4Qq0luq1YufLKLRWTz_CynGsxQ',
    },
  });

// 게시글 신고
const doReport = (board_id) =>
  client.patch(`/board/${board_id}/report`, {
    headers: {
        Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhQGEuY29tIiwiaWQiOjQsImV4cCI6MTcwMzU5ODU2MX0.4SbyqXdyMp9ZvKv4A4Qq0luq1YufLKLRWTz_CynGsxQ',
    },
  });

export { fetchBoardList, doLike, doUnlike, doReport };
