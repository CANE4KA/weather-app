import { Outlet } from 'react-router-dom'

import { Header } from '..//header/Header'
import { LinkToFeedbackForm } from '../linkToFeedbackForm/LinkToFeedbackForm'

export const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<LinkToFeedbackForm />
		</>
	)
}
