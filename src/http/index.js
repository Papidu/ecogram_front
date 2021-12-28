import axios from 'axios';

export const API_URL = 'http://vm-fd0ab233.na4u.ru:8080';

const $api = axios.create({
    withCredentials:true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

export default $api;