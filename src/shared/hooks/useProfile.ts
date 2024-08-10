import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { toast } from 'sonner'

import { userService } from '@/services/user.service'

export const useProfile = () => {
	const {
		data: profile,
		isLoading: isProfileLoading,
		isSuccess,
		error
	} = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.profile()
	})

	useEffect(() => {
		if (error)
			toast.error('Something went wrong', {
				description: error.message
			})
	}, [error])

	return {
		profile,
		isSuccess,
		isProfileLoading
	}
}
