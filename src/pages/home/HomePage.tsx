import { Form } from '../../components/form/Form'

import styles from './HomePage.module.scss'

export const HomePage = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Weather App</h1>
			<Form />
		</div>
	)
}
