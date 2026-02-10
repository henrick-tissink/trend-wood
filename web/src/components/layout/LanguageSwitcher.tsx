'use client'

import { usePathname } from 'next/navigation'
import { Link } from '@/lib/i18n/routing'
import { locales, type Locale } from '@/lib/i18n/config'
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

  const currentPath = getPathWithoutLocale(pathname)

  return (
    <div className="flex items-center gap-1">
      {locales.map((loc) => (
        <Link
          key={loc}
          href={currentPath as any}
          locale={loc}
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
        </Link>
      ))}
    </div>
  )
}
