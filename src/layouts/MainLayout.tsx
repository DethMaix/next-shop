'use client'

import { type FC, type PropsWithChildren } from 'react'

import { Footer } from './Footer'
import { Header } from './Header'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Header />
				{children}
			<Footer />
		</>
	)
}
