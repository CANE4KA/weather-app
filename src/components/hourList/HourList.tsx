import { FC } from 'react'

import styles from './HourList.module.scss'

import { HourItem } from '../hourItem/HourItem'

interface IHourList {
	data: any
	dayNumber: number
}

export const HourList: FC<IHourList> = ({ data, dayNumber }) => {
	return (
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
	)
}
