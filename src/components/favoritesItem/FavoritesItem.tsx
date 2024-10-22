import { useMutation } from '@tanstack/react-query'
import { FC } from 'react'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import style from './FavoritesItem.module.scss'

import { deleteAction } from '../../feature/cityList'
import { WeatherService } from '../../services/weather.service'

interface IFavoritesItem {
	city: string
}

export const FavoritesItem: FC<IFavoritesItem> = ({ city }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { mutate, isPending } = useMutation({
		mutationFn: (city: string) => WeatherService(city),
		onSuccess: data => {
			navigate('/weather-app/weather', { state: { data } })
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
					<MdDelete
						className={style.delete}
						onClick={() => dispatch(deleteAction(city))}
					/>
				</>
			)}
		</div>
	)
}
