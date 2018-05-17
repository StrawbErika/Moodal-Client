import axios from 'axios';

export const addUser = (data) => {
  return axios.post('http://localhost:3002/api/user', data);
}