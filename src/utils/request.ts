import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

// 进度条
import nProgress from 'nprogress'

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE,
  timeout: 5000,
})

// 请求拦截
request.interceptors.request.use(
  (config: AxiosRequestConfig<any>) => {
    // 开启进度条
    nProgress.start()
    const token = sessionStorage.getItem('TOKEN')
    if (token) {
      console.log(token)
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      config.headers!.Authorization = `Bearer ${token}`
    }
    return config
  },
  err => {
    // 关闭进度条
    nProgress.done()
    Promise.reject(err)
  }
)
// 请求拦截
request.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code, msg } = response.data
    switch (code) {
      case 0:
        return response.data
      default:
        console.log(msg)
        return response.data
    }
    // 关闭进度条
    nProgress.done()
  },
  err => {
    // 关闭进度条
    nProgress.done()
    Promise.reject(err)
  }
)

export default request
