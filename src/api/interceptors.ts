import axios, { type CreateAxiosDefaults } from 'axios'

import {
	getAccessToken,
	removeFromStorage
} from '@/services/auth-token.service'
import { authService } from '@/services/auth.service'

import { errorCatch } from './error'

const options: CreateAxiosDefaults = {
	baseURL: process.env.API_URL ?? ''
}

const axiosClassic = axios.create(options)
const axiosAuth = axios.create({ ...options, withCredentials: true })

// отрпавляется каждый раз при использовании axiosAuth
axiosAuth.interceptors.request.use(config => {
	const accessToken = getAccessToken()

	if (config?.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config // !Important
})

// отправляется каждый раз при использовании axiosAuth и когда приходит ответ
axiosAuth.interceptors.response.use(
	config => config, // !Important
	async error => {
		const originalRequest = error.config

		if (
			(error?.response?.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			// если _isRetry будет false, то запросы ниже него в этом коде будут отправлятся постоянно. поэтому нужно установить флаг true
			originalRequest._isRetry = true

			try {
				await authService.getNewTokens()
				return axiosAuth.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') removeFromStorage()
			}
		}

		throw error // !Important
	}
)

export { axiosAuth, axiosClassic }
