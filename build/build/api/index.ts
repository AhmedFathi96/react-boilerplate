import axios, { AxiosError, AxiosResponse } from 'axios'
import LocalStorageService from '../shared/common/localStorageService'

const BASE_URL = 'https://dummyjson.com/'

export const api = axios.create({
	baseURL: `${BASE_URL}`,
})

api.interceptors.request.use(
	(options: any) => {
		if (!options.headers.Authorization) {
			const token = LocalStorageService.get('token')

			if (token) {
				options.headers.Authorization = `TOKEN ${token}`
			}
		}
		return options
	},
	(error) => Promise.reject(error),
)

api.interceptors.response.use(
	(response): Promise<AxiosResponse> => Promise.resolve({ ...response, response: response.data, error: null }),
	async (error): Promise<AxiosError> => {
		// const { status, config } = error.response

		// if (status === 401 && config.url !== '/authorization') {
		// 	store.dispatch(logout())
		// }

		return Promise.resolve({
			...error,
			response: null,
			error: error?.response?.data,
		})
	},
)

export default api
