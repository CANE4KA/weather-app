import { FC } from 'react'
import { MdDelete } from 'react-icons/md'

import style from './FavoritesItem.module.scss'

import { useStore } from '../../store'

interface IFavoritesItem {
	city: string
	mutate: Function
}

export const FavoritesItem: FC<IFavoritesItem> = ({ city, mutate }) => {
	const { deleteCity } = useStore()

	return (
		<div className={style.favorites_item}>
			<>
				<span className={style.city} onClick={() => mutate(city)}>
					{city}
				</span>
				<MdDelete className={style.delete} onClick={() => deleteCity(city)} />
			</>
		</div>
	)
}
