export default {
  name: 'drivenToProtectLanding',
  title: 'Driven To Protect Landing Page',
  type: 'document',
  fields: [
    {
      name: 'pageHeader',
      type: 'string',
      title: 'Page Header',
      description: 'Header for the DTP landing page.',
    },
    {
      name: 'pageContent',
      type: 'blockContent',
      title: 'Page Content',
      description: 'Body content for the DTP landing page.',
    },
    {
      name: 'vaCaption',
      type: 'string',
      title: 'VA Directory Caption',
      description: 'Caption for the VA directory object.',
    },
    {
      name: 'mdCaption',
      type: 'string',
      title: 'MD Directory Caption',
      description: 'Caption for the MD directory object.',
    },
  ],
}
