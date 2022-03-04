import axios from "axios";

const instance = axios.create({
    baseURL: "https://dinesh-book-api.herokuapp.com"
})

export default instance;