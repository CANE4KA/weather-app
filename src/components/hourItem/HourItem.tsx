import { FC } from 'react'

import styles from './HourItem.module.scss'

interface IHourItem {
	temp: number
	hourNumber: number
	icon: string
	alt: string
}

export const HourItem: FC<IHourItem> = ({ temp, hourNumber, icon, alt }) => {
	return (
		<div className={styles.item}>
			<span>{hourNumber}</span>
			<span>{temp}</span>
			<img width={25} src={icon} alt={alt} />
		</div>
	)
}
