import { defineType, defineField } from 'sanity'

export const pageContent = defineType({
  name: 'pageContent',
  title: 'Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'page',
      title: 'Page',
      type: 'string',
      options: {
        list: [
          { title: 'Home', value: 'home' },
          { title: 'About', value: 'about' },
          { title: 'Services', value: 'services' },
          { title: 'Portfolio', value: 'portfolio' },
          { title: 'Contact', value: 'contact' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Meta Title',
          type: 'localizedString',
        }),
        defineField({
          name: 'description',
          title: 'Meta Description',
          type: 'localizedText',
        }),
      ],
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'localizedString',
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'localizedText',
        }),
        defineField({
          name: 'image',
          title: 'Background Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
    defineField({
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'textSection',
          title: 'Text Section',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'localizedString',
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'localizedRichText',
            }),
          ],
          preview: {
            select: {
              title: 'title.ro',
            },
            prepare({ title }) {
              return {
                title: title || 'Text Section',
                subtitle: 'Text Section',
              }
            },
          },
        },
        {
          type: 'object',
          name: 'imageSection',
          title: 'Image Section',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'localizedString',
            }),
          ],
          preview: {
            select: {
              media: 'image',
              caption: 'caption.ro',
            },
            prepare({ media, caption }) {
              return {
                title: caption || 'Image Section',
                subtitle: 'Image Section',
                media,
              }
            },
          },
        },
        {
          type: 'object',
          name: 'valueSection',
          title: 'Value/Feature',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'localizedString',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'localizedText',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'title.ro',
            },
            prepare({ title }) {
              return {
                title: title || 'Value Section',
                subtitle: 'Value/Feature',
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      page: 'page',
    },
    prepare({ page }) {
      const pageNames: Record<string, string> = {
        home: 'Home Page',
        about: 'About Page',
        services: 'Services Page',
        portfolio: 'Portfolio Page',
        contact: 'Contact Page',
      }
      return {
        title: pageNames[page] || page,
      }
    },
  },
})
