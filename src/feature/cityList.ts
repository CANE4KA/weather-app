import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CityState {
	cities: string[]
}

const initialState: CityState = {
	cities: []
}

export const citySlice = createSlice({
	name: 'cityList',
	initialState,
	reducers: {
		addAction: (state, action: PayloadAction<string>) => {
			if (state.cities.includes(action.payload)) return
			state.cities = [...state.cities, action.payload]
		},

		deleteAction: (state, action: PayloadAction<string>) => {
			state.cities = state.cities.filter(city => city !== action.payload)
		}
	}
})

export const { addAction, deleteAction } = citySlice.actions

export default citySlice.reducer
