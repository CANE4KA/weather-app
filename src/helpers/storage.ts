import { IWeather } from '../models/IWeather'

export const saveToLocalStorage = (weatherData: IWeather) => {
	try {
		const data = JSON.stringify(weatherData)
		localStorage.setItem('weatherData', data)
	} catch (error) {
		console.warn(error)
	}
}

export const loadFromLocalStorage = () => {
	try {
		const data = localStorage.getItem('weatherData')
		if (!data) return []
		return JSON.parse(data)
	} catch (error) {
		console.warn(error)
		return []
	}
}
