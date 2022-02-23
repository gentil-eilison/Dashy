import axios from 'axios'

const api = axios.create({
    baseURL: "https://621584abc9c6ebd3ce2a353c.mockapi.io/api/ps"
})

export default api