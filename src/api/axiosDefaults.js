import axios from "axios";

axios.defaults.baseURL = 'https://soundcheck-drf-api-15efb796f01f.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

export const axiosReq = axios.create();
export const axiosRes = axios.create();