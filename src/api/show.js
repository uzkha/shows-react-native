import axios from "axios";

const axiosInstance = (token) => axios.create({
    baseURL:"http://a4a139cc67c5.ngrok.io",
    headers:{
        Authorization: `Bearer ${token}`
    }
});

export default axiosInstance;