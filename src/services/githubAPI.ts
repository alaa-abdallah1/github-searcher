import axios, {AxiosInstance, AxiosRequestConfig} from "axios"

const createClient = (config?: AxiosRequestConfig): AxiosInstance => {
  const client = axios.create({
    baseURL: "https://api.github.com/search",
    ...config,
  })

  client.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
  )

  return client
}

const client = createClient()

export {client}
