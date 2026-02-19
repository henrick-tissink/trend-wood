import { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { ContactPage } from '@/components/pages/ContactPage'
import type { Locale } from '@/lib/i18n/config'
import { generatePageAlternates, generateOpenGraph } from '@/lib/seo'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contact.seo' })
  const title = `${t('title')} | Trend Wood`
  const description = t('description')

  return {
    title,
    description,
    alternates: generatePageAlternates('/contact', locale as Locale),
    openGraph: generateOpenGraph(title, description, locale as Locale, locale === 'de' ? '/kontakt' : '/contact'),
  }
}

export default async function ContactPageRoute({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return <ContactPage locale={locale as Locale} />
}
