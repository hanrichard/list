import '@testing-library/jest-dom';
import { enableFetchMocks } from 'jest-fetch-mock';
import mockAxios from 'jest-mock-axios';

enableFetchMocks();

export default mockAxios;
