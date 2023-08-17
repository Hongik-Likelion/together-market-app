import { client } from './client';

// ex
const fetchUserInfo = client.get('/user/info');

const login = (email) => client.post('/user/login/', { email });

export { fetchUserInfo, login };
