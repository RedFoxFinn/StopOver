import axios from 'axios';

const POSITIONSTACK_API_BASE = 'http://api.positionstack.com/v1/forward?';
const POSITIONSTACK_API_KEY = () => {
  return `access_key=${process.env.REACT_APP_POSITIONSTACK_API_KEY}&`;
};

export const API_BASE_URL = () => `${POSITIONSTACK_API_BASE}${POSITIONSTACK_API_KEY()}`;

export const ax = axios.create({
  baseUrl: API_BASE_URL()
});