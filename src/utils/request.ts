import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

interface IResponseType<P = {}> {
  code: number;
  msg: string;
  data: P;
}

interface IHttpParams {
  url: string,
  method: string,
  data?: object,
  params?: object
}

interface Http {
  request<T>(params: IHttpParams): Promise<IResponseType<T>>
}

const isDev = true

const service = axios.create({
   baseURL: isDev ? '/api': 'http://localhost:9607/posts',
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