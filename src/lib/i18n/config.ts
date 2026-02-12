export const locales = ['ro', 'en', 'de'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'ro'

// Page paths per locale
export const pathnames = {
  '/': '/',
  '/despre-noi': {
    ro: '/despre-noi',
    en: '/about',
    de: '/uber-uns',
  },
  '/servicii': {
    ro: '/servicii',
    en: '/services',
    de: '/dienstleistungen',
  },
  '/portofoliu': {
    ro: '/portofoliu',
    en: '/portfolio',
    de: '/portfolio',
  },
  '/contact': {
    ro: '/contact',
    en: '/contact',
    de: '/kontakt',
  },
} as const

export type Pathnames = typeof pathnames

// Type for valid href values for the next-intl Link component
export type AppPathname = keyof typeof pathnames

// Utility to get the canonical path from a localized path
export function getCanonicalPath(localizedPath: string, locale: Locale): string {
  for (const [canonical, paths] of Object.entries(pathnames)) {
    if (typeof paths === 'string') {
      if (paths === localizedPath) return canonical
    } else {
      if (paths[locale] === localizedPath) return canonical
    }
  }
  return localizedPath
}

// Utility to get the localized path from a canonical path
export function getLocalizedPath(canonicalPath: string, locale: Locale): string {
  const paths = pathnames[canonicalPath as keyof Pathnames]
  if (!paths) return canonicalPath
  if (typeof paths === 'string') return paths
  return paths[locale] || canonicalPath
}

// Get all localized versions of a path
export function getAllLocalizedPaths(canonicalPath: string): Record<Locale, string> {
  const paths = pathnames[canonicalPath as keyof Pathnames]
  if (!paths || typeof paths === 'string') {
    return { ro: canonicalPath, en: canonicalPath, de: canonicalPath }
  }
  return paths as Record<Locale, string>
}
