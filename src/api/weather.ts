import axios from 'axios'

export const $axios = axios.create({
	baseURL: import.meta.env.VITE_APP_BASE_WEATHER_URL,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
	}
})
