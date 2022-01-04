import axios from "axios"
import Cookies from "js-cookie"

const axiosInstance = axios.create({
    baseURL: 'http://vm-fd0ab233.na4u.ru:8080',
})

axiosInstance.interceptors.request.use(
    (config) => {
        const authToken = Cookies.get("auth-token");

        if(authToken){
            config.headers.Authorization = `Bearer ${authToken}`;
        }
        
        return config
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;