import { type IUser, type TypeUserForm } from '@/shared/types'

import { axiosAuth, axiosClassic } from '@/api/interceptors'

export interface IProfileResponse {
	user: IUser
	statistics: {
		label: string
		value: string
	}[]
}

class UserService {
	private BASE_URL = '/user/profile'

	async profile() {
		const response = await axiosAuth.get<IProfileResponse>(this.BASE_URL)

		return response.data
	}

	async update(data: TypeUserForm) {
		const response = await axiosAuth.put(this.BASE_URL, data)

		return response.data
	}
}

export const userService = new UserService()
