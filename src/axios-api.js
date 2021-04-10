import axios from 'axios';

export const API_KEY = 'b4ef34a1';
export const AXIOS_API = axios.create({
  baseURL: 'http://www.omdbapi.com/',
});
