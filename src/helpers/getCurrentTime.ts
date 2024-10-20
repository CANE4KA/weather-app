export const getCurrentTime = (time: string) => {
	const [hours, min] = time.split(':')
	const [minutes, ampm] = min.split(' ')

	let formattedHours: string

	if (ampm === 'PM' && hours !== '12') {
		formattedHours = (parseInt(hours) + 12).toString().padStart(2, '0')
	} else if (ampm === 'AM' && hours === '12') {
		formattedHours = '00'.padStart(2, '0')
	} else {
		formattedHours = hours.padStart(2, '0')
	}

	return `${formattedHours}:${minutes}`
}
