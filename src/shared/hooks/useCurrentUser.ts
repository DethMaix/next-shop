import { useStore } from '@tanstack/react-store'

import { userStore } from '@/store/user'

import { type IUser } from '../types'

export const useCurrentUser = () => {
	// TODO: tips
	// const count = useStore(store, state => state['dogs'])

	// const handleUpdateDogs = () => {
	// 	store.setState(state => {
	// 		return {
	// 			...state,
	// 			['dogs']: state['dogs'] + 1
	// 		}
	// 	})
	// }

	const user = useStore(userStore, state => state.user)

	const setUser = (user: IUser) =>
		userStore.setState(() => {
			return {
				user
			}
		})

	return {
		user,
		setUser
	}
}
