const axios = require('axios');

const createApiClient = (token) => {
  const client = axios.create({
    baseURL: process.env.GATEWAY_URL,
    timeout: 5000,
  });

  client.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, (error) => Promise.reject(error));

  return client;
};

module.exports = createApiClient;
