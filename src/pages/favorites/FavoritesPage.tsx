import { FavoritesItem } from '../../components/favoritesItem/FavoritesItem'

import style from './Favorites.module.scss'

import { useStore } from '../../store'

export const FavoritesPage = () => {
	const { cities } = useStore()

	return (
		<div className={style.favorites}>
			{cities.map(city => (
				<FavoritesItem key={city} city={city} />
			))}
		</div>
	)
}
