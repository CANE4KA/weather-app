import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { FavoritesItem } from '../../components/favoritesItem/FavoritesItem'

import styles from './Favorites.module.scss'

import { saveToLocalStorage } from '../../helpers/storage'

import { WeatherService } from '../../services/weather.service'
import { useStore } from '../../store'

export const FavoritesPage = () => {
	const { cities } = useStore()

	const navigate = useNavigate()

	const { mutate, isPending } = useMutation({
		mutationFn: (city: string) => WeatherService(city),
		onSuccess: data => {
			saveToLocalStorage(data)
			navigate('/weather-app/weather')
		}
	})

	return (
		<div className={styles.favorites}>
			{isPending ? (
				<div className={styles.loader}></div>
			) : (
				cities.map(city => (
					<FavoritesItem key={city} mutate={mutate} city={city} />
				))
			)}
		</div>
	)
}
