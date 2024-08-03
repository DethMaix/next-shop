'use client'

import { useMutation, useQuery } from '@tanstack/react-query'
import { useStore } from '@tanstack/react-store'
import { Metadata } from 'next'
import Image from 'next/image'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'

import { productService } from '@/services/product.service'

import { store } from '@/store/test'
import Item from '@/components/ui/item'
import { useEffect } from 'react'

// export const metadata: Metadata = {
// 	title: 'Homepage',
// 	description: 'Homepage description'
// }

export default function Home() {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['getProducts'],
		// TODO: add eslint for react-query
		queryFn: () => productService.getAll()
		// GET, POST, PUT, PATCH, DELETE
	})

	
	console.log(data)
	
	
	// const { mutate } = useMutation({
	// 	mutationKey: ['deleteProduct'],
	// 	mutationFn: id => productService.delete(id),
	// })

	// const count = useStore(store, state => state['dogs'])

	// const handleUpdateDogs = () => {
	// 	store.setState(state => {
	// 		return {
	// 			...state,
	// 			['dogs']: state['dogs'] + 1
	// 		}
	// 	})
	// }



	

	return (
		<main className='w-9/12 m-auto mt-28 z-1'>
			
			<div className='flex flex-col items-center justify-between'>
				<div className='relative mb-16 '>
					<div >
						<Image
							className='rounded-3xl'
							src="/main_image.jpg"
							width={1230}
							height={650}
							alt="Picture of the author"
						/>
					</div>
					<div className='absolute bottom-8 left-1/2 -translate-x-2/4 text-slate-50 text-center '>
						<div className='uppercase text-sm font-bold mb-2'>new arrivals</div>
						<div className='text-xl'>Glam Slam</div>
						<Button variant="outline" className='mt-5'>Discover more</Button>
						
					</div>
				</div>
			</div>
			<div className='flex justify-between mb-12'>
				<Item />
				<Item />
				<Item />
				<Item />
				<Item />
			</div>
			<div className='flex flex-col items-center justify-between'>
				<div className='relative mb-16'>
					<div >
						<Image
							className='rounded-3xl'
							src="/main_image.jpg"
							width={1230}
							height={650}
							alt="Picture of the author"
						/>
					</div>
					<div className='absolute bottom-8 left-1/2 -translate-x-2/4 text-slate-50 text-center '>
						<div className='uppercase text-sm font-bold mb-2'>new arrivals</div>
						<div className='text-xl'>Glam Slam</div>
						<Button variant="outline" className='mt-5'>Discover more</Button>
					</div>
				</div>
			</div>
			<div className='flex w-4/6 m-auto rounded-3xl overflow-hidden'>
				<div className='w-1/2 flex items-center bg-white '>
					<div className='text-center px-8'>
						<div className='uppercase text-sm mb-2'>Featured</div>
						<div className='uppercase text-2xl mb-4'>SLG</div>
						<p className='text-xs tracking-tight font-normal mb-4'>
							The idiosyncratic codes of Maison Margiela are illuminated in the house’s small leather goods conceived by the Maison.
						</p>
						<Button variant={'outline'} className='border-black hover:bg-black hover:text-white'>View All</Button>
					</div>
				</div>
				<div>
					<Image
						src="/slg.jpg"
						width={400}
						height={600}
						alt="Picture of the author"
					/>
				</div>
			</div>

			<div className='flex justify-center mt-4'>
				<p className='text-base text-center w-1/2'>
					Maison Margiela is a Parisian haute couture house founded on ideas of nonconformity and the subversion of norms. Appointed Creative Director in 2014, the British couturier John Galliano exercises his visual language to expand on the grammar of Maison Margiela, creating a new technical vocabulary that cements the house’s position as a singular and autonomous entity in the realm of luxury.
				</p>
			</div>
		</main>
	)
}
