import { MetadataRoute } from 'next'
import { locales } from '@/lib/i18n/config'

const BASE_URL = 'https://trendwood.ro'

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

// Get locale prefix (Romanian is default, no prefix)
function getLocalePrefix(locale: string): string {
  return locale === 'ro' ? '' : `/${locale}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = []

  // Add main pages for each locale
  for (const locale of locales) {
    const prefix = getLocalePrefix(locale)

    // Home page
    sitemapEntries.push({
      url: `${BASE_URL}${prefix}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
      alternates: {
        languages: {
          ro: `${BASE_URL}/`,
          en: `${BASE_URL}/en/`,
          de: `${BASE_URL}/de/`,
        },
      },
    })

    // About page
    sitemapEntries.push({
      url: `${BASE_URL}${prefix}${localizedPaths.about[locale]}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          ro: `${BASE_URL}${localizedPaths.about.ro}`,
          en: `${BASE_URL}/en${localizedPaths.about.en}`,
          de: `${BASE_URL}/de${localizedPaths.about.de}`,
        },
      },
    })

    // Services page
    sitemapEntries.push({
      url: `${BASE_URL}${prefix}${localizedPaths.services[locale]}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          ro: `${BASE_URL}${localizedPaths.services.ro}`,
          en: `${BASE_URL}/en${localizedPaths.services.en}`,
          de: `${BASE_URL}/de${localizedPaths.services.de}`,
        },
      },
    })

    // Portfolio page
    sitemapEntries.push({
      url: `${BASE_URL}${prefix}${localizedPaths.portfolio[locale]}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          ro: `${BASE_URL}${localizedPaths.portfolio.ro}`,
          en: `${BASE_URL}/en${localizedPaths.portfolio.en}`,
          de: `${BASE_URL}/de${localizedPaths.portfolio.de}`,
        },
      },
    })

    // Contact page
    sitemapEntries.push({
      url: `${BASE_URL}${prefix}${localizedPaths.contact[locale]}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          ro: `${BASE_URL}${localizedPaths.contact.ro}`,
          en: `${BASE_URL}/en${localizedPaths.contact.en}`,
          de: `${BASE_URL}/de${localizedPaths.contact.de}`,
        },
      },
    })

    // Portfolio detail pages
    for (const slug of projectSlugs) {
      sitemapEntries.push({
        url: `${BASE_URL}${prefix}${localizedPaths.portfolio[locale]}/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: {
          languages: {
            ro: `${BASE_URL}${localizedPaths.portfolio.ro}/${slug}`,
            en: `${BASE_URL}/en${localizedPaths.portfolio.en}/${slug}`,
            de: `${BASE_URL}/de${localizedPaths.portfolio.de}/${slug}`,
          },
        },
      })
    }
  }

  return sitemapEntries
}
