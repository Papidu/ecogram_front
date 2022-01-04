import axios from "axios";

const endpoints = {
    login: (data) => axios.post("http://vm-fd0ab233.na4u.ru:8080/auth/token", data,{
        'Content-Type': 'text/plain'
    }),
    getRoles: () => axios.get("/roles"),
    getUsers: () => axios.get("/users"),
    updateUser:(data) => axios.patch("/users/update", data) 
}

export default endpoints