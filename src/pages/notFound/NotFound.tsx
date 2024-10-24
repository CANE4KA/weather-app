import { Link } from 'react-router-dom'

import styles from './NotFound.module.scss'

export const NotFound = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.oops}>Уупс! Страница не найдена</h2>
			<h1 className={styles.code}>404</h1>
			<p>Мы не можем найти страницу, которую вы ищете.</p>
			<Link to='/weather-app'>Вернуться домой</Link>
		</div>
	)
}
