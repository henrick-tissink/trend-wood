'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/lib/sanity/schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'trend-wood-studio',
  title: 'Trend Wood CMS',

  projectId,
  dataset,

  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Site Settings (singleton)
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.divider(),
            // Page Content
            S.listItem()
              .title('Page Content')
              .child(
                S.documentTypeList('pageContent')
                  .title('Page Content')
              ),
            S.divider(),
            // Content Types
            S.documentTypeListItem('project').title('Projects'),
            S.documentTypeListItem('service').title('Services'),
            S.documentTypeListItem('processStep').title('Process Steps'),
            S.documentTypeListItem('testimonial').title('Testimonials'),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
