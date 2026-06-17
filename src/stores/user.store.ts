import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserStore {
  accessToken: string
  refreshToken: string
  isAuthenticated: boolean
  setTokens: (access: string, refresh: string) => void
  clearTokens: () => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      accessToken: '',
      refreshToken: '',
      isAuthenticated: false,
      setTokens: (accessToken, refreshToken) => {
        set({ accessToken, refreshToken, isAuthenticated: true })
      },
      clearTokens: () => {
        set({
          accessToken: '',
          refreshToken: '',
          isAuthenticated: false,
        })
      },
    }),
    { name: 'stepfi-user' }
  )
)
