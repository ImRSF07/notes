import axios from 'axios';

import { server_url } from '../config';

const handleRequest = async (method, path, data) => {
  try {
    const response = await axios.request({
      method: method,
      baseURL: `${server_url}${path}`,
      data: data,
      responseType: 'json',
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const handleGetRequest = (path, data) => {
  const urlParams = new URLSearchParams(data).toString();
  const newPath = `${path}?${urlParams}`;
  return handleRequest('GET', newPath, {});
};

export const handlePostRequest = (path, data) =>
  handleRequest('POST', path, data);

export const handlePutRequest = (path, data) =>
  handleRequest('PUT', path, data);
