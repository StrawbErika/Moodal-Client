import axios from 'axios';

export const viewPosts = (data) => {
  return axios.get(`http://localhost:3002/api/post/${data}`);
}

export const addPost = (data) => {
  return axios.post('http://localhost:3002/api/post', data);
}

export const editPost = (data) => {
  return axios.put('http://localhost:3002/api/post', data);
}

export const deletePost = (data) => {
  return axios.post(`http://localhost:3002/api/post/${data}`);
}