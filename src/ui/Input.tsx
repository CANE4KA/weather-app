import { forwardRef } from 'react'

import styles from './Input.module.scss'

interface InputProps {
	error?: string
	placeholder: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { error, placeholder, ...inputProps } = props

	return (
		<>
			<input
				autoComplete='off'
				className={styles.input}
				placeholder={placeholder}
				{...inputProps}
				ref={ref}
			/>
			{error && <p className={styles.error}>{error}</p>}
		</>
	)
})
