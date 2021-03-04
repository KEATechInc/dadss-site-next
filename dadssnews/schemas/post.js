export default {
	name: 'post',
	title: 'News Update',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			description: 'This will be displayed as an H2 at the head of the page.',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			description:
				'The Generate button will auto-populate using the title above. This is recommended.',
			options: {
				source: 'title',
			},
		},
		{
			name: 'category',
			title: 'Update Type',
			type: 'string',
			description:
				'How would you categorize this update? Driven to Protect Initiative, DADSS Update, etc.',
		},
		{
			name: 'published',
			title: 'Publish Date',
			type: 'date',
			description:
				'The date this update will be published. IMPORTANT: Updates are ordered by most recent on the website, so use accurate dates to ensure proper chronology.',
		},
		{
			name: 'preview',
			title: 'Short Description',
			type: 'blockContent',
			description:
				'This is used for update previews and snippets. This can simply be the first paragraph of the update. Keep this on the shorter side.',
		},
		{
			name: 'body',
			title: 'Body',
			type: 'blockContent',
			description: 'All update content goes here. All formatting, hyperlinks, etc. will appear on the site as you see them here. For the time being, keep image use minimal.',
		},
	],
}
