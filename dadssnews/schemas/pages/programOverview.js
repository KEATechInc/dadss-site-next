export default {
  name: 'programOverview',
  title: 'Program Overview',
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
      name: 'sourcesCited',
      type: 'blockContent',
      title: 'Sources Cited',
      description:
        'Cite all sources for any facts and references that might be listed above.',
    },
  ],
}
