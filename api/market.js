import { client } from "./client";

// 상점 조회 (홈 가게정보 모달창)
const fetchShop = (shop_id) =>
    client.get(`shop/${shop_id}`,
{
    headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzYUBuYXYuY29tIiwiaWQiOjIsImV4cCI6MTcwMzY2NjkwM30.KdaqhSEKJHTb8my3IxMxzOMIi5Qsfcq4aq81n5ozTl8',
      },
});

// 상점 즐겨찾기 (하트)
const doFav = (shop_id) =>
    client.patch(`/shop/${shop_id}/favourite`, null, {
        headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzYUBuYXYuY29tIiwiaWQiOjIsImV4cCI6MTcwMzY2NjkwM30.KdaqhSEKJHTb8my3IxMxzOMIi5Qsfcq4aq81n5ozTl8',
          },
    });

// 상점 즐겨찾기 해제 (하트)
const doUnFav = (shop_id) =>
    client.patch(`/shop/${shop_id}/favourite`, null, {
        headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzYUBuYXYuY29tIiwiaWQiOjIsImV4cCI6MTcwMzY2NjkwM30.KdaqhSEKJHTb8my3IxMxzOMIi5Qsfcq4aq81n5ozTl8',
          },
    });

export {fetchShop, doFav, doUnFav};