import axios from 'axios';

export const addUser = data => {
  return axios.post('http://localhost:3002/api/user', data);
};

export const getAllUsers = () => {
  return axios.get('http://localhost:3002/api/user');
};
