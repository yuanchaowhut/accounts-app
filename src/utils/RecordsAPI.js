import axios from 'axios'

const api = process.env.REACT_APP_RECORDS_API_URL || "http://5dcd5c99d795470014e4d032.mockapi.io"

export const getAll = () => {
    return axios.get(`${api}/api/v1/records`)
}

export const create = (body) => {
    return axios.post(`${api}/api/v1/records`, body)
}

export const update = (id, body) => {
    return axios.put(`${api}/api/v1/records/${id}`, body)
}

export const remove = (id) => {
    return axios.delete(`${api}/api/v1/records/${id}`)
}
