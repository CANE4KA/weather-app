import { useMutation } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IoSend } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

import styles from './Form.module.scss'

import { WeatherService } from '../../services/weather.service'

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
		onSuccess: data => {
			navigate('/weather-app/weather', { state: { data } })
		}
	})

	const onSubmit: SubmitHandler<IInputs> = data => {
		mutate(data.city)
		reset()
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			{isPending ? (
				<span>Loading...</span>
			) : (
				<>
					<input
						className={styles.form__input}
						placeholder='Введите город'
						{...register('city', {
							required: { value: true, message: 'Это обязательное поле' }
						})}
					/>

					<button className={styles.form__button} aria-label='submit'>
						<IoSend fontSize={25} />
					</button>
				</>
			)}
			{errors.city && (
				<span className={styles.form__error}>{errors.city.message}</span>
			)}
			{error && (
				<span className={styles.form__error}>
					Проверьте верно ли указан город
				</span>
			)}
		</form>
	)
}
