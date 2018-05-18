import axios from 'axios';
import qs from 'qs';

export const viewClasses = () => {
	return axios.get('http://localhost:3002/api/class');
};

export const viewClassById = classId => {
  return axios.get(`http://localhost:3002/api/class/${classId}`);
}

export const addClass = classInfo => {
	return axios.post('http://localhost:3002/api/class', classInfo);
};
 
export const deleteClass = classId => {
  return axios.delete(`http://localhost:3002/api/class/${classId}`);
}

export const editClass = classId =>{
  return axios.put(`http://localhost:3002/api/class/${classId.classId}`, classId);
}

export const getAllComment = query => {
  return axios.get(`http://localhost:3002/api/comment?${qs.stringify(query)}`);
}

export const addComment = data => {
  return axios.post('http://localhost:3002/api/comment', data)
}

export const deleteComment = postId => {
  return axios.delete(`http://localhost:3002/api/comment/${postId}`)
}

export const editComment = data => {
  return axios.put(`http://localhost:3002/api/comment`, data);
}
