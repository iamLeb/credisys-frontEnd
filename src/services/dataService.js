// src/services/dataService.js
import http from '../http-common';

const getAllData = () => {
  return http.get('/data');
};

export default {
  getAllData,
};
