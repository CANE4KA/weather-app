import { FC } from 'react'

import styles from './DayList.module.scss'

import { DailyForecast } from '../../models/IWeather'

import { DayItem } from '../dayItem/DayItem'

interface IDayList {
	data: DailyForecast[]
	handleClick: Function
	dayNumber: number
}

export const DayList: FC<IDayList> = ({ data, handleClick, dayNumber }) => {
	return (
		<div className={styles.container}>
			<p>Прогноз на 7 дней</p>
			<hr className={styles.hr} />
			<div className={styles.list}>
				{data.map((day, index) => (
					<DayItem
						key={day.date_epoch}
						date={day.date}
						maxTemp={day.day.maxtemp_c}
						minTemp={day.day.mintemp_c}
						dayNumber={dayNumber}
						handleClick={handleClick}
						index={index}
						icon={day.day.condition.icon}
					/>
				))}
			</div>
		</div>
	)
}
