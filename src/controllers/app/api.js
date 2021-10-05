import axios from 'axios';

const NOMINATIM_API_BASE = 'https://nominatim.openstreetmap.org/search?addressdetails=1&';

export const API_BASE_URL = () => `${NOMINATIM_API_BASE}`;

export const ax = axios.create({
  baseUrl: API_BASE_URL()
});