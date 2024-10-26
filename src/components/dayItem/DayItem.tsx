import cn from 'clsx'
import { FC } from 'react'

import styles from './DayItem.module.scss'

import { getCurrentDay } from '../../helpers/getCurrentDay'

interface IDayItem {
	date: string
	maxTemp: number
	minTemp: number
	dayNumber: number
	handleClick: Function
	index: number
	icon: string
}

export const DayItem: FC<IDayItem> = ({
	date,
	maxTemp,
	minTemp,
	dayNumber,
	handleClick,
	index,
	icon
}) => {
	return (
		<div
			className={cn(styles.item, { [styles.active]: dayNumber === index })}
			onClick={() => handleClick(index)}
		>
			<p>{getCurrentDay(date)}</p>
			<img width={25} src={icon} alt='icon' />
			<p>
				{minTemp}° ➔ {maxTemp}°
			</p>
		</div>
	)
}
