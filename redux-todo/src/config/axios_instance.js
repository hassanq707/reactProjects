import axios from "axios";

const axios_instance = axios.create({
    baseURL : 'https://fakestoreapi.com'
})

export default axios_instance

