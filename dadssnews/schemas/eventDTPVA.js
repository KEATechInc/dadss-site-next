export default {
    name: 'eventDTPVA',
	title: 'Driven To Protect VA Event',
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