import axios from 'axios';

const NOMINATIM_API_BASE = 'https://nominatim.openstreetmap.org/search?addressdetails=1&';

export const API_BASE_URL = () => `${NOMINATIM_API_BASE}`;

export const NOMINATIM_API_ADDRESS_QUERY = (street, number, municipality) => {
  return `street=${number}%20${street}&city=${municipality}&limit=2&format=json`;
};

export const ax = axios.create({
  baseUrl: API_BASE_URL()
});