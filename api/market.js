import { client } from './client';

const fetchMarkets = () => client.get('/markets/');

export { fetchMarkets };
