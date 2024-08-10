'use client'

import { useQuery } from '@tanstack/react-query'
import React from 'react'

import { productService } from '@/services/product.service'

export const AdminProductsList = () => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['getAdminProducts'],
		queryFn: () => productService.getAll()
	})

	console.log('data', data)

	return (
		<div>
			<h1>AdminProductsList</h1>
		</div>
	)
}
