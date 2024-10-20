export const getCurrentDay = (day: string) => {
	const currentDay = new Date(day)

	return currentDay.getDate() === new Date().getDate()
		? 'Сегодня'
		: currentDay.getDate() === new Date().getDate() + 1
			? 'Завтра'
			: `${currentDay.getDate()} ${currentDay.toLocaleString('ru-RU', { month: 'short' })}`
}
