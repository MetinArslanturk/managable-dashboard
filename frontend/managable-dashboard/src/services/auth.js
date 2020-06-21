import axios from 'axios';

const apiBase = '/dashboard-api/';

export const login = (body) => {
  return axios.post(`${apiBase}login`, body);
};

export const shareSettings = (body) => {
  return axios.post(`${apiBase}share`, body);
};

export const students = () => {
  return axios.get(`${apiBase}users/students`);
};

export const checkLogin = () => {
  return axios.get(`${apiBase}checkLogin`);
};

export const logout = () => {
  return axios.get(`${apiBase}logout`);
};
