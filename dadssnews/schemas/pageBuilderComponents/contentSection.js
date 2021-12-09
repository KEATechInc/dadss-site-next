export default {
  name: 'contentSection',
  title: 'Content Section',
  type: 'object',
  fields: [
    {
      name: 'sectionHeader',
      title: 'Section Header',
      type: 'string',
      description: 'Header for this section',
    },
    {
      name: 'sectionImage',
      title: 'Section Image',
      type: 'image',
      description:
        'This image will appear before the section content. Works best with a transparent .PNG, .SVG, etc.',
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
      name: 'sectionBody',
      title: 'Section Body Content',
      type: 'blockContent',
      description: 'Body content for this section.',
    },
    {
      name: 'ctaUrl',
      title: 'CTA URL',
      type: 'url',
      description:
        'URL to be placed within CTA button below content. If left blank, a button will not appear.',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
    {
      name: 'ctaCaption',
      title: 'CTA Caption',
      type: 'string',
      description: 'CTA language to appear on button.',
    },
  ],
}
