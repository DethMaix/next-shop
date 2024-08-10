'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button, Input } from '@/components/ui'

import { authService } from '@/services/auth.service'

import { PUBLIC_PAGES } from '@/shared/config/pages-url.config'
import { useCurrentUser } from '@/shared/hooks/useCurrentUser'
import { AuthType, IAuthForm } from '@/shared/types'

import { errorCatch } from '@/api/error'

export const Auth = () => {
	const [formType, setFormType] = useState<AuthType>('register')

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isLoading: isFormLoading }
	} = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const { push } = useRouter()

	const { setUser } = useCurrentUser()

	const { mutateAsync } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) => authService.main(formType, data),
		onSuccess: data => {
			toast.success(
				formType === 'register'
					? 'Account created successfully'
					: 'Login successfully'
			)
			setUser(data.data.user)
			reset()
			push(PUBLIC_PAGES.HOME)
		},
		onError: error => {
			toast.error('Something went wrong', {
				description: errorCatch(error)
				// description: error.message
			})
		}
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => mutateAsync(data)

	return (
		<div className='flex min-h-screen'>
			<form
				className='w-4/12 m-auto shadow bg-sidebar rounded-xl p-14 flex flex-col gap-3'
				onSubmit={handleSubmit(onSubmit)}
			>
				<h1 className='text-2xl text-center text-black font-medium'>Auth</h1>

				<div className='flex flex-col gap-y-1'>
					<Input
						id='username'
						placeholder='Enter username:'
						type='text'
						{...register('username', {
							required: 'Username is required!'
						})}
					/>

					{errors.username && (
						<p className='text-red-500 text-xs'>{errors.username.message}</p>
					)}
				</div>

				<div className='flex flex-col gap-y-1'>
					<Input
						id='email'
						placeholder='Enter email:'
						type='email'
						{...register('email', {
							required: 'Email is required!',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Invalid email address!'
							}
						})}
					/>

					{errors.email && (
						<p className='text-red-500 text-xs'>{errors.email.message}</p>
					)}
				</div>

				<div className='flex flex-col gap-y-1'>
					<Input
						id='password'
						placeholder='Enter password: '
						type='password'
						{...register('password', {
							required: 'Password is required!',
							minLength: {
								value: 6,
								message: 'Password must be at least 6 characters!'
							}
						})}
					/>

					{errors.password && (
						<p className='text-red-500 text-xs'>{errors.password.message}</p>
					)}
				</div>

				{/* TODO: maybe add confirm password */}

				<div className='flex items-center gap-5 justify-center mt-10'>
					{isFormLoading ? (
						<p className='animate-pulse'>Loading</p>
					) : (
						<>
							<Button onClick={() => setFormType('login')}>Login</Button>
							<Button onClick={() => setFormType('register')}>Register</Button>
						</>
					)}
				</div>
			</form>
		</div>
	)
}
