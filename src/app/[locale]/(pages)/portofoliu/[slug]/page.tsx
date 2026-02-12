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

  const descriptions: Record<string, string> = {
    'casa-utu': 'Proiect rezidențial Casa Utu - terasă și amenajări exterioare din lemn de calitate superioară, realizate de Trend Wood Consult.',
    'scara-emil': 'Scară interioară personalizată Emil - design elegant din lemn masiv, executat cu precizie de meșterii Trend Wood Consult.',
    'masa-stejar': 'Masă din lemn masiv de stejar - mobilier artizanal de înaltă calitate, creat manual de echipa Trend Wood Consult.',
    'balcon-lemn': 'Balcon din lemn natural - structură durabilă și estetică deosebită, proiect realizat de Trend Wood Consult.',
    'scara-casa-a': 'Scară interioară Casa A - design modern și funcțional din lemn, executat cu măiestrie de Trend Wood Consult.',
  }

  return {
    title: `${titles[slug] || slug} | Trend Wood`,
    description: descriptions[slug] || 'Proiect din portofoliul Trend Wood Consult - lucrări din lemn de calitate superioară.',
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
