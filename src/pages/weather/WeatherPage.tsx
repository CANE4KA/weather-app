import { useState } from 'react'

import { DayList } from '../../components/dayList/DayList'
import { FavoritesAction } from '../../components/favoritesAction/FavoritesAction'
import { HourList } from '../../components/hourList/HourList'

import styles from './WeatherPage.module.scss'

import { loadFromLocalStorage } from '../../helpers/storage'

export const WeatherPage = () => {
	const [dayNumber, setDayNumber] = useState(0)

	const data = loadFromLocalStorage()

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Погода на 7 дней. {data.location.name}</h1>
			<HourList data={data.forecast.forecastday} dayNumber={dayNumber} />
			<FavoritesAction city={data.location.name} />
			<DayList
				data={data.forecast.forecastday}
				dayNumber={dayNumber}
				handleClick={setDayNumber}
			/>
		</div>
	)
}
