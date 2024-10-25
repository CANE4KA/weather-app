interface AstroData {
	sunrise: string
	sunset: string
}

export interface HourlyData {
	cloud: number
	condition: {
		text: string
		icon: string
		code: number
	}
	temp_c: number
	time: string
}

interface DailyData {
	avgtemp_c: number
	condition: {
		text: string
		icon: string
		code: number
	}
	maxtemp_c: number
	mintemp_c: number
}

export interface IWeather {
	astro: AstroData
	day: DailyData
	hour: HourlyData[]
	date: string
}

// Новый интерфейс для структуры данных
interface LocationInfo {
	country: string
	lat: number
	localtime: string
	localtime_epoch: number
	lon: number
	name: string
	region: string
	tz_id: string
}

interface CurrentWeather {
	last_updated_epoch: number
	last_updated: string
	temp_c: number
	temp_f: number
	is_day: number
}

export interface IForecastDay {
	astro: AstroData
	date: string
	date_epoch: number
	day: DailyData
	hour: HourlyData[]
}

export interface IForecast {
	forecast: IForecastDay[]
}

export interface WeatherData {
	location: LocationInfo
	current: CurrentWeather
	forecast: IForecast
}
