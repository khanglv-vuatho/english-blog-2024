import { ToastComponent } from '@/components/ToastComponent'

const apiConfig = {
  baseUrl: `${process.env.NEXT_PUBLIC_API_URL}`
}

const urlExceptAuthorization = ['Authenticate']

const authorization = async () => {
  if (typeof window !== 'undefined') {
    const token = localStorage?.getItem('access_token')
    if (token) {
      return { Authorization: 'Bearer ' + token }
    }
  }
  return {}
}

const handleApiError = (error: any, url: string) => {
  console.error('API Error:', error.message)
  if (error.response) {
    console.error('Server Error:', error.response)
  } else if (error.request) {
    console.error('No Response Received:', error.request)
  } else {
    console.error('Request Error:', error.message)
  }
  ToastComponent({
    message: error?.message || 'Error calling API',
    type: 'error'
  })
  throw error
}

const fetcherInstance = {
  async request(url: string, options: any = {}) {
    const fullUrl = `${apiConfig.baseUrl}${url}`

    if (!urlExceptAuthorization.includes(url)) {
      const authHeader = await authorization()
      options.headers = {
        ...options.headers,
        ...authHeader
      }
    }

    if (process.env.NODE_ENV !== 'production') {
      console.log(`Request: ${options.method || 'GET'} - ${url}`, options)
    }

    try {
      const response = await fetch(fullUrl, options)

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      if (process.env.NODE_ENV !== 'production') {
        // console.log(`Response: ${response.status} - ${url}`, data)
      }

      return data
    } catch (error: any) {
      handleApiError(error, url)
    }
  },

  get(url: string, options = {}) {
    return this.request(url, { ...options, method: 'GET' })
  },

  post(url: string, data: any, options: any = {}) {
    return this.request(url, {
      ...options,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      body: JSON.stringify(data)
    })
  },

  put(url: string, data: any, options: any = {}) {
    return this.request(url, {
      ...options,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      body: JSON.stringify(data)
    })
  },

  delete(url: string, options = {}) {
    return this.request(url, { ...options, method: 'DELETE' })
  }
}

export default fetcherInstance
