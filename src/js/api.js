import { API_HOST } from './settings';


const FetchToJSON = async (url, options) => {
  let response;
  let responseJson;
  try {
    response = await fetch(url, options);
    responseJson = await response.json();

    return responseJson;
  } catch (error) {
    throw error;
  }
};

export const RequestAuth = (username, password) => {
  const commonHeader = {
    method: 'GET',
    headers: { Authorization: `Basic ${btoa(`${username}:${password}`)}` },
  };

  return FetchToJSON(`${API_HOST}settings`, commonHeader);
};
