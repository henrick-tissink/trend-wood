// Object types
import { localizedString } from './objects/localizedString'
import { localizedText } from './objects/localizedText'
import { localizedSlug } from './objects/localizedSlug'
import { localizedRichText } from './objects/localizedRichText'

// Document types
import { project } from './project'
import { service } from './service'
import { processStep } from './processStep'
import { testimonial } from './testimonial'
import { siteSettings } from './siteSettings'
import { pageContent } from './pageContent'

export const schemaTypes = [
  // Object types (must come first)
  localizedString,
  localizedText,
  localizedSlug,
  localizedRichText,
  // Document types
  project,
  service,
  processStep,
  testimonial,
  siteSettings,
  pageContent,
]
