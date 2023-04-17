import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_STARWARS_URL,
});

async function doGet(url: string) {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    return { sucess: false, data: { msg: 'Erro doGet API Star Wars' } };
  }
}

export { doGet };
