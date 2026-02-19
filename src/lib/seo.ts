import type { Metadata } from 'next'
import { type Locale, pathnames, type AppPathname } from '@/lib/i18n/config'

const BASE_URL = 'https://trendwood.ro'

function getLocalePrefix(locale: Locale): string {
  return locale === 'ro' ? '' : `/${locale}`
}

function getLocalizedPath(path: AppPathname, locale: Locale): string {
  const pathConfig = pathnames[path]
  if (typeof pathConfig === 'string') return pathConfig
  return pathConfig[locale]
}

export function generatePageAlternates(
  canonicalPath: AppPathname,
  currentLocale: Locale
): Metadata['alternates'] {
  const roPath = getLocalizedPath(canonicalPath, 'ro')
  const enPath = getLocalizedPath(canonicalPath, 'en')
  const dePath = getLocalizedPath(canonicalPath, 'de')
  const currentPath = getLocalizedPath(canonicalPath, currentLocale)

  return {
    canonical: `${BASE_URL}${getLocalePrefix(currentLocale)}${currentPath}`,
    languages: {
      'ro': `${BASE_URL}${roPath}`,
      'en': `${BASE_URL}/en${enPath}`,
      'de': `${BASE_URL}/de${dePath}`,
      'x-default': `${BASE_URL}${roPath}`,
    },
  }
}

export function generatePortfolioDetailAlternates(
  slug: string,
  currentLocale: Locale
): Metadata['alternates'] {
  const portfolioPaths = {
    ro: '/portofoliu',
    en: '/portfolio',
    de: '/portfolio',
  }

  return {
    canonical: `${BASE_URL}${getLocalePrefix(currentLocale)}${portfolioPaths[currentLocale]}/${slug}`,
    languages: {
      'ro': `${BASE_URL}${portfolioPaths.ro}/${slug}`,
      'en': `${BASE_URL}/en${portfolioPaths.en}/${slug}`,
      'de': `${BASE_URL}/de${portfolioPaths.de}/${slug}`,
      'x-default': `${BASE_URL}${portfolioPaths.ro}/${slug}`,
    },
  }
}

export function generateOpenGraph(
  title: string,
  description: string,
  locale: Locale,
  path: string
): Metadata['openGraph'] {
  return {
    title,
    description,
    locale: locale === 'ro' ? 'ro_RO' : locale === 'en' ? 'en_US' : 'de_DE',
    alternateLocale: ['ro_RO', 'en_US', 'de_DE'].filter(
      l => l !== (locale === 'ro' ? 'ro_RO' : locale === 'en' ? 'en_US' : 'de_DE')
    ),
    type: 'website',
    siteName: 'Trend Wood Consult',
    url: `${BASE_URL}${getLocalePrefix(locale)}${path}`,
  }
}
