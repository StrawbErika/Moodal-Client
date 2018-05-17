import axios from 'axios';

export const viewAllStudents = _id => {
	return axios.get('http://localhost:3002/api/students', _id);
};

export const addClass = classInfo => {
	return axios.post('http://localhost:3002/api/class', classInfo);
};

