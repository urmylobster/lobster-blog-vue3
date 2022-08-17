import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const service = axios.create({
   baseURL: 'http://localhost:9607/posts',
   timeout: 6000
})

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  async (response: AxiosResponse) => {
    return response
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

export default service