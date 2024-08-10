import { axiosClassic } from '@/api/interceptors'
import { Product } from '@/shared/types'

export const productService = {
	getAll: async () => {
		// TODO: implement pagination whe api will be ready
		const res = await axiosClassic.get<Product[]>('/products')

		return res.data
	},

	create: async (dto: Product) => {
		const res = await axiosClassic.post('/products', dto)

		return res.data
	}
}
