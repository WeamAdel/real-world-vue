import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://my-json-server.typicode.com/WeamAdel/real-world-vue',
});

export default axiosInstance;
