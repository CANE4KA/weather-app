import { Feedback } from '../../components/feedback/Feedback'
import { Footer } from '../../components/footer/Footer'

import styles from './FeedbackForm.module.scss'

export const FeedbackForm = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Форма обратной связи</h1>
			<Feedback />
			<Footer />
		</div>
	)
}
