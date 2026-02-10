import { defineType, defineField } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'localizedText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'projectDescription',
      title: 'Project Description',
      type: 'localizedString',
      description: 'Brief description of the project (e.g., "Kitchen renovation")',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      description: 'Show this testimonial on the homepage',
    }),
  ],
  preview: {
    select: {
      author: 'author',
      quote: 'quote.ro',
      featured: 'featured',
    },
    prepare({ author, quote, featured }) {
      return {
        title: author || 'Anonymous',
        subtitle: featured ? `Featured: ${quote?.substring(0, 50)}...` : quote?.substring(0, 60),
      }
    },
  },
})
