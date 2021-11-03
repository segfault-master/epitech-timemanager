import axios from 'axios'

let baseURL = 'http://localhost:4000/api'

export const API = axios.create(
    {
        baseURL: baseURL
    })