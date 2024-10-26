import { SubmitHandler, useForm } from 'react-hook-form'

import styles from './Feedback.module.scss'

import { sendMessage } from '../../api/telegram'
import { Input } from '../../ui/Input'

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
				<Input
					{...register<'email'>('email', {
						required: { value: true, message: 'Это обязательное поле' }
					})}
					error={errors.email?.message}
					placeholder='Ваша почта'
				/>
				<Input
					{...register<'text'>('text', {
						required: { value: true, message: 'Это обязательное поле' }
					})}
					error={errors.text?.message}
					placeholder='Ваше обращение'
				/>
				<button className={styles.form__button} aria-label='submit'>
					Отправить
				</button>
			</>
		</form>
	)
}
