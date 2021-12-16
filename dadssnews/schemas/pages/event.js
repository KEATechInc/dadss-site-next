export default {
  name: 'event',
  title: 'Events',
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
      description:
        'Add a link relating to the event. This will be merged with the title above. If none is given, the title will not be clickable.',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
    {
      name: 'eventDate',
      title: 'Event date',
      type: 'date',
      description: 'The date of this event.',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description:
        'Where is this event taking place? For consistency, use City, State format. If event is digital, enter Online.',
    },
  ],
}
