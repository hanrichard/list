import axios from 'axios';

export const API_KEY = 'ae3e09af';
export const axiosApi = axios.create({
  baseURL: 'http://www.omdbapi.com/',
});
