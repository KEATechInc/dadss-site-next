export default {
  name: 'faq',
  title: 'FAQs',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      description: 'The frequently asked question to be answered below.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'blockContent',
      description: 'The answer to the question posed above.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'position',
      title: 'Order Number',
      type: 'number',
      description:
        'IMPORTANT: This number is used to order all FAQs displayed on the website. Priority descends from the number 1 (meaning the FAQ marked with the number 1 will be shown first and so on).',
      validation: (Rule) => Rule.required().min(1),
    },
  ],
}
