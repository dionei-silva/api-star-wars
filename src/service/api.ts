import axios from 'axios';
import { apiResponse } from '../store/modules/PersonSlice';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_STARWARS_URL,
});

async function doGet(url: string) {
  const response = await api.get<apiResponse>(url);
  return response.data;
}

export { doGet };
