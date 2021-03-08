export const formatDate = (date) => {
	if (date) {
		const monthNames = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		]
	
		let year = date.slice(0, 4)
		let month = date.slice(5, 7)
		let day = date.slice(8, 10)
	
		let newDate = `${monthNames[parseInt(month) - 1]} ${day}, ${year}`
	
		return newDate
	}

}

export const getYear = (date) => {
	if (date) {
		let year = date.slice(0, 4)
		return year
	}
}
