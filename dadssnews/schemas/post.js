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
		// {
		//   name: 'author',
		//   title: 'Author',
		//   type: 'reference',
		//   to: {type: 'author'},
		// },
		// {
		//   name: 'mainImage',
		//   title: 'Main image',
		//   type: 'image',
		//   options: {
		//     hotspot: true,
		//   },
		// },
		// {
		//   name: 'categories',
		//   title: 'Categories',
		//   type: 'array',
		//   of: [{type: 'reference', to: {type: 'category'}}],
		// },
		{
			name: 'published',
			title: 'Published on:',
			type: 'date',
		},
		{
			name: 'preview',
			title: 'Preview',
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

	preview: {
		select: {
			title: 'title',
			author: 'author.name',
			media: 'mainImage',
		},
		prepare(selection) {
			const { author } = selection
			return Object.assign({}, selection, {
				subtitle: author && `by ${author}`,
			})
		},
	},
}
