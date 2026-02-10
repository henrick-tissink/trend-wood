import { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { PortfolioPage } from '@/components/pages/PortfolioPage'
import type { Locale } from '@/lib/i18n/config'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'portfolio.seo' })

  return {
    title: `${t('title')} | Trend Wood`,
    description: t('description'),
  }
}

export default async function PortofoliuPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return <PortfolioPage locale={locale as Locale} />
}
