import { client } from "./client";



// [홈 가게정보 모달창] 상점 조회
const fetchShop = (shop_id) =>
    client.get(`shop/${shop_id}`,
{
    headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzMTI3MDY4LCJpYXQiOjE2OTIyNjMwNjgsImp0aSI6IjI4M2FmMjBkMjQ5YzRiYzU4ZmE1ZjYxZTkzMjRhOTM2IiwidXNlcl9pZCI6M30.V0mXBej6lpJqs1KT4Gl47er23lt905sSPJVJDmHShW0',
      },
});
export {fetchShop};