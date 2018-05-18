import axios from 'axios';

export const viewAllStudents = _id => {
	return axios.get(`http://localhost:3002/api/class/${_id}`);
};

export const addClass = classInfo => {
	return axios.post('http://localhost:3002/api/class', classInfo);
};

export const editStudent = studentInfo => {
  console.log(studentInfo)
  return axios.put(`http://localhost:3002/api/user/${studentInfo._id}`, studentInfo);
};

