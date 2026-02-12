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

  const descriptions: Record<string, string> = {
    'casa-utu': 'Utu House residential project - premium quality terrace and outdoor wooden installations by Trend Wood Consult.',
    'scara-emil': 'Emil custom interior staircase - elegant solid wood design, precision crafted by Trend Wood Consult masters.',
    'masa-stejar': 'Solid oak wood table - high-quality artisan furniture, handcrafted by the Trend Wood Consult team.',
    'balcon-lemn': 'Natural wood balcony - durable structure with exceptional aesthetics, a project by Trend Wood Consult.',
    'scara-casa-a': 'House A interior staircase - modern and functional wood design, masterfully executed by Trend Wood Consult.',
  }

  return {
    title: `${titles[slug] || slug} | Trend Wood`,
    description: descriptions[slug] || 'Project from Trend Wood Consult portfolio - premium quality woodwork.',
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
