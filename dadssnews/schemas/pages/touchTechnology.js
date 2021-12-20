export default {
  name: 'touchTechnology',
  title: 'Touch Technology',
  type: 'document',
  fields: [
    // content builder
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Section Builder',
      description:
        'This can be used to add as many generic content sections as needed, in any order.',
      of: [{ type: 'contentSection' }],
    },
    {
      name: 'calloutBoxHeader',
      type: 'string',
      title: 'Callout Box Header',
      description: 'Header for a callout box at the bottom of the page.',
    },
    {
      name: 'calloutBoxContent',
      type: 'blockContent',
      title: 'Callout Box Contaner',
      description: 'Content for a callout box at the bottom of the page.',
    },
  ],
}
