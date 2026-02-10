import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { PortfolioDetailPage, getProjectSlugs } from '@/components/pages/PortfolioDetailPage'
import type { Locale } from '@/lib/i18n/config'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  const titles: Record<string, string> = {
    'casa-utu': 'Utu House',
    'scara-emil': 'Emil Stairs',
    'masa-stejar': 'Oak Table',
    'balcon-lemn': 'Wooden Balcony',
    'scara-casa-a': 'House A Stairs',
  }

  return {
    title: `${titles[slug] || slug} | Trend Wood`,
  }
}

export function generateStaticParams() {
  const slugs = getProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function PortfolioDetailRoute({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  return <PortfolioDetailPage locale={locale as Locale} slug={slug} />
}
