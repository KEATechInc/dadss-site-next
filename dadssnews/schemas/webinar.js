export default {
  name: 'webinar',
  title: 'Webinars',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'The Generate button will auto-populate using the title above. You can also make a custom URL',
      options: {
        source: 'title',
      },
    },
    {
      name: 'details',
      title: 'Details',
      type: 'blockContent',
      description:
        'This will be the introductory information at the start of the page. Descrine what this webinar is about and why page visitors should register.',
    },
    {
      name: 'embedZone',
      title: 'Google Forms Embed',
      type: 'iframe',
      description:
        'Use this field to embed a Google Form. Insert only the source URL (can be found on the Send Form hyperlink tab). Positioning will be handled on the frontend.',
    },
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Panelist Builder',
      of: [{ type: 'panelistCard' }],
    },
  ],
}
