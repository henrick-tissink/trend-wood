import { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { AboutPage } from '@/components/pages/AboutPage'
import type { Locale } from '@/lib/i18n/config'
import { generatePageAlternates, generateOpenGraph } from '@/lib/seo'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about.seo' })
  const title = `${t('title')} | Trend Wood`
  const description = t('description')

  return {
    title,
    description,
    alternates: generatePageAlternates('/despre-noi', locale as Locale),
    openGraph: generateOpenGraph(title, description, locale as Locale, locale === 'ro' ? '/despre-noi' : locale === 'en' ? '/about' : '/uber-uns'),
  }
}

export default async function AboutPageRoute({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return <AboutPage locale={locale as Locale} />
}
