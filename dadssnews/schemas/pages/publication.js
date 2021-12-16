export default {
  name: 'publication',
  title: 'Publications',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'What is this paper called?',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Why was this paper written? e.g. Report to Congress',
    },
    {
      name: 'fileUpload',
      title: 'File upload',
      type: 'file',
      description: 'If there is a PDF for this paper, upload it here.',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      description:
        'If a PDF was uploaded, do NOT add an url too. Otherwise, add a direct link to the asset here.',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
    {
      name: 'paperNumber',
      title: 'Paper number',
      type: 'string',
      description:
        'If there is a paper number, enter it here. Otherwise, enter N/A for consistency.',
    },
    {
      name: 'publishDate',
      title: 'Publish date',
      type: 'date',
      description:
        'Enter the date of publishing. Publications appear by most recent on the site.',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      description:
        'Explain what this paper will discuss. This could be the introductory paragraph of the paper itself.',
    },
  ],
}
