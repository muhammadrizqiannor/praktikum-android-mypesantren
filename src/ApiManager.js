import axios from 'axios';

const API_URL = 'https://api-pesantren-indonesia.vercel.app/pesantren/3206.json';

export const fetchPesantrenData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching pesantren data:', error);
    return null;
  }
};
