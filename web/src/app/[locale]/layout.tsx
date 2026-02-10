import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { cormorant, sourceSans } from '@/lib/fonts'
import { locales, type Locale } from '@/lib/i18n/config'
import '../globals.css'

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

  return {
    title: titles[locale as Locale] || titles.ro,
    description: descriptions[locale as Locale] || descriptions.ro,
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
    openGraph: {
      title: titles[locale as Locale] || titles.ro,
      description: descriptions[locale as Locale] || descriptions.ro,
      locale: locale === 'ro' ? 'ro_RO' : locale === 'en' ? 'en_US' : 'de_DE',
      type: 'website',
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
    <html lang={locale} className={`${cormorant.variable} ${sourceSans.variable}`}>
      <body className="font-body text-charcoal bg-cream antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
