import { FC } from 'react'
import { FiSunrise, FiSunset } from 'react-icons/fi'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

import styles from './WeatherCard.module.scss'

import { getCurrentDay } from '../../helpers/getCurrentDay'
import { getCurrentTime } from '../../helpers/getCurrentTime'

import { HourlyData, IWeather } from '../../models/IWeather'

import { useStore } from '../../store'

interface IWeatherCard {
	data: IWeather
	city: string
}

export const WeatherCard: FC<IWeatherCard> = ({ data, city }) => {
	const { cities, addCity, deleteCity } = useStore()

	const day: HourlyData[] = data.hour.map((item, index) => ({
		...item,
		hour_number: index
	}))

	return (
		<div className={styles.card}>
			<div className={styles.head}>
				<h4>{getCurrentDay(data.date)}</h4>
				<img src={data.day.condition.icon} alt='condition' />
				{cities.includes(city) ? (
					<MdFavorite
						className={styles.favorite}
						fontSize={25}
						onClick={() => deleteCity(city)}
					/>
				) : (
					<MdFavoriteBorder
						className={styles.favorite}
						fontSize={25}
						onClick={() => addCity(city)}
					/>
				)}
			</div>
			<div className={styles.extremesTemperature}>
				<div>Мин. температура: {data.day.mintemp_c} °C</div>
				<div>Макс. температура: {data.day.maxtemp_c} °C</div>
			</div>
			<div className={styles.sun}>
				<div className={styles.sunrise}>
					<FiSunrise fontSize={35} />
					<span>{getCurrentTime(data.astro.sunrise)}</span>
				</div>
				<div className={styles.sunset}>
					<FiSunset fontSize={35} />
					<span>{getCurrentTime(data.astro.sunset)}</span>
				</div>
			</div>
			<div className={styles.graphic}>
				<LineChart
					width={250}
					height={200}
					margin={{
						top: 5,
						right: 5,
						left: -40
					}}
					data={day}
				>
					<XAxis dataKey='hour_number' fontSize={10} />
					<YAxis />
					<Tooltip />
					<Line type='monotone' dataKey='temp_c' stroke='#8884d8' />
				</LineChart>
			</div>
		</div>
	)
}
