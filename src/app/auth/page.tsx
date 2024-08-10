import { type Metadata } from 'next'

import { Auth } from './components/Auth'

export const metadata: Metadata = {
	title: 'Auth',
	description: 'Auth'
}

export default function AuthPage() {
	return <Auth />
}
