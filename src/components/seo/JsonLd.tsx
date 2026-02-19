import { type Locale } from '@/lib/i18n/config'

const BASE_URL = 'https://trendwood.ro'

type JsonLdProps = {
  locale: Locale
  pathname?: string
}

export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Trend Wood Consult',
    url: BASE_URL,
    logo: `${BASE_URL}/icon.png`,
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['Romanian', 'English', 'German'],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function LocalBusinessJsonLd({ locale }: JsonLdProps) {
  const descriptions: Record<Locale, string> = {
    ro: 'Mobilier din lemn masiv, realizat cu rigoare transilvăneană și pasiune pentru detalii.',
    en: 'Solid wood furniture, crafted with Transylvanian rigor and passion for details.',
    de: 'Massivholzmöbel, gefertigt mit siebenbürgischer Präzision und Leidenschaft für Details.',
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#localbusiness`,
    name: 'Trend Wood Consult',
    description: descriptions[locale],
    url: BASE_URL,
    image: `${BASE_URL}/icon.png`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'RO',
      addressRegion: 'Transilvania',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 46.0,
      longitude: 25.0,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '12',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: locale === 'ro' ? 'Mobilier din lemn masiv' : locale === 'de' ? 'Massivholzmöbel' : 'Solid Wood Furniture',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'ro' ? 'Mobilier la comandă' : locale === 'de' ? 'Maßgefertigte Möbel' : 'Custom Furniture',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'ro' ? 'Bucătării din lemn' : locale === 'de' ? 'Holzküchen' : 'Wood Kitchens',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'ro' ? 'Scări interioare' : locale === 'de' ? 'Innentreppen' : 'Interior Stairs',
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbJsonLd({ locale, pathname = '/' }: JsonLdProps) {
  const getLocalePath = (loc: Locale) => (loc === 'ro' ? '' : `/${loc}`)

  const breadcrumbNames: Record<string, Record<Locale, string>> = {
    '/': { ro: 'Acasă', en: 'Home', de: 'Startseite' },
    '/despre-noi': { ro: 'Despre noi', en: 'About', de: 'Über uns' },
    '/servicii': { ro: 'Servicii', en: 'Services', de: 'Dienstleistungen' },
    '/portofoliu': { ro: 'Portofoliu', en: 'Portfolio', de: 'Portfolio' },
    '/contact': { ro: 'Contact', en: 'Contact', de: 'Kontakt' },
  }

  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: breadcrumbNames['/'][locale],
      item: `${BASE_URL}${getLocalePath(locale)}/`,
    },
  ]

  if (pathname !== '/' && breadcrumbNames[pathname]) {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: breadcrumbNames[pathname][locale],
      item: `${BASE_URL}${getLocalePath(locale)}${pathname}`,
    })
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebsiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Trend Wood Consult',
    url: BASE_URL,
    inLanguage: ['ro', 'en', 'de'],
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}/portofoliu?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

type PortfolioBreadcrumbProps = {
  locale: Locale
  projectTitle: string
  projectSlug: string
}

export function PortfolioBreadcrumbJsonLd({ locale, projectTitle, projectSlug }: PortfolioBreadcrumbProps) {
  const getLocalePath = (loc: Locale) => (loc === 'ro' ? '' : `/${loc}`)
  const portfolioPath = locale === 'ro' ? '/portofoliu' : '/portfolio'

  const homeNames: Record<Locale, string> = {
    ro: 'Acasă',
    en: 'Home',
    de: 'Startseite',
  }

  const portfolioNames: Record<Locale, string> = {
    ro: 'Portofoliu',
    en: 'Portfolio',
    de: 'Portfolio',
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: homeNames[locale],
        item: `${BASE_URL}${getLocalePath(locale)}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: portfolioNames[locale],
        item: `${BASE_URL}${getLocalePath(locale)}${portfolioPath}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: projectTitle,
        item: `${BASE_URL}${getLocalePath(locale)}${portfolioPath}/${projectSlug}`,
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
