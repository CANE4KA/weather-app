import { useMutation } from '@tanstack/react-query'
import { FC } from 'react'
import { MdDelete } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import style from './FavoritesItem.module.scss'

import { saveToLocalStorage } from '../../helpers/storage'

import { WeatherService } from '../../services/weather.service'
import { useStore } from '../../store'

interface IFavoritesItem {
	city: string
}

export const FavoritesItem: FC<IFavoritesItem> = ({ city }) => {
	const { deleteCity } = useStore()
	const navigate = useNavigate()

	const { mutate, isPending } = useMutation({
		mutationFn: (city: string) => WeatherService(city),
		onSuccess: data => {
			saveToLocalStorage(data)
			navigate('/weather-app/weather')
		}
	})

	return (
		<div className={style.favorites_item}>
			{isPending ? (
				<span>Loading...</span>
			) : (
				<>
					<span className={style.city} onClick={() => mutate(city)}>
						{city}
					</span>
					<MdDelete className={style.delete} onClick={() => deleteCity(city)} />
				</>
			)}
		</div>
	)
}
