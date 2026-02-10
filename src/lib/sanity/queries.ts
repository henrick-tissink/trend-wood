import { groq } from 'next-sanity'
import { client } from './client'
import type { Locale } from '@/lib/i18n/config'

// Site Settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    companyName,
    "tagline": tagline[$locale],
    "taglineFallback": coalesce(tagline[$locale], tagline.ro),
    "description": description[$locale],
    "descriptionFallback": coalesce(description[$locale], description.ro),
    phones,
    email,
    whatsapp,
    location {
      "address": address[$locale],
      "addressFallback": coalesce(address[$locale], address.ro),
      city,
      "country": country[$locale],
      googleMapsUrl
    },
    socialMedia,
    navigation[] {
      "label": label[$locale],
      "labelFallback": coalesce(label[$locale], label.ro),
      href
    },
    logo
  }
`

export async function getSiteSettings(locale: Locale) {
  return client.fetch(siteSettingsQuery, { locale })
}

// Projects
export const projectsQuery = groq`
  *[_type == "project"] | order(order asc) {
    _id,
    "title": title[$locale],
    "titleFallback": coalesce(title[$locale], title.ro),
    "slug": slug[$locale].current,
    "slugFallback": coalesce(slug[$locale].current, slug.ro.current),
    "description": description[$locale],
    "descriptionFallback": coalesce(description[$locale], description.ro),
    "woodType": woodType[$locale],
    "woodTypeFallback": coalesce(woodType[$locale], woodType.ro),
    "category": category[$locale],
    "categoryFallback": coalesce(category[$locale], category.ro),
    location,
    year,
    mainImage {
      asset->,
      "alt": alt[$locale],
      "altFallback": coalesce(alt[$locale], alt.ro)
    },
    featured,
    order
  }
`

export async function getProjects(locale: Locale) {
  return client.fetch(projectsQuery, { locale })
}

export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(order asc) [0...4] {
    _id,
    "title": title[$locale],
    "titleFallback": coalesce(title[$locale], title.ro),
    "slug": slug[$locale].current,
    "slugFallback": coalesce(slug[$locale].current, slug.ro.current),
    "description": description[$locale],
    "category": category[$locale],
    mainImage {
      asset->,
      "alt": alt[$locale]
    }
  }
`

export async function getFeaturedProjects(locale: Locale) {
  return client.fetch(featuredProjectsQuery, { locale })
}

export const projectBySlugQuery = groq`
  *[_type == "project" && (
    slug.ro.current == $slug ||
    slug.en.current == $slug ||
    slug.de.current == $slug
  )][0] {
    _id,
    "title": title[$locale],
    "titleFallback": coalesce(title[$locale], title.ro),
    "slug": slug[$locale].current,
    "slugFallback": coalesce(slug[$locale].current, slug.ro.current),
    "slugs": {
      "ro": slug.ro.current,
      "en": slug.en.current,
      "de": slug.de.current
    },
    "description": description[$locale],
    "descriptionFallback": coalesce(description[$locale], description.ro),
    "woodType": woodType[$locale],
    "woodTypeFallback": coalesce(woodType[$locale], woodType.ro),
    "category": category[$locale],
    "categoryFallback": coalesce(category[$locale], category.ro),
    location,
    year,
    mainImage {
      asset->,
      "alt": alt[$locale]
    },
    images[] {
      asset->,
      "alt": alt[$locale]
    },
    details[] {
      "label": label[$locale],
      "labelFallback": coalesce(label[$locale], label.ro),
      "value": value[$locale],
      "valueFallback": coalesce(value[$locale], value.ro)
    }
  }
`

export async function getProjectBySlug(slug: string, locale: Locale) {
  return client.fetch(projectBySlugQuery, { slug, locale })
}

export const allProjectSlugsQuery = groq`
  *[_type == "project"] {
    "ro": slug.ro.current,
    "en": slug.en.current,
    "de": slug.de.current
  }
`

export async function getAllProjectSlugs() {
  return client.fetch(allProjectSlugsQuery)
}

// Services
export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    "title": title[$locale],
    "titleFallback": coalesce(title[$locale], title.ro),
    "description": description[$locale],
    "descriptionFallback": coalesce(description[$locale], description.ro),
    icon,
    order
  }
`

export async function getServices(locale: Locale) {
  return client.fetch(servicesQuery, { locale })
}

// Process Steps
export const processStepsQuery = groq`
  *[_type == "processStep"] | order(step asc) {
    _id,
    step,
    "title": title[$locale],
    "titleFallback": coalesce(title[$locale], title.ro),
    "description": description[$locale],
    "descriptionFallback": coalesce(description[$locale], description.ro)
  }
`

export async function getProcessSteps(locale: Locale) {
  return client.fetch(processStepsQuery, { locale })
}

// Testimonials
export const testimonialsQuery = groq`
  *[_type == "testimonial"] {
    _id,
    "quote": quote[$locale],
    "quoteFallback": coalesce(quote[$locale], quote.ro),
    author,
    "projectDescription": projectDescription[$locale],
    "projectDescriptionFallback": coalesce(projectDescription[$locale], projectDescription.ro),
    featured
  }
`

export async function getTestimonials(locale: Locale) {
  return client.fetch(testimonialsQuery, { locale })
}

export const featuredTestimonialQuery = groq`
  *[_type == "testimonial" && featured == true][0] {
    _id,
    "quote": quote[$locale],
    "quoteFallback": coalesce(quote[$locale], quote.ro),
    author,
    "projectDescription": projectDescription[$locale]
  }
`

export async function getFeaturedTestimonial(locale: Locale) {
  return client.fetch(featuredTestimonialQuery, { locale })
}

// Page Content
export const pageContentQuery = groq`
  *[_type == "pageContent" && page == $page][0] {
    page,
    seo {
      "title": title[$locale],
      "titleFallback": coalesce(title[$locale], title.ro),
      "description": description[$locale],
      "descriptionFallback": coalesce(description[$locale], description.ro)
    },
    hero {
      "title": title[$locale],
      "titleFallback": coalesce(title[$locale], title.ro),
      "subtitle": subtitle[$locale],
      "subtitleFallback": coalesce(subtitle[$locale], subtitle.ro),
      image {
        asset->
      }
    },
    sections[] {
      _type,
      _key,
      "title": title[$locale],
      "titleFallback": coalesce(title[$locale], title.ro),
      "content": content[$locale],
      "contentFallback": coalesce(content[$locale], content.ro),
      "description": description[$locale],
      "descriptionFallback": coalesce(description[$locale], description.ro),
      "caption": caption[$locale],
      icon,
      image {
        asset->
      }
    }
  }
`

export async function getPageContent(page: string, locale: Locale) {
  return client.fetch(pageContentQuery, { page, locale })
}
