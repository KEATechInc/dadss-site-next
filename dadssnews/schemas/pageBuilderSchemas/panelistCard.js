export default {
	name: 'panelistCard',
	title: 'Panelist Card',
	type: 'object',
	fields: [
		{
			name: 'panelistPortrait',
			type: 'image',
			title: 'Panelist Portrait',
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alternative text',
					description: 'Important for SEO and accessiblity.',
					validation: (Rule) =>
						Rule.error('This field is required.').required(),
					options: {
						isHighlighted: true,
					},
				},
			],
		},
        {
            name: 'panelistDescription',
            title: 'Panelist Description',
			description: 'Who is this panelist? What is their title and what are their credentials?',
            type: 'blockContent',
        }
	],
}
