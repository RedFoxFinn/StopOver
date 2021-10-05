import axios from 'axios';

const NOMINATIV_API_BASE = 'https://nominatim.openstreetmap.org/search?addressdetails=1&';

export const API_BASE_URL = () => `${NOMINATIV_API_BASE}`;

export const ax = axios.create({
  baseUrl: API_BASE_URL()
});