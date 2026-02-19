import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { PortfolioDetailPage, getProjectSlugs } from '@/components/pages/PortfolioDetailPage'
import type { Locale } from '@/lib/i18n/config'
import { getProjectBySlug } from '@/lib/sanity/queries'
import { generatePortfolioDetailAlternates, generateOpenGraph } from '@/lib/seo'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const project = await getProjectBySlug(slug, locale as Locale)

  const title = project?.title || project?.titleFallback || slug
  const description = project?.description || project?.descriptionFallback || ''
  const fullTitle = `${title} | Trend Wood`
  const portfolioPath = locale === 'ro' ? '/portofoliu' : '/portfolio'

  return {
    title: fullTitle,
    description: description || `${title} - Trend Wood Consult portfolio project`,
    alternates: generatePortfolioDetailAlternates(slug, locale as Locale),
    openGraph: generateOpenGraph(fullTitle, description, locale as Locale, `${portfolioPath}/${slug}`),
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
