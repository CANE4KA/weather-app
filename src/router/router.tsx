import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '../components/layout/Layout'

import { FavoritesPage } from '../pages/favorites/FavoritesPage'
import { HomePage } from '../pages/home/HomePage'
import { NotFound } from '../pages/notFound/NotFound'
import { WeatherPage } from '../pages/weather/WeatherPage'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <NotFound />,
		children: [
			{
				path: '/',
				element: <HomePage />
			},
			{
				path: '/weather',
				element: <WeatherPage />
			},
			{
				path: '/favorites',
				element: <FavoritesPage />
			}
		]
	},
	{
		path: '*',
		element: <NotFound />
	}
])
