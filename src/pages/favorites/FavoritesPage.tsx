import { useSelector } from 'react-redux'

import { RootState } from '../../store'

export const FavoritesPage = () => {
	const cityList = useSelector((state: RootState) => state.cityList.cities)

	return (
		<div>
			{cityList.map(city => (
				<span key={city}>{city}</span>
			))}
		</div>
	)
}
