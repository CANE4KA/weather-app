import { FC } from 'react'

import styles from './HourItem.module.scss'

interface IHourItem {
	temp: number
	hourNumber: number
	icon: string
	text: string
}

export const HourItem: FC<IHourItem> = ({ temp, hourNumber, icon, text }) => {
	return (
		<div className={styles.item}>
			<p>{hourNumber}</p>
			<p>{temp}°</p>
			<img width={25} src={icon} alt={text} />
		</div>
	)
}
