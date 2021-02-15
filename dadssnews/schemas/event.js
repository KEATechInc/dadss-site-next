export default {
    name: 'event',
	title: 'Event',
	type: 'document',
	fields: [
        {
			name: 'title',
			title: 'Title',
			type: 'string',
        },
        {
			name: 'url',
			title: 'URL',
			type: 'url',
        },
        {
			name: 'eventDate',
			title: 'Event date',
			type: 'date',
        },
        {
			name: 'location',
			title: 'Location',
			type: 'string',
        },
    ]
}