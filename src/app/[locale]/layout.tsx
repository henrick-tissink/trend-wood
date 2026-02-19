import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { playfair, sourceSans } from '@/lib/fonts'
import { locales, type Locale } from '@/lib/i18n/config'
import { OrganizationJsonLd, LocalBusinessJsonLd, WebsiteJsonLd } from '@/components/seo/JsonLd'
import '../globals.css'

const BASE_URL = 'https://trendwood.ro'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  const titles: Record<Locale, string> = {
    ro: 'Trend Wood | Mobilier din Lemn Masiv',
    en: 'Trend Wood | Solid Wood Furniture',
    de: 'Trend Wood | Massivholzmöbel',
  }

  const descriptions: Record<Locale, string> = {
    ro: 'Mobilier din lemn masiv, realizat cu rigoare transilvăneană și pasiune pentru detalii. Fiecare piesă este o lucrare unică.',
    en: 'Solid wood furniture, crafted with Transylvanian rigor and passion for details. Each piece is a unique work of art.',
    de: 'Massivholzmöbel, gefertigt mit siebenbürgischer Präzision und Leidenschaft für Details. Jedes Stück ist ein einzigartiges Kunstwerk.',
  }

  const getLocalePath = (loc: Locale) => (loc === 'ro' ? '' : `/${loc}`)

  return {
    metadataBase: new URL(BASE_URL),
    title: titles[locale as Locale] || titles.ro,
    description: descriptions[locale as Locale] || descriptions.ro,
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
        { url: '/icon.png', sizes: '192x192', type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
      apple: [
        { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    keywords: [
      'mobilier lemn masiv',
      'solid wood furniture',
      'Massivholzmöbel',
      'mobilă la comandă',
      'custom furniture',
      'tâmplărie',
      'Trend Wood',
    ],
    authors: [{ name: 'Trend Wood Consult' }],
    alternates: {
      canonical: `${BASE_URL}${getLocalePath(locale as Locale)}/`,
      languages: {
        'ro': `${BASE_URL}/`,
        'en': `${BASE_URL}/en/`,
        'de': `${BASE_URL}/de/`,
        'x-default': `${BASE_URL}/`,
      },
    },
    openGraph: {
      title: titles[locale as Locale] || titles.ro,
      description: descriptions[locale as Locale] || descriptions.ro,
      locale: locale === 'ro' ? 'ro_RO' : locale === 'en' ? 'en_US' : 'de_DE',
      alternateLocale: ['ro_RO', 'en_US', 'de_DE'].filter(
        l => l !== (locale === 'ro' ? 'ro_RO' : locale === 'en' ? 'en_US' : 'de_DE')
      ),
      type: 'website',
      siteName: 'Trend Wood Consult',
      url: `${BASE_URL}${getLocalePath(locale as Locale)}/`,
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale as Locale] || titles.ro,
      description: descriptions[locale as Locale] || descriptions.ro,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  // Get messages for the current locale
  const messages = await getMessages()

  return (
    <html lang={locale} className={`${playfair.variable} ${sourceSans.variable}`}>
      <head>
        <OrganizationJsonLd />
        <LocalBusinessJsonLd locale={locale as Locale} />
        <WebsiteJsonLd />
      </head>
      <body className="font-body text-charcoal bg-cream antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
