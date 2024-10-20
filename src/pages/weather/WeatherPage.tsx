import { useLocation } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import { SampleArrow } from '../../components/sampleArrow/SampleArrow'
import { WeatherCard } from '../../components/weatherCard/WeatherCard'

import styles from './WeatherPage.module.scss'

import { IWeather } from '../../models/IWeather'

export const WeatherPage = () => {
	const { state } = useLocation()

	var settings = {
		dots: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleArrow color='red' />,
		prevArrow: <SampleArrow color='red' />
	}

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				Погода на 7 дней. {state.data.location.name}
			</h1>
			<div className={styles.slider}>
				<Slider {...settings}>
					{state.data.forecast.forecastday.map((day: IWeather) => {
						return (
							<WeatherCard
								key={day.date}
								data={day}
								city={state.data.location.name}
							/>
						)
					})}
				</Slider>
			</div>
		</div>
	)
}
