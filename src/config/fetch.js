import axios from 'axios'

let fetcher = axios.create({
  timeout: 15000,
  headers: {}
})

fetcher.interceptors.request.use(function (config) {
  config.data = {
    ...config.data
  }
  config.headers = {
    ...config.headers,
    'Content-Type': 'application/json'
  }
  if (!config.data) {
    config.data = {}
  }
  return config
}, function (error) {
  // 请求错误时做些事
  return Promise.reject(error)
})

fetcher.interceptors.response.use(
  function (response) {
    // 请求正常则返回
    return Promise.resolve(response.data)
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default fetcher
