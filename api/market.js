import { client } from "./client";

// 상점 조회 (홈 가게정보 모달창)
const fetchShop = (shop_id) =>
    client.get(`shop/${shop_id}`,
{
    headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhQGEuY29tIiwiaWQiOjQsImV4cCI6MTcwMzU5ODU2MX0.4SbyqXdyMp9ZvKv4A4Qq0luq1YufLKLRWTz_CynGsxQ',
      },
});

// 상점 즐겨찾기 (하트)
const doFav = (shop_id) =>
    client.patch(`/shop/${shop_id}/favorite`, {
        headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhQGEuY29tIiwiaWQiOjQsImV4cCI6MTcwMzU5ODU2MX0.4SbyqXdyMp9ZvKv4A4Qq0luq1YufLKLRWTz_CynGsxQ',
          },
    });

export {fetchShop, doFav};