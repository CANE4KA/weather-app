import { FC } from 'react'

import styles from './HourList.module.scss'

import { DailyForecast } from '../../models/IWeather'

import { HourItem } from '../hourItem/HourItem'

interface IHourList {
	data: DailyForecast[]
	dayNumber: number
}

export const HourList: FC<IHourList> = ({ data, dayNumber }) => {
	return (
		<div className={styles.container}>
			<p>Почасовой прогноз</p>
			<hr className={styles.hr} />
			<div className={styles.hour_container}>
				{data[dayNumber].hour.map((hour, index) => (
					<HourItem
						key={hour.time_epoch}
						temp={hour.temp_c}
						hourNumber={index}
						{...hour.condition}
					/>
				))}
			</div>
		</div>
	)
}
