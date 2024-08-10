import { Store } from '@tanstack/store'

import { IUser } from '@/shared/types'

interface UserStoreState {
	user: IUser | null
}

export const userStore = new Store<UserStoreState>({
	user: null
})
