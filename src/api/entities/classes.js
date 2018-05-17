import axios from 'axios';

export const viewClasses = () => {
	return axios.get('http://localhost:3002/api/class');
};

export const addClass = classInfo => {
	return axios.post('http://localhost:3002/api/class', classInfo);
};
 
export const deleteClass = classId => {
  return axios.delete(`http://localhost:3002/api/class/${classId}`);
}