import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://14.36.131.49:19002',
  withCredentials: true,
});
