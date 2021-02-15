export default {
    name: 'publication',
	title: 'Publication',
	type: 'document',
	fields: [
        {
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'subtitle',
			title: 'Subtitle',
			type: 'string',
        },
        {
			name: 'fileUpload',
			title: 'File upload',
			type: 'file',
        },
        {
			name: 'paperNumber',
			title: 'Paper number',
			type: 'string',
        },
        { 
			name: 'publishDate',
			title: 'Publish date',
			type: 'date',
        },
        {
			name: 'description',
			title: 'Description',
			type: 'blockContent',
		},
    ]
}