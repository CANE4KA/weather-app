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
