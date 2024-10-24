import { FaGithub, FaTelegram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import styles from './Footer.module.scss'

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Link to='https://github.com/CANE4KA' aria-label='github' target='_blank'>
				<FaGithub fontSize={35} />
			</Link>
			<div className={styles.footer__text}>
				<span className={styles.made}>Made with love</span>
				<span className={styles.by}>by CANE4KA</span>
			</div>
			<Link to='https://t.me/HUANANZHl' aria-label='telegram' target='_blank'>
				<FaTelegram fontSize={35} />
			</Link>
		</footer>
	)
}
