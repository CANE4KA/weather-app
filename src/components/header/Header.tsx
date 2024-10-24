import { Link } from 'react-router-dom'

import styles from './Header.module.scss'

export const Header = () => {
	return (
		<header className={styles.header}>
			<Link
				to='https://github.com/CANE4KA'
				target='_blank'
				className={styles.header__link}
			>
				Автор
			</Link>
			{/* TODO: Добавить картинку */}
			<Link
				to='/weather-app/'
				className={styles.header__logo}
				aria-label='logo'
			></Link>
			<Link to='/weather-app/favorites' className={styles.header__link}>
				Избранное
			</Link>
		</header>
	)
}
