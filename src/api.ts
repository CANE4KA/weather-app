import axios from 'axios'

const BASE_URL = 'https://api.weatherapi.com/v1'

export const $axios = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET'
	}
})
