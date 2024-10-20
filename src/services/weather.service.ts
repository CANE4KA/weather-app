import { $axios } from '../api'

export const WeatherService = async (city: string) => {
	const key = '115adbefe86a4b4389f160147241610'
	const days = 7

	try {
		const { data } = await $axios.get(`forecast.json?q=${city}`, {
			params: { key, days }
		})

		return data
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message)
		}

		throw new Error('An unexpected error occurred')
	}
}
