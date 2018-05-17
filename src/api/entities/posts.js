import axios from 'axios';

export const viewPosts = (data) => {
  return axios.get('http://localhost:3002/api/class', data);
}

export const deletePost = (data) => {
  return axios.post(`http://localhost:3002/api/post/${data}`);
}