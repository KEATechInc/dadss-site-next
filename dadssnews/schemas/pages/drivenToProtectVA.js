export default {
  name: 'drivenToProtectVA',
  title: 'Driven To Protect VA',
  type: 'document',
  fields: [
    {
      name: 'pageHeader',
      type: 'string',
      title: 'Page Header',
      description: 'Header to appear at the start of the page.',
    },
    {
      name: 'introContent',
      type: 'blockContent',
      title: 'Intro Content',
      description: 'Content to appear first below the intro header.',
    },
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Section Builder',
      description:
        'This can be used to add as many generic content sections as needed, in any order.',
      of: [{ type: 'contentSection' }],
    },
    {
      name: 'sidebarBuilder',
      type: 'array',
      title: 'Sidebar Section Builder',
      description: 'Add as many sidebar content sections as needed.',
      of: [{ type: 'contentSection' }],
    },
  ],
}
