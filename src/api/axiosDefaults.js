import axios from "axios";

// URL for the deployed back end API project on Heroku
axios.defaults.baseURL = 'https://soundcheck-drf-api-15efb796f01f.herokuapp.com/'
// expected data format by API
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
// avoid any CORS errors when sending cookies
axios.defaults.withCredentials = true

// Refreshing access tokens
export const axiosReq = axios.create();
export const axiosRes = axios.create();