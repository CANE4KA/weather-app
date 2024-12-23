import { useMutation } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IoSend } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

import styles from './Form.module.scss'

import { saveToLocalStorage } from '../../helpers/storage'

import { IWeather } from '../../models/IWeather'

import { WeatherService } from '../../services/weather.service'
import { Input } from '../../ui/Input'

interface IInputs {
	city: string
}

export const Form = () => {
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<IInputs>({ mode: 'onChange' })

	const { mutate, error, isPending } = useMutation({
		mutationFn: (city: string) => WeatherService(city),
		onSuccess: (data: IWeather) => {
			saveToLocalStorage(data)
			navigate('/weather-app/weather')
		}
	})

	const onSubmit: SubmitHandler<IInputs> = data => {
		mutate(data.city)
		reset()
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			{isPending ? (
				<div className={styles.loader}></div>
			) : (
				<>
					<Input
						{...register<'city'>('city', {
							required: { value: true, message: 'Это обязательное поле' }
						})}
						error={errors.city?.message}
						placeholder='Введите город'
					/>

					<button className={styles.form__button} aria-label='submit'>
						<IoSend fontSize={25} />
					</button>
				</>
			)}
			{error && (
				<p className={styles.form__error}>Проверьте верно ли указан город</p>
			)}
		</form>
	)
}
