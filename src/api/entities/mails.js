import axios from 'axios';

export const getMail = userId => {
  return axios.get(`http://localhost:3002/api/message`, userId);
}