import axios from 'axios';

export const BASE_URL = 'https://youtube-v38.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url, params) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, {...options, params: {...options.params, ...params}});

  return data;
};
