import { defineType, defineField } from 'sanity'

export const processStep = defineType({
  name: 'processStep',
  title: 'Process Step',
  type: 'document',
  fields: [
    defineField({
      name: 'step',
      title: 'Step Number',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localizedText',
    }),
  ],
  orderings: [
    {
      title: 'Step Number',
      name: 'stepAsc',
      by: [{ field: 'step', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title.ro',
      step: 'step',
    },
    prepare({ title, step }) {
      return {
        title: `${step}. ${title || 'Untitled'}`,
      }
    },
  },
})
