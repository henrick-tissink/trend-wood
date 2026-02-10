import Image from 'next/image'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { Link } from '@/lib/i18n/routing'
import type { Locale } from '@/lib/i18n/config'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: 'home' })
  const tCommon = await getTranslations({ locale, namespace: 'common' })

  // Portfolio paths per locale
  const portfolioPaths: Record<Locale, string> = {
    ro: '/portofoliu',
    en: '/portfolio',
    de: '/portfolio',
  }

  const portfolioPath = portfolioPaths[locale as Locale] || '/portofoliu'

  return (
    <>
      <Header transparent locale={locale as Locale} />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/portfolio/casa-utu.jpg"
              alt="Solid wood house in forest"
              fill
              priority
              className="object-cover animate-ken-burns"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/40 to-charcoal/70" />

          <Container className="relative z-10 text-center">
            <FadeIn duration={1}>
              <div className="relative w-[280px] h-[140px] sm:w-[400px] sm:h-[200px] md:w-[500px] md:h-[250px] lg:w-[600px] lg:h-[300px] mx-auto mb-8 md:mb-12">
                <Image
                  src="/images/logo.png"
                  alt="Trend Wood - Simte Lemnul - estd 2020"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.3} duration={0.8}>
              <h1 className="font-display font-semibold text-hero text-cream max-w-4xl mx-auto text-balance">
                {t('hero.title')}
              </h1>
            </FadeIn>

            <FadeIn delay={0.5} duration={0.8}>
              <p className="mt-8 text-body-lg text-cream/80 max-w-xl mx-auto">
                {t('hero.subtitle')}
              </p>
            </FadeIn>

            <FadeIn delay={0.7} duration={0.8}>
              <div className="mt-12">
                <Button href="/contact" size="large" variant="primary">
                  {tCommon('getInTouch')}
                </Button>
              </div>
            </FadeIn>
          </Container>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <FadeIn delay={1.2} direction="none">
              <div className="animate-pulse-slow">
                <svg
                  className="w-6 h-6 text-cream"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-section-lg md:py-section-xl bg-cream">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <FadeIn>
                <blockquote className="font-display text-quote text-charcoal text-balance">
                  &bdquo;{locale === 'ro'
                    ? 'Sunt dulgheri care taie lemnul și dulgheri care îl simt.'
                    : locale === 'en'
                    ? 'There are carpenters who cut wood and carpenters who feel it.'
                    : 'Es gibt Zimmerleute, die Holz schneiden, und Zimmerleute, die es fühlen.'
                  }&rdquo;
                </blockquote>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="mt-10 text-body-lg text-stone max-w-2xl mx-auto">
                  {locale === 'ro'
                    ? 'La Trend Wood, alegem fiecare scândură, îi înțelegem nodurile și îi respectăm fibra. Rezultatul? Lucrări care nu seamănă cu nimic de pe piață.'
                    : locale === 'en'
                    ? 'At Trend Wood, we choose each board, understand its knots and respect its grain. The result? Works that are unlike anything on the market.'
                    : 'Bei Trend Wood wählen wir jedes Brett aus, verstehen seine Äste und respektieren seine Maserung. Das Ergebnis? Werke, die einzigartig auf dem Markt sind.'
                  }
                </p>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* Featured Works */}
        <section className="py-section-lg md:py-section-xl bg-hover">
          <Container>
            <FadeIn>
              <h2 className="font-display text-h1 text-charcoal text-center mb-16 md:mb-20">
                {t('featuredWork')}
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  src: '/images/portfolio/scara-emil.jpg',
                  title: locale === 'ro' ? 'Scară interioară Emil' : locale === 'en' ? 'Emil Interior Stairs' : 'Emil Innentreppe',
                  subtitle: locale === 'ro' ? 'Stejar masiv' : locale === 'en' ? 'Solid oak' : 'Massiveiche',
                  href: `${portfolioPath}/scara-emil`,
                },
                {
                  src: '/images/portfolio/masa-stejar.jpg',
                  title: locale === 'ro' ? 'Masă din stejar' : locale === 'en' ? 'Oak Table' : 'Eichentisch',
                  subtitle: locale === 'ro' ? 'Stejar masiv' : locale === 'en' ? 'Solid oak' : 'Massiveiche',
                  href: `${portfolioPath}/masa-stejar`,
                },
                {
                  src: '/images/portfolio/scara-casa-a.jpg',
                  title: locale === 'ro' ? 'Scară Casa A' : locale === 'en' ? 'House A Stairs' : 'Haus A Treppe',
                  subtitle: locale === 'ro' ? 'Stejar masiv' : locale === 'en' ? 'Solid oak' : 'Massiveiche',
                  href: `${portfolioPath}/scara-casa-a`,
                },
              ].map((work, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <Link
                    href={work.href as any}
                    className="group relative aspect-[4/3] block overflow-hidden bg-border"
                  >
                    <Image
                      src={work.src}
                      alt={work.title}
                      fill
                      className="object-cover transition-transform duration-slow ease-smooth group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-medium ease-smooth" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-medium ease-smooth">
                      <p className="text-small text-cream/70 mb-1">{work.subtitle}</p>
                      <h3 className="font-display text-h3 text-cream">{work.title}</h3>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.3}>
              <div className="mt-16 text-center">
                <Button href={portfolioPath as any} variant="secondary">
                  {tCommon('viewAll')}
                </Button>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* Testimonial Section */}
        <section className="py-section-lg md:py-section-xl bg-charcoal relative overflow-hidden">
          <div className="absolute top-12 left-8 md:left-16 text-cream/5 pointer-events-none">
            <svg
              className="w-32 h-32 md:w-48 md:h-48"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <Container className="relative">
            <div className="max-w-4xl mx-auto text-center">
              <FadeIn>
                <blockquote className="font-display text-quote text-cream text-balance leading-relaxed">
                  &bdquo;{locale === 'ro'
                    ? 'Am căutat mult un meșter care să înțeleagă exact ce ne dorim. La Trend Wood am găsit nu doar profesionalism, ci și o pasiune autentică pentru lemn. Scara noastră este o operă de artă.'
                    : locale === 'en'
                    ? 'We searched a lot for a craftsman who would understand exactly what we wanted. At Trend Wood we found not only professionalism, but also an authentic passion for wood. Our staircase is a work of art.'
                    : 'Wir haben lange nach einem Handwerker gesucht, der genau versteht, was wir wollen. Bei Trend Wood fanden wir nicht nur Professionalität, sondern auch eine authentische Leidenschaft für Holz. Unsere Treppe ist ein Kunstwerk.'
                  }&rdquo;
                </blockquote>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="mt-10">
                  <p className="text-cream font-medium">
                    {locale === 'ro' ? 'Familie din Cluj' : locale === 'en' ? 'Family from Cluj' : 'Familie aus Cluj'}
                  </p>
                  <p className="text-cream/50 text-small mt-1">
                    {locale === 'ro'
                      ? 'Proiect: Scară interioară din stejar'
                      : locale === 'en'
                      ? 'Project: Interior oak staircase'
                      : 'Projekt: Innentreppe aus Eiche'
                    }
                  </p>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* Values Section */}
        <section className="py-section-lg md:py-section-xl bg-cream">
          <Container>
            <FadeIn>
              <h2 className="font-display text-h1 text-charcoal text-center mb-16 md:mb-20">
                {locale === 'ro' ? 'De ce Trend Wood' : locale === 'en' ? 'Why Trend Wood' : 'Warum Trend Wood'}
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
              {[
                {
                  title: t('values.craftsmanship.title'),
                  description: t('values.craftsmanship.description'),
                },
                {
                  title: t('values.materials.title'),
                  description: t('values.materials.description'),
                },
                {
                  title: t('values.legacy.title'),
                  description: t('values.legacy.description'),
                },
              ].map((value, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="text-center">
                    <h3 className="font-display text-h3 text-charcoal mb-5">
                      {value.title}
                    </h3>
                    <p className="text-stone max-w-prose mx-auto">
                      {value.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-section-lg md:py-section-xl bg-charcoal">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <FadeIn>
                <h2 className="font-display text-h1 text-cream mb-8">
                  {locale === 'ro'
                    ? 'Aveți un proiect în minte?'
                    : locale === 'en'
                    ? 'Have a project in mind?'
                    : 'Haben Sie ein Projekt im Sinn?'
                  }
                </h2>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="text-cream/70 text-body-lg mb-12">
                  {locale === 'ro'
                    ? 'Să discutăm despre cum putem transforma viziunea dumneavoastră în realitate.'
                    : locale === 'en'
                    ? "Let's discuss how we can turn your vision into reality."
                    : 'Lassen Sie uns besprechen, wie wir Ihre Vision in die Realität umsetzen können.'
                  }
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <Button href="/contact" variant="outline-light" size="large">
                  {tCommon('getInTouch')}
                </Button>
              </FadeIn>
            </div>
          </Container>
        </section>
      </main>

      <Footer locale={locale as Locale} />
    </>
  )
}
