import axios from 'axios';

export const viewClasses = () => {
	return axios.get('http://localhost:3002/api/class');
};

export const addClass = (data) => {
	return axios.post('http://localhost:3002/api/class', data);
};

export const addPost = (data) => {
	return axios.post('http://localhost:3002/api/post', data);
};