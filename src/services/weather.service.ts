import { $axios } from '../api'

export const WeatherService = async (city: string) => {
	const key = import.meta.env.VITE_APP_API_KEY
	const days = 7

	try {
		const { data } = await $axios.get(
			`v1/forecast.json?q=${city}&key=${key}&days=${days}`
		)

		return data
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message)
		}

		throw new Error('An unexpected error occurred')
	}
}
