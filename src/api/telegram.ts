export const sendMessage = async (message: string) => {
	const BASE_URL = import.meta.env.VITE_APP_BASE_TELEGRAM_URL
	const CHAT_ID = import.meta.env.VITE_APP_CHAT_ID

	const url = `${BASE_URL}sendMessage?chat_id=${CHAT_ID}&text=${message}`

	await fetch(url)
}
