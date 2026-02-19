import { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { PortfolioPage } from '@/components/pages/PortfolioPage'
import type { Locale } from '@/lib/i18n/config'
import { generatePageAlternates, generateOpenGraph } from '@/lib/seo'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'portfolio.seo' })
  const title = `${t('title')} | Trend Wood`
  const description = t('description')

  return {
    title,
    description,
    alternates: generatePageAlternates('/portofoliu', locale as Locale),
    openGraph: generateOpenGraph(title, description, locale as Locale, locale === 'ro' ? '/portofoliu' : '/portfolio'),
  }
}

export default async function PortofoliuPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return <PortfolioPage locale={locale as Locale} />
}
