import axios from 'axios';

const apiBase = '/dashboard-api/';

export const login = (body) => {
  return axios.post(`${apiBase}login`, body);
};

export const students = () => {
  return axios.get(`${apiBase}users/students`);
};
