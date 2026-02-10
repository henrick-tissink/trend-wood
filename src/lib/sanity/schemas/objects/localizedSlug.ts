import { defineType, defineField } from 'sanity'

export const localizedSlug = defineType({
  name: 'localizedSlug',
  title: 'Localized Slug',
  type: 'object',
  fields: [
    defineField({
      name: 'ro',
      title: 'Romanian Slug',
      type: 'slug',
      options: {
        source: 'title.ro',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'en',
      title: 'English Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'de',
      title: 'German Slug',
      type: 'slug',
      options: {
        source: 'title.de',
        maxLength: 96,
      },
    }),
  ],
})
