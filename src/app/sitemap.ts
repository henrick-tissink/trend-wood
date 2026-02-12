import { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n/config'

const BASE_URL = 'https://trendwoodconsult.ro'

// Page paths per locale
const localizedPaths = {
  home: {
    ro: '',
    en: '',
    de: '',
  },
  about: {
    ro: '/despre-noi',
    en: '/about',
    de: '/uber-uns',
  },
  services: {
    ro: '/servicii',
    en: '/services',
    de: '/dienstleistungen',
  },
  portfolio: {
    ro: '/portofoliu',
    en: '/portfolio',
    de: '/portfolio',
  },
  contact: {
    ro: '/contact',
    en: '/contact',
    de: '/kontakt',
  },
} as const

// Portfolio project slugs
const projectSlugs = ['casa-utu', 'scara-emil', 'masa-stejar', 'balcon-lemn', 'scara-casa-a']

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = []

  // Add main pages for each locale
  for (const locale of locales) {
    // Home page
    sitemapEntries.push({
      url: `${BASE_URL}/${locale}${localizedPaths.home[locale]}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    })

    // About page
    sitemapEntries.push({
      url: `${BASE_URL}/${locale}${localizedPaths.about[locale]}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })

    // Services page
    sitemapEntries.push({
      url: `${BASE_URL}/${locale}${localizedPaths.services[locale]}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })

    // Portfolio page
    sitemapEntries.push({
      url: `${BASE_URL}/${locale}${localizedPaths.portfolio[locale]}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    })

    // Contact page
    sitemapEntries.push({
      url: `${BASE_URL}/${locale}${localizedPaths.contact[locale]}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })

    // Portfolio detail pages
    for (const slug of projectSlugs) {
      sitemapEntries.push({
        url: `${BASE_URL}/${locale}${localizedPaths.portfolio[locale]}/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    }
  }

  return sitemapEntries
}
