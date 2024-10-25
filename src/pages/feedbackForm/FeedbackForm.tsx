import { Feedback } from '../../components/feedback/Feedback'

import styles from './FeedbackForm.module.scss'

export const FeedbackForm = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Форма обратной связи</h1>
			<Feedback />
		</div>
	)
}
