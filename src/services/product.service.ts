import { axiosClassic } from '@/api/interceptors'

export const productService = {
	getAll: async () => {
		const res = await axiosClassic.get(
			'products/v2/list?store=US&offset=0&categoryId=4209&country=US&sort=freshness&currency=USD&sizeSchema=US&limit=48&lang=en-US'
		)
    
    return res.data
	}
}
