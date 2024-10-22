import { Link } from 'react-router-dom'

import styles from './NotFound.module.scss'

export const NotFound = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.oops}>Oops! Page not found</h2>
			<h1 className={styles.code}>404</h1>
			<p>We can't find the page you're looking for.</p>
			<Link to='/'>Go back home</Link>
		</div>
	)
}
