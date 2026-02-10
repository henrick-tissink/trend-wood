import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { Link } from '@/lib/i18n/routing'
import type { Locale } from '@/lib/i18n/config'

type Props = {
  locale: Locale
}

// Temporary static data - will be replaced with Sanity
const projects = [
  {
    slug: 'casa-utu',
    title: { ro: 'Casa Utu', en: 'Utu House', de: 'Utu Haus' },
    image: '/images/portfolio/casa-utu.jpg',
    woodType: { ro: 'Brad masiv', en: 'Solid fir', de: 'Massive Tanne' },
    featured: true,
  },
  {
    slug: 'scara-emil',
    title: { ro: 'Scară interioară Emil', en: 'Emil Interior Stairs', de: 'Emil Innentreppe' },
    image: '/images/portfolio/scara-emil.jpg',
    woodType: { ro: 'Stejar masiv', en: 'Solid oak', de: 'Massiveiche' },
  },
  {
    slug: 'masa-stejar',
    title: { ro: 'Masă din stejar', en: 'Oak Table', de: 'Eichentisch' },
    image: '/images/portfolio/masa-stejar.jpg',
    woodType: { ro: 'Stejar masiv', en: 'Solid oak', de: 'Massiveiche' },
  },
  {
    slug: 'balcon-lemn',
    title: { ro: 'Balcon din lemn', en: 'Wooden Balcony', de: 'Holzbalkon' },
    image: '/images/portfolio/balcon.jpg',
    woodType: { ro: 'Lemn masiv', en: 'Solid wood', de: 'Massivholz' },
  },
  {
    slug: 'scara-casa-a',
    title: { ro: 'Scară Casa A', en: 'House A Stairs', de: 'Haus A Treppe' },
    image: '/images/portfolio/scara-casa-a.jpg',
    woodType: { ro: 'Stejar masiv', en: 'Solid oak', de: 'Massiveiche' },
  },
]

export async function PortfolioPage({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: 'portfolio' })
  const tCommon = await getTranslations({ locale, namespace: 'common' })

  // Get portfolio path for the current locale
  const portfolioPath = locale === 'ro' ? '/portofoliu' : '/portfolio'

  return (
    <>
      <Header locale={locale} />

      <main className="pt-20 md:pt-24">
        {/* Page Hero */}
        <section className="py-section md:py-section-lg bg-hover">
          <Container>
            <div className="max-w-3xl">
              <FadeIn>
                <h1 className="font-display text-h1 text-charcoal mb-6">
                  {t('hero.title')}
                </h1>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-stone text-body-lg max-w-xl">
                  {t('hero.subtitle')}
                </p>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* Project Grid */}
        <section className="py-section-lg md:py-section-xl bg-cream">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {projects.map((project, i) => (
                <FadeIn key={project.slug} delay={i * 0.08}>
                  <Link
                    href={`${portfolioPath}/${project.slug}` as any}
                    className={`group block ${
                      project.featured ? 'md:col-span-2' : ''
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden bg-border ${
                        project.featured
                          ? 'aspect-[16/9] md:aspect-[21/9]'
                          : 'aspect-[4/3]'
                      }`}
                    >
                      <Image
                        src={project.image}
                        alt={project.title[locale]}
                        fill
                        className="object-cover transition-transform duration-slow ease-smooth group-hover:scale-105"
                        sizes={
                          project.featured
                            ? '100vw'
                            : '(max-width: 768px) 100vw, 50vw'
                        }
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-medium ease-smooth" />

                      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-10">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-medium ease-smooth">
                          <div className="w-20 h-20 rounded-full border border-cream/50 flex items-center justify-center backdrop-blur-sm">
                            <span className="text-cream text-small font-medium">
                              {tCommon('viewProject').split(' ')[0]}
                            </span>
                          </div>
                        </div>

                        <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-medium ease-smooth">
                          <p className="text-small text-cream/70 mb-2">
                            {project.woodType[locale]}
                          </p>
                          <h3
                            className={`font-display text-cream ${
                              project.featured ? 'text-h2' : 'text-h3'
                            }`}
                          >
                            {project.title[locale]}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <h3
                        className={`font-display text-charcoal group-hover:text-forest transition-colors duration-fast ${
                          project.featured ? 'text-h2' : 'text-h3'
                        }`}
                      >
                        {project.title[locale]}
                      </h3>
                      <p className="text-stone text-small mt-1">
                        {project.woodType[locale]}
                      </p>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-section-lg md:py-section-xl bg-charcoal">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <FadeIn>
                <h2 className="font-display text-h1 text-cream mb-8">
                  {locale === 'ro'
                    ? 'Vreți ceva similar?'
                    : locale === 'en'
                    ? 'Want something similar?'
                    : 'Möchten Sie etwas Ähnliches?'
                  }
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-cream/70 text-body-lg mb-12">
                  {locale === 'ro'
                    ? 'Să vorbim despre proiectul dumneavoastră.'
                    : locale === 'en'
                    ? "Let's talk about your project."
                    : 'Lassen Sie uns über Ihr Projekt sprechen.'
                  }
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <Button href="/contact" variant="outline-light" size="large">
                  {tCommon('getInTouch')}
                </Button>
              </FadeIn>
            </div>
          </Container>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  )
}
