export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    //   hero section
    {
      name: 'heroVideoUrl',
      title: 'Hero Video URL',
      type: 'url',
      description: 'Add a link to a Youtube hosted video for the hero section',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
    // announcement banner
    {
      name: 'announcementHeader',
      title: 'Announcement Header',
      type: 'string',
      description: 'Header for the announcement banner',
    },
    {
      name: 'announcementBody',
      title: 'Announcement Body',
      type: 'blockContent',
      description: 'Body content for the announcement banner.',
    },
    {
      name: 'ctaUrl',
      title: 'Announcement CTA URL',
      type: 'url',
      description:
        'Add a Call To Action button by adding a URL related to the above body content.',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
    // quotation
    {
      name: 'quotation',
      title: 'Quotation',
      type: 'string',
      description:
        'A quotation to appear just before any homepage content sections.',
    },
    // section one
    {
      name: 'sectionOneHeader',
      title: 'Section One Header',
      type: 'string',
      description:
        'Header for the first section to show below the hero section.',
    },
    {
      name: 'sectionOneImage',
      title: 'Section One Image',
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
      name: 'sectionOneBody',
      title: 'Section One Body Content',
      type: 'blockContent',
      description: 'Body content for this section.',
    },
    {
      name: 'sectionOneCtaUrl',
      title: 'Section One CTA URL',
      type: 'url',
      description:
        'URL to be placed within CTA button below content. If left blank, a button will not appear.',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
    {
      name: 'sectionOneCtaCaption',
      title: 'Section One CTA Caption',
      type: 'string',
      description: 'CTA language to appear on button.',
    },
    // section two
    {
      name: 'sectionTwoHeader',
      title: 'Section Two Header',
      type: 'string',
      description:
        'Header for the second section to show just below the first section.',
    },
    {
      name: 'sectionTwoImage',
      title: 'Section Two Image',
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
      name: 'sectionTwoBody',
      title: 'Section Two Body Content',
      type: 'blockContent',
      description: 'Body content for this section.',
    },
    {
      name: 'sectionTwoCtaUrl',
      title: 'Section Two CTA URL',
      type: 'url',
      description:
        'URL to be placed within CTA button below content. If left blank, a button will not appear.',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
    {
      name: 'sectionTwoCtaCaption',
      title: 'Section Two CTA Caption',
      type: 'string',
      description: 'CTA language to appear on button.',
    },
    // horizontal callout section
    {
      name: 'horizontalSectionHeader',
      title: 'Horizontal Section Header',
      type: 'string',
      description: 'Header for the horizontal section (section three).',
    },
    {
      name: 'subHeaderCopy',
      title: 'Subheader Copy',
      type: 'blockContent',
      description: 'Copy to go below horizontal section header.',
    },
    {
      name: 'horizontalSubSectionHeaderOne',
      title: 'Horizontal Subsection Header One',
      type: 'string',
      description: 'Header for first subsection.',
    },
    {
      name: 'horizontalSubSectionOneBody',
      title: 'Subsection One Body Copy',
      type: 'blockContent',
      description: 'Copy to go in horizontal subsection one.',
    },
    {
      name: 'horizontalSubSectionOneCtaUrl',
      title: 'Horizontal Section One CTA URL',
      type: 'url',
      description:
        'URL to be placed within CTA button below content. If left blank, a button will not appear.',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
    {
      name: 'horizontalSubSectionOneCtaCaption',
      title: 'Horizontal Section One CTA Caption',
      type: 'string',
      description: 'CTA language to appear on button.',
    },
    {
      name: 'horizontalSubSectionHeaderTwo',
      title: 'Horizontal Subsection Header Two',
      type: 'string',
      description: 'Header for second subsection.',
    },
    {
      name: 'horizontalSubSectionTwoBody',
      title: 'Subsection Two Body Copy',
      type: 'blockContent',
      description: 'Copy to go in horizontal subsection two.',
    },
    {
      name: 'horizontalSubSectionTwoCtaUrl',
      title: 'Horizontal Section Two CTA URL',
      type: 'url',
      description:
        'URL to be placed within CTA button below content. If left blank, a button will not appear.',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
    {
      name: 'horizontalSubSectionTwoCtaCaption',
      title: 'Horizontal Section Two CTA Caption',
      type: 'string',
      description: 'CTA language to appear on button.',
    },
    // content builder
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Section Builder',
      description:
        'This can be used to add as many generic content sections in any order at the bottom of the homepage',
      of: [{ type: 'contentSection' }],
    },
  ],
}
