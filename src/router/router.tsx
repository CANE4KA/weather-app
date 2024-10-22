import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '../components/layout/Layout'

import { FavoritesPage } from '../pages/favorites/FavoritesPage'
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
				errorElement: <NotFound />,
				element: <HomePage />
			},
			{
				path: '/weather-app/weather',
				errorElement: <NotFound />,
				element: <WeatherPage />
			},
			{
				path: '/weather-app/favorites',
				errorElement: <NotFound />,
				element: <FavoritesPage />
			}
		]
	},
	{
		path: '*',
		element: <NotFound />
	}
])