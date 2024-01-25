import axios from "axios";

const serverAxios = axios.create({
    baseURL: process.env.SERVER_BACKEND
})

export default serverAxios