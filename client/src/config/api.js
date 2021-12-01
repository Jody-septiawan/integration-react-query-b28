// Create and export API config here ...
export const API = () => {
  const baseURL = 'http://localhost:5000/api/v1/';

  const executeAPI = async (endPoint, config) => {
    const response = await fetch(baseURL + endPoint, config);
    const data = await response.json();
    return data;
  };

  return {
    get: executeAPI,
    post: executeAPI,
    patch: executeAPI,
    delete: executeAPI,
  };
};
