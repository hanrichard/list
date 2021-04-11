import axios from 'axios';

export const API_KEY = 'b4ef34a1'; // b4ef34a1 ae3e09af
export const axiosApi = axios.create({
  baseURL: 'http://www.omdbapi.com/',
});
