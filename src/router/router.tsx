import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '../components/layout/Layout'

import { FavoritesPage } from '../pages/favorites/FavoritesPage'
import { HomePage } from '../pages/home/HomePage'
import { WeatherPage } from '../pages/weather/WeatherPage'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <div>Error 404</div>,
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
		element: <div>Error 404</div>
	}
])
