import type { Metadata, Viewport } from 'next'
import { Noto_Sans } from 'next/font/google'
import { Toaster } from 'sonner'

import { SITE_NAME } from '@/shared/constants/seo.constants'

import './globals.scss'
import { Providers } from './providers'
import { MainLayout } from '@/layouts/MainLayout'

const zen = Noto_Sans({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-zen',
	style: ['normal']
})

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: 'Best one for planning your next adventure'
}

export const viewport: Viewport = {
	colorScheme: 'light'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={zen.className}>
				<Providers>
					<MainLayout>
						{children}

						<Toaster
							theme='dark'
							position='top-center'
							duration={1500}
						/>
					</MainLayout>
				</Providers>
			</body>
		</html>
	)
}
