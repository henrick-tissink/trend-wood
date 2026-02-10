import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { PortfolioDetailPage, getProjectSlugs } from '@/components/pages/PortfolioDetailPage'
import type { Locale } from '@/lib/i18n/config'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  // Simple title generation - in production this would fetch from Sanity
  const titles: Record<string, string> = {
    'casa-utu': 'Casa Utu',
    'scara-emil': 'Scară Emil',
    'masa-stejar': 'Masă Stejar',
    'balcon-lemn': 'Balcon Lemn',
    'scara-casa-a': 'Scară Casa A',
  }

  return {
    title: `${titles[slug] || slug} | Trend Wood`,
  }
}

export function generateStaticParams() {
  const slugs = getProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function PortofoliuDetailPage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  return <PortfolioDetailPage locale={locale as Locale} slug={slug} />
}
