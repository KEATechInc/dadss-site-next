export default {
  name: 'resources',
  title: 'Resources',
  type: 'document',
  fields: [
    {
      name: 'dadssResources',
      title: 'DADSS Resources',
      type: 'blockContent',
      description: 'Resource information for the DADSS program.',
    },
    {
      name: 'dtpVaResourcesHeader',
      title: 'Driven To Protect VA Resources Header',
      type: 'string',
      description: 'Header for the Driven To Protect resources section.'
    },
    {
      name: 'dtpVaResources',
      title: 'Driven To Protect VA Resources',
      type: 'blockContent',
      description: 'Resource information for the Driven To Protect program.',
    },
  ],
}
