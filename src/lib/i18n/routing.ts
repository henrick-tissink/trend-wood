import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'
import { locales, defaultLocale, pathnames } from './config'

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'as-needed', // No prefix for default locale (Romanian)
  localeDetection: false, // Don't auto-detect browser language - always default to Romanian
  pathnames,
})

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
