export default {
	name: 'webinar',
	title: 'Webinar',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			description:
				'Enter the webinar title here. This will be the H1 for the page.',
		},
		{
			name: 'details',
			title: 'Details',
			type: 'blockContent',
			description:
				'This will be the introductory information at the start of the page. Descrine what this webinar is about and why page visitors should register.',
		},
		{
			name: 'callToAction',
			title: 'Call To Action',
			type: 'document',
			description:
				'Use this block to grab attention and encourage registrations.',
			fields: [
				{
					name: 'caption',
					title: 'CTA Caption',
					type: 'text',
					rows: 1,
					description: 'e.g. Register now!',
				},
				{
					name: 'webinarDate',
					title: 'Webinar Date',
					type: 'date',
					options: {
						dateFormat: 'dddd, MMMM Do YYYY',
					},
				},
				{
					name: 'webinarTime',
					title: 'Webinar Time',
					type: 'text',
					rows: 1,
					description:
						'Enter a time range including a time zone (e.g. 1:00pm-2:00pm EST). This information will be displayed as is.',
				},
				{
					name: 'howToRegister',
					title: 'How To Register',
					type: 'blockContent',
					rows: 3,
					description:
						'Give page visitors action items here. Add registration page hyperlinks and any email contacts. Keep this short.',
				},
			],
		},
		{
			name: 'pageBuilder',
			type: 'array',
			title: 'Panelist Card Builder',
			description: 'Use this tool to add as many panelists as needed.',
			of: [{ type: 'panelistCard' }],
		},
	],
}
