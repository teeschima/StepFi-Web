import axios from 'axios'
import { API_BASE_URL } from '../constants/config'

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

const TOKEN_STORAGE_KEY = 'stepfi-user'

function getStoredTokens(): { accessToken?: string; refreshToken?: string } {
  try {
    const raw = localStorage.getItem(TOKEN_STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    const state = parsed?.state
    if (!state) return {}
    return { accessToken: state.accessToken, refreshToken: state.refreshToken }
  } catch {
    return {}
  }
}

api.interceptors.request.use((config) => {
  const { accessToken } = getStoredTokens()
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem(TOKEN_STORAGE_KEY)
      window.location.href = '/'
    }
    return Promise.reject(error)
  }
)
