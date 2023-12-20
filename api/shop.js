import { client } from './client';

// 상점 리스트 조회 (시장에 존재하는)
const getShopList = (marketId) =>
  client.get('/shop', {
    params: { market_id: marketId },
  });

export { getShopList };
