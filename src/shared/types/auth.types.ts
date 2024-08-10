export enum EnumTokens {
	'ACCESS_TOKEN' = 'accessToken',
	'REFRESH_TOKEN' = 'refreshToken'
}

export interface IAuthForm {
	username: string
	email: string
	password: string
}

export type AuthType = 'login' | 'register'

export interface IUser {
	// TODO: мб вынести
	createdAt: string
	updatedAt: string
	// TODO: мб вынести
	id: string
	email: string
	username: string
	bonusBalance: number
}

export interface IAuthResponse {
	accessToken: string
	user: IUser
}

export type TypeUserForm = Omit<IUser, 'id'> & { password?: string }
