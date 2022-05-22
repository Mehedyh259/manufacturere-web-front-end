import axios from "axios";


const fetchApi = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
})


export default fetchApi;