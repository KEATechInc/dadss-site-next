export default {
	name: 'post',
	title: 'News Update',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},
		{
			name: 'category',
			title: 'Category',
			type: 'string',
		},
		{
			name: 'published',
			title: 'Published on:',
			type: 'date',
		},
		{
			name: 'preview',
			title: 'Short description',
			type: 'blockContent',
			options: {
				maxLength: 250,
			},
		},
		{
			name: 'body',
			title: 'Body',
			type: 'blockContent',
		},
	],
}
