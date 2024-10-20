import { configureStore } from '@reduxjs/toolkit'

import { loadFromLocalStorage, saveToLocalStorage } from './helpers/storage'

import cityReducer, { CityState } from './feature/cityList'

export interface RootState {
	cityList: CityState
}

export const store = configureStore({
	reducer: {
		cityList: cityReducer
	},
	preloadedState: loadFromLocalStorage() as RootState
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export type AppDispatch = typeof store.dispatch
