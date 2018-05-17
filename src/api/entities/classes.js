import axios from 'axios';

export const viewClasses = () => {
	return axios.get('http://localhost:3002/api/class');
};
