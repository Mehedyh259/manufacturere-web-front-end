import axios from "axios";


const fetchApi = axios.create({
    // baseURL: 'http://localhost:5000',
    baseURL: 'https://manufacture-web-1542.herokuapp.com/',
    headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
});




export default fetchApi;