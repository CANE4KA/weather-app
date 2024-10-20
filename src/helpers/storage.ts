import { RootState } from '../store'

export const saveToLocalStorage = (state: RootState) => {
	try {
		const appState = JSON.stringify(state)
		localStorage.setItem('favoritesCities', appState)
	} catch (error) {
		console.warn(error)
	}
}

export const loadFromLocalStorage = () => {
	try {
		const appState = localStorage.getItem('favoritesCities')
		if (!appState) return { cityList: { cities: [] } }
		return JSON.parse(appState)
	} catch (error) {
		console.warn(error)
		return { cityList: { cities: [] } }
	}
}
