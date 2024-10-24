import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '../components/layout/Layout'

import { FavoritesPage } from '../pages/favorites/FavoritesPage'
import { FeedbackForm } from '../pages/feedbackForm/FeedbackForm'
import { HomePage } from '../pages/home/HomePage'
import { NotFound } from '../pages/notFound/NotFound'
import { WeatherPage } from '../pages/weather/WeatherPage'

export const router = createBrowserRouter([
	{
		path: '/weather-app',
		element: <Layout />,
		errorElement: <NotFound />,
		children: [
			{
				path: '/weather-app',
				element: <HomePage />
			},
			{
				path: '/weather-app/weather',
				element: <WeatherPage />
			},
			{
				path: '/weather-app/favorites',
				element: <FavoritesPage />
			},
			{
				path: '/weather-app/feedback-form',
				element: <FeedbackForm />
			}
		]
	},
	{
		path: '*',
		element: <NotFound />
	}
])
