import type { AppPathname, Locale } from '@/lib/i18n/config'

export type NavigationItem = {
  name: string
  href: AppPathname
}

// All navigation items use canonical paths (keys from pathnames config)
// next-intl will automatically translate them to localized URLs based on locale
export const NAVIGATION: Record<Locale, NavigationItem[]> = {
  ro: [
    { name: 'Acasă', href: '/' },
    { name: 'Despre Noi', href: '/despre-noi' },
    { name: 'Servicii', href: '/servicii' },
    { name: 'Portofoliu', href: '/portofoliu' },
    { name: 'Contact', href: '/contact' },
  ],
  en: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/despre-noi' },
    { name: 'Services', href: '/servicii' },
    { name: 'Portfolio', href: '/portofoliu' },
    { name: 'Contact', href: '/contact' },
  ],
  de: [
    { name: 'Startseite', href: '/' },
    { name: 'Über Uns', href: '/despre-noi' },
    { name: 'Dienstleistungen', href: '/servicii' },
    { name: 'Portfolio', href: '/portofoliu' },
    { name: 'Kontakt', href: '/contact' },
  ],
};

export const CONTACT = {
  phones: [
    { number: '0731 491 811', name: 'Utu', tel: '+40731491811' },
    { number: '0724 533 675', name: 'Ioana', tel: '+40724533675' },
  ],
  email: 'info@trendwood.ro',
  whatsapp: '+40724533675',
  location: {
    ro: 'Ciolpani, Ilfov, România',
    en: 'Ciolpani, Ilfov, Romania',
    de: 'Ciolpani, Ilfov, Rumänien',
  },
} as const;
