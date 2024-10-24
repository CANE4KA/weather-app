import { GoQuestion } from 'react-icons/go'
import { Link } from 'react-router-dom'

import styles from './LinkToFeedBackForm.module.scss'

export const LinkToFeedbackForm = () => {
	return (
		<Link className={styles.question} to='/weather-app/feedback-form'>
			<GoQuestion fontSize={40} />
		</Link>
	)
}
