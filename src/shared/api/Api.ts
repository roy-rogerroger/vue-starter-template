import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'

class Api {
  private readonly instance: AxiosInstance
  private pendingRequests = new Map<string, Promise<AxiosResponse>>()

  constructor(baseUrl?: string, token?: string) {
    this.instance = axios.create({
      baseURL: baseUrl,
      timeout: 10000,
      headers: {
        Accept: 'application/ld+json',
      },
    })

    if (token) {
      this.setToken(token)
    }

    this.instance.interceptors.response.use(
      async (response) => {
        const requestKey = this.getRequestKey(response.config)
        this.pendingRequests.delete(requestKey)

        return response
      },
      async (error) => {
        if (error.config) {
          const requestKey = this.getRequestKey(error.config)
          this.pendingRequests.delete(requestKey)
        }

        return Promise.reject(error)
      },
    )
  }

  public setToken(token: string): void {
    this.instance.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  public setBaseUrl(baseUrl: string): void {
    this.instance.defaults.baseURL = baseUrl
  }

  public getInstance(): AxiosInstance {
    return this.instance
  }

  private getRequestKey(config: AxiosRequestConfig): string {
    const { url, method, params, data } = config

    let normalizedData = data
    try {
      if (typeof data === 'string') {
        normalizedData = JSON.parse(data)
      }
    } catch (error) {
      throw error
    }

    let normalizedParams = params
    try {
      if (typeof params === 'string') {
        normalizedParams = JSON.parse(params)
      }
    } catch (error) {
      throw error
    }

    return `${method}-${url}-${JSON.stringify(normalizedParams || {})}-${JSON.stringify(normalizedData || {})}`
  }

  private async request<T>(
    method: 'get' | 'post' | 'put' | 'patch' | 'delete',
    url: string,
    options: {
      params?: Record<string, any>
      data?: any
      config?: AxiosRequestConfig
    } = {},
  ): Promise<AxiosResponse<T>> {
    const { params, data, config } = options

    const headers: Record<string, string> = {}
    if (method === 'patch') {
      headers['Content-Type'] = 'application/merge-patch+json'
    } else {
      headers['Content-Type'] = 'application/ld+json'
    }

    const requestConfig: AxiosRequestConfig = {
      ...config,
      method,
      url,
      params,
      data,
      headers,
    }

    const requestKey = this.getRequestKey(requestConfig)

    const existingRequest = this.pendingRequests.get(requestKey)
    if (existingRequest) {
      return existingRequest
    }

    const newRequest = this.instance(requestConfig)
    this.pendingRequests.set(requestKey, newRequest)

    return newRequest
  }

  public get = async <T>(url: string, params?: Record<string, any>, config?: AxiosRequestConfig) =>
    this.request<T>('get', url, { params, config })

  public post = async <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    this.request<T>('post', url, { data, config })

  public put = async <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    this.request<T>('put', url, { data, config })

  public patch = async <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    this.request<T>('patch', url, { data, config })

  public delete = async <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
    this.request<T>('delete', url, { data, config })
}

const globalApi = new Api()
export { globalApi }

export default Api
