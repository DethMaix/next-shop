import axios, { type CreateAxiosDefaults } from 'axios'

const options: CreateAxiosDefaults = {
	baseURL: process.env.API_URL || '',
	headers: {
		'Content-Type': 'application/json',
		'x-rapidapi-key': 'f60ec051a8msh89d7e4fea7f4366p1d6853jsn33d23da7c64f'
	}
	// withCredentials: true
}

const axiosClassic = axios.create(options)
const axiosAuth = axios.create(options)

// axiosAuth.interceptors.request.use(config => {
// 	const accessToken = getAccessToken()

// 	if (config?.headers && accessToken) {
// 		config.headers.Authorization = `Bearer ${accessToken}`
// 	}

// 	return config
// })

// axiosAuth.interceptors.response.use(
// 	config => config,
// 	async error => {
// 		const originalRequest = error.config

// 		if (
// 			(error?.response?.status === 401 ||
// 				errorCatch(error) === 'jwt expired' ||
// 				errorCatch(error) === 'jwt must be provided') &&
// 			error.config &&
// 			!error.config._isRetry
// 		) {
// 			originalRequest._isRetry = true

// 			try {
// 				await authService.getNewTokens()
// 				return axiosAuth.request(originalRequest)
// 			} catch (error) {
// 				if (errorCatch(error) === 'jwt expired') removeFromStorage()
// 			}
// 		}

// 		throw error
// 	}
// )

export { axiosAuth, axiosClassic }
