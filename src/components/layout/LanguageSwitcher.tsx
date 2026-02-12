'use client'

import { usePathname, useRouter } from 'next/navigation'
import { locales, defaultLocale, type Locale, getLocalizedPath, getCanonicalPath } from '@/lib/i18n/config'
import { cn } from '@/lib/utils'

type LanguageSwitcherProps = {
  locale: Locale
  variant?: 'light' | 'dark'
}

const localeLabels: Record<Locale, string> = {
  ro: 'RO',
  en: 'EN',
  de: 'DE',
}

export function LanguageSwitcher({ locale, variant = 'dark' }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()

  // Get the current path without locale prefix
  const getPathWithoutLocale = (path: string): string => {
    for (const loc of locales) {
      if (path.startsWith(`/${loc}/`)) {
        return path.slice(3)
      }
      if (path === `/${loc}`) {
        return '/'
      }
    }
    return path
  }

  // Get the localized path for a given locale
  const getPathForLocale = (newLocale: Locale): string => {
    const pathWithoutLocale = getPathWithoutLocale(pathname)

    // Try to find the canonical path and get localized version
    const canonicalPath = getCanonicalPath(pathWithoutLocale, locale)
    const localizedPath = getLocalizedPath(canonicalPath, newLocale)

    // Add locale prefix for non-default locales
    if (newLocale === defaultLocale) {
      return localizedPath
    }
    return `/${newLocale}${localizedPath}`
  }

  const handleLocaleChange = (newLocale: Locale) => {
    const newPath = getPathForLocale(newLocale)
    router.replace(newPath)
  }

  return (
    <div className="flex items-center gap-1">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleLocaleChange(loc)}
          className={cn(
            'px-2 py-1 text-small font-medium transition-colors duration-fast',
            loc === locale
              ? variant === 'light'
                ? 'text-cream'
                : 'text-charcoal'
              : variant === 'light'
              ? 'text-cream/50 hover:text-cream'
              : 'text-stone hover:text-charcoal'
          )}
        >
          {localeLabels[loc]}
        </button>
      ))}
    </div>
  )
}
