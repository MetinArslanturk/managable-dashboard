import axios from 'axios';

const apiBase = '/dashboard-api/';

export const getLayoutOfUser = (userId) => {
  return axios.get(`${apiBase}layouts/user/${userId}`);
};

export const updateLayout = (body) => {
  return axios.patch(`${apiBase}layouts`, body);
};
