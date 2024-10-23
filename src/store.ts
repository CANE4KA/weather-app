import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IStore {
	cities: string[]
	addCity: Function
	deleteCity: Function
}

export const useStore = create<IStore>()(
	persist(
		set => ({
			cities: [],
			addCity: (city: string) =>
				set(state => ({
					cities: [...state.cities, city]
				})),

			deleteCity: (currentCity: string) =>
				set(state => ({
					cities: state.cities.filter(city => city !== currentCity)
				}))
		}),
		{ name: 'city-store' }
	)
)
