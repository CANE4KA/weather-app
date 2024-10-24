import { SubmitHandler, useForm } from 'react-hook-form'

import styles from './Feedback.module.scss'

import { sendMessage } from '../../api/telegram'

interface IInputs {
	email: string
	text: string
}

export const Feedback = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<IInputs>({ mode: 'onChange' })

	const onSubmit: SubmitHandler<IInputs> = async ({ email, text }) => {
		try {
			await sendMessage(`Почта: ${email} Текст: ${text}`)
			reset()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<>
				<input
					className={styles.form__input}
					placeholder='Введите вашу почту'
					{...register('email', {
						required: { value: true, message: 'Это обязательное поле' }
					})}
				/>
				{errors.email && (
					<span className={styles.form__error}>{errors.email.message}</span>
				)}

				<input
					className={styles.form__input}
					placeholder='Введите предложение(я)'
					{...register('text', {
						required: { value: true, message: 'Это обязательное поле' }
					})}
				/>
				{errors.text && (
					<span className={styles.form__error}>{errors.text.message}</span>
				)}

				<button className={styles.form__button} aria-label='submit'>
					Отправить
				</button>
			</>
		</form>
	)
}
