import {
	type AuthType,
	type IAuthForm,
	type IAuthResponse
} from '@/shared/types'

import { axiosClassic } from '@/api/interceptors'

import { removeFromStorage, saveTokenStorage } from './auth-token.service'

const BASE_URL = '/auth'

export const authService = {
	async main(type: AuthType, data: IAuthForm) {
		const response = await axiosClassic.post<IAuthResponse>(
			`${BASE_URL}/${type}`,
			data
		)

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

		return response
	},

	async getNewTokens() {
		const response = await axiosClassic.post<IAuthResponse>(
			`${BASE_URL}/login/access-token`
		)

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

		return response
	},

	async logout() {
		const response = await axiosClassic.post<boolean>(`${BASE_URL}/logout`)

		if (response.data) removeFromStorage()

		return response
	}
}
