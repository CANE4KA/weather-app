import { FC } from 'react'

import styles from './FavoritesAction.module.scss'

import { useStore } from '../../store'

interface IFavoritesAction {
	city: string
}

export const FavoritesAction: FC<IFavoritesAction> = ({ city }) => {
	const { cities, addCity, deleteCity } = useStore()

	return (
		<>
			{cities.includes(city) ? (
				<p className={styles.favorite} onClick={() => deleteCity(city)}>
					Убрать из избранного
				</p>
			) : (
				<p className={styles.favorite} onClick={() => addCity(city)}>
					Добавить в избранное
				</p>
			)}
		</>
	)
}
