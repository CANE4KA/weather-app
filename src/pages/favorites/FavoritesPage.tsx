import { useSelector } from 'react-redux'

import { FavoritesItem } from '../../components/favoritesItem/FavoritesItem'

import style from './Favorites.module.scss'

import { RootState } from '../../store'

export const FavoritesPage = () => {
	const cityList = useSelector((state: RootState) => state.cityList.cities)

	return (
		<div className={style.favorites}>
			{cityList.map(city => (
				<FavoritesItem key={city} city={city} />
			))}
		</div>
	)
}
