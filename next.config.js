module.exports = {
	async redirects() {
		return [
			{
				source: '/driventoprotect',
				destination: '/driven-to-protect',
				permanent: true,
			},
			{
				source: '/maryland',
				destination: '/driven-to-protect/maryland',
				permanent: true,
			},
			{
				source: '/virginia',
				destination: '/driven-to-protect/virginia',
				permanent: true,
			},
		]
	},
}
