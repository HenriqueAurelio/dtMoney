import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://dtmoney-gold.vercel.app/api',
})
