import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'

// import { Providers } from '../providers'

// import { MainLayout } from '@/layouts/MainLayout'

export const metadata: Metadata = {
	title: 'Admin route',
	...NO_INDEX_PAGE
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<main>
			{/* <MainLayout> */}
			{/* <Providers> */}
			{children}
			{/* </Providers> */}
			{/* </MainLayout> */}
		</main>
	)
}
