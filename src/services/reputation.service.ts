import { api } from './api'

export const reputationService = {
  getScore: async (walletAddress: string) => {
    const res = await api.get(`/reputation/${walletAddress}`)
    return res.data
  },

  getProfile: async (walletAddress: string) => {
    const res = await api.get(`/reputation/${walletAddress}/profile`)
    return res.data
  },

  getHistory: async (walletAddress: string) => {
    const res = await api.get(`/reputation/${walletAddress}/history`)
    return res.data
  },

  getLearnerLoans: async (walletAddress: string) => {
    const res = await api.get(`/loans/borrower/${walletAddress}`)
    return res.data
  },

  getVouches: async (walletAddress: string) => {
    const res = await api.get(`/vouches/${walletAddress}`)
    return res.data
  },

  requestVouch: async (walletAddress: string) => {
    const res = await api.post('/vouches/request', { walletAddress })
    return res.data
  },
}
