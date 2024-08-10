'use client'

import { type FC, type PropsWithChildren, useEffect } from 'react'

import { useCurrentUser } from '@/shared/hooks/useCurrentUser'
import { useProfile } from '@/shared/hooks/useProfile'

import { Footer } from './Footer'
import { Header } from './Header'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	const { profile } = useProfile()

	const { setUser } = useCurrentUser()

	useEffect(() => {
		if (profile) setUser(profile.user)
	}, [profile, setUser])

	return (
		<>
			<Header />
			{/* <main className='w-9/12 m-auto mt-28 z-1'> */}
			{children}
			{/* </main> */}
			<Footer />
		</>
	)
}
