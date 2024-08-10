'use client'

import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'

import { authService } from '@/services/auth.service'

import { useCurrentUser } from '@/shared/hooks/useCurrentUser'
import { type IAuthForm } from '@/shared/types'

import { errorCatch } from '@/api/error'

import Search from '../components/ui/Search'

import { cn } from '@/lib/utils'
import { PUBLIC_PAGES } from '@/shared/config/pages-url.config'

const components: { title: string; href: string; description: string }[] = [
	{
		title: 'Alert Dialog',
		href: '/docs/primitives/alert-dialog',
		description:
			'A modal dialog that interrupts the user with important content and expects a response.'
	},
	{
		title: 'Hover Card',
		href: '/docs/primitives/hover-card',
		description: 'For sighted users to preview content available behind a link.'
	},
	{
		title: 'Progress',
		href: '/docs/primitives/progress',
		description:
			'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.'
	},
	{
		title: 'Scroll-area',
		href: '/docs/primitives/scroll-area',
		description: 'Visually or semantically separates content.'
	},
	{
		title: 'Tabs',
		href: '/docs/primitives/tabs',
		description:
			'A set of layered sections of content—known as tab panels—that are displayed one at a time.'
	},
	{
		title: 'Tooltip',
		href: '/docs/primitives/tooltip',
		description:
			'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.'
	}
]

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...props}
				>
					<div className='text-sm font-medium leading-none'>{title}</div>
					<p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = 'ListItem'

export const Header = () => {
	const [isSearching, setIsSearching] = useState(false)

	const { user } = useCurrentUser()

	const { mutateAsync } = useMutation({
		mutationKey: ['auth'],
		mutationFn: () => authService.logout(),
		onSuccess: () => {
			toast.success('Logout successfully')
		},
		onError: error => {
			toast.error('Something went wrong', {
				description: errorCatch(error)
				// description: error.message
			})
		}
	})

	if (!isSearching)
		return (
			<header className='flex justify-between items-center w-11/12 m-auto mt-5 px-5 py-1 text-sm bg-neutral-200 rounded-2xl fixed z-40 left-1/2 top-0 -translate-x-2/4 opacity-85'>
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Male</NavigationMenuTrigger>
							<NavigationMenuContent className='bg-neutral-200'>
								<ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
									{components.map(component => (
										<ListItem
											key={component.title}
											title={component.title}
											href={component.href}
										>
											{component.description}
										</ListItem>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Female</NavigationMenuTrigger>
							<NavigationMenuContent className='bg-neutral-200'>
								<ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
									{components.map(component => (
										<ListItem
											key={component.title}
											title={component.title}
											href={component.href}
										>
											{component.description}
										</ListItem>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				<div className='font-bold'>Colin&apos;s</div>
				<div
					onClick={() => {
						setIsSearching(!isSearching)
					}}
					className='p-2 rounded-xl hover:bg-neutral-300 transition duration-150 ease-out cursor-pointer'
				>
					Search
				</div>

				{user ? (
					<Button onClick={() => mutateAsync()}>Logout</Button>
				) : (
					<Button asChild>
						<Link href={PUBLIC_PAGES.AUTH}>Auth</Link>
					</Button>
				)}
			</header>
		)
	return (
		<Search
			isSearching={isSearching}
			setIsSearching={setIsSearching}
		/>
	)
}
