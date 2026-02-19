import { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { ServicesPage } from '@/components/pages/ServicesPage'
import type { Locale } from '@/lib/i18n/config'
import { generatePageAlternates, generateOpenGraph } from '@/lib/seo'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'services.seo' })
  const title = `${t('title')} | Trend Wood`
  const description = t('description')

  return {
    title,
    description,
    alternates: generatePageAlternates('/servicii', locale as Locale),
    openGraph: generateOpenGraph(title, description, locale as Locale, locale === 'ro' ? '/servicii' : locale === 'en' ? '/services' : '/dienstleistungen'),
  }
}

export default async function ServiciiPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return <ServicesPage locale={locale as Locale} />
}
