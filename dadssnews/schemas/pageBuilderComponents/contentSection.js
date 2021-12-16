export default {
  name: 'contentSection',
  title: 'Content Section',
  type: 'object',
  fields: [
    {
      name: 'sectionImage',
      title: 'Section Image',
      type: 'image',
      description:
        'This image will appear above the section header. Works best with a transparent .PNG, .SVG, etc.',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
          validation: (Rule) =>
            Rule.error('This field is required.').required(),
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: 'sectionHeader',
      title: 'Section Header',
      type: 'string',
      description: 'Header for this section',
    },
    {
      name: 'sectionBody',
      title: 'Section Body Content',
      type: 'blockContent',
      description: 'Body content for this section.',
    },
    {
      name: 'ctaUrl',
      title: 'CTA URL',
      type: 'object',
      fields: [
        {
          name: 'url',
          type: 'url',
          title: 'URL',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https', 'mailto', 'tel'],
            }),
          hidden: ({ parent, value }) => !value && parent?.upload,
        },
        {
          name: 'upload',
          type: 'file',
          title: 'File Upload',
          hidden: ({ parent, value }) => !value && parent?.url,
        },
      ],
      description:
        'Either an URL or file to be placed within CTA button below content. If left blank, a button will not appear.',
    },
    {
      name: 'ctaCaption',
      title: 'CTA Caption',
      type: 'string',
      description: 'CTA language to appear on button.',
    },
  ],
}
