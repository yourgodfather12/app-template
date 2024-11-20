import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const authApi = {
  login: async (credentials: { email: string; password: string }) => {
    const response = await api.post('/auth/login/', credentials)
    return response.data
  },
  logout: async () => {
    const response = await api.post('/auth/logout/')
    return response.data
  },
}

export const userApi = {
  getProfile: async () => {
    const response = await api.get('/users/me/')
    return response.data
  },
}