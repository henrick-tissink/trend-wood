import Image from 'next/image'
import NextLink from 'next/link'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { Link } from '@/lib/i18n/routing'
import { CONTACT } from '@/lib/constants'
import type { Locale } from '@/lib/i18n/config'

type Props = {
  locale: Locale
  slug: string
}

// Temporary static data - will be replaced with Sanity
const projects: Record<
  string,
  {
    title: Record<Locale, string>
    description: Record<Locale, string>
    woodType: Record<Locale, string>
    images: string[]
    details: Record<Locale, string[]>
  }
> = {
  'casa-utu': {
    title: {
      ro: 'Casa Utu',
      en: 'Utu House',
      de: 'Utu Haus',
    },
    description: {
      ro: 'Construcție din lemn masiv de brad, realizată cu atenție la fiecare detaliu. Un proiect care demonstrează că tradiția și confortul modern pot coexista armonios în mijlocul naturii.',
      en: 'Solid fir wood construction, crafted with attention to every detail. A project that demonstrates that tradition and modern comfort can coexist harmoniously in the midst of nature.',
      de: 'Massivholzbau aus Tanne, mit Liebe zum Detail gefertigt. Ein Projekt, das zeigt, dass Tradition und moderner Komfort harmonisch inmitten der Natur koexistieren können.',
    },
    woodType: {
      ro: 'Lemn rășinos',
      en: 'Resinous wood',
      de: 'Nadelholz',
    },
    images: [
      '/images/portfolio/casa-utu/01.jpg',
      '/images/portfolio/casa-utu/02.jpg',
      '/images/portfolio/casa-utu/03.jpg',
      '/images/portfolio/casa-utu/04.jpg',
      '/images/portfolio/casa-utu/05.jpg',
    ],
    details: {
      ro: [
        'Structură din lemn masiv de brad',
        'Finisaje naturale rezistente la intemperii',
        'Design personalizat în armonie cu natura',
      ],
      en: [
        'Solid fir wood structure',
        'Weather-resistant natural finishes',
        'Custom design in harmony with nature',
      ],
      de: [
        'Massivholzstruktur aus Tanne',
        'Wetterbeständige natürliche Oberflächen',
        'Individuelles Design im Einklang mit der Natur',
      ],
    },
  },
  'scara-emil': {
    title: {
      ro: 'Scară interioară Emil',
      en: 'Emil Interior Stairs',
      de: 'Emil Innentreppe',
    },
    description: {
      ro: 'Scară din stejar masiv cu trepte curbate la bază, realizată cu precizie artizanală. Fiecare detaliu reflectă măiestria transilvăneană și pasiunea pentru lemn.',
      en: 'Solid oak staircase with curved steps at the base, crafted with artisanal precision. Every detail reflects Transylvanian craftsmanship and passion for wood.',
      de: 'Treppe aus Massiveiche mit geschwungenen Stufen an der Basis, mit handwerklicher Präzision gefertigt. Jedes Detail spiegelt siebenbürgische Handwerkskunst und Leidenschaft für Holz wider.',
    },
    woodType: {
      ro: 'Stejar masiv',
      en: 'Solid oak',
      de: 'Massiveiche',
    },
    images: [
      '/images/portfolio/scara-emil/01.jpg',
      '/images/portfolio/scara-emil/02.jpg',
      '/images/portfolio/scara-emil/03.jpg',
      '/images/portfolio/scara-emil/04.jpg',
      '/images/portfolio/scara-emil/05.jpg',
    ],
    details: {
      ro: [
        'Trepte din stejar masiv cu curbură elegantă',
        'Finisaj cu ulei natural',
        'Montaj și ajustare la fața locului',
      ],
      en: [
        'Solid oak steps with elegant curve',
        'Natural oil finish',
        'On-site installation and adjustment',
      ],
      de: [
        'Massivholzstufen aus Eiche mit eleganter Krümmung',
        'Natürliche Ölfinish',
        'Installation und Anpassung vor Ort',
      ],
    },
  },
  'masa-stejar': {
    title: {
      ro: 'Masă din stejar',
      en: 'Oak Table',
      de: 'Eichentisch',
    },
    description: {
      ro: 'O masă impunătoare din stejar masiv, unde fibra naturală a lemnului este protagonista. Grosimea blatului și finisajul cu ulei natural evidențiază caracterul unic al fiecărei piese.',
      en: 'An imposing solid oak table where the natural grain of the wood is the protagonist. The thickness of the top and the natural oil finish highlight the unique character of each piece.',
      de: 'Ein imposanter Massivholztisch aus Eiche, bei dem die natürliche Maserung des Holzes im Mittelpunkt steht. Die Dicke der Platte und das natürliche Ölfinish betonen den einzigartigen Charakter jedes Stücks.',
    },
    woodType: {
      ro: 'Stejar masiv',
      en: 'Solid oak',
      de: 'Massiveiche',
    },
    images: [
      '/images/portfolio/masa-stejar/01.jpg',
      '/images/portfolio/masa-stejar/02.jpg',
      '/images/portfolio/masa-stejar/03.jpg',
      '/images/portfolio/masa-stejar/04.jpg',
      '/images/portfolio/masa-stejar/05.jpg',
    ],
    details: {
      ro: [
        'Blat masiv din stejar cu fibră vizibilă',
        'Finisaj cu ulei natural',
        'Picioare din metal pentru contrast modern',
      ],
      en: [
        'Solid oak top with visible grain',
        'Natural oil finish',
        'Metal legs for modern contrast',
      ],
      de: [
        'Massive Eichenplatte mit sichtbarer Maserung',
        'Natürliches Ölfinish',
        'Metallbeine für modernen Kontrast',
      ],
    },
  },
  'balcon-lemn': {
    title: {
      ro: 'Balcon din lemn',
      en: 'Wooden Balcony',
      de: 'Holzbalkon',
    },
    description: {
      ro: 'Balustradă și structură de balcon din lemn masiv, integrată armonios în arhitectura casei. Lemnul tratată asigură durabilitate și estetică pe termen lung.',
      en: 'Solid wood balcony railing and structure, harmoniously integrated into the house architecture. Treated wood ensures long-term durability and aesthetics.',
      de: 'Balkongeländer und -struktur aus Massivholz, harmonisch in die Hausarchitektur integriert. Behandeltes Holz gewährleistet Langlebigkeit und Ästhetik.',
    },
    woodType: {
      ro: 'Lemn rășinos',
      en: 'Resinous wood',
      de: 'Nadelholz',
    },
    images: [
      '/images/portfolio/balcon/01.jpg',
      '/images/portfolio/balcon/02.jpg',
      '/images/portfolio/balcon/03.jpg',
      '/images/portfolio/balcon/04.jpg',
    ],
    details: {
      ro: [
        'Balustradă din lemn masiv tratat',
        'Structură rezistentă la intemperii',
        'Design tradițional cu adaptare modernă',
      ],
      en: [
        'Treated solid wood railing',
        'Weather-resistant structure',
        'Traditional design with modern adaptation',
      ],
      de: [
        'Geländer aus behandeltem Massivholz',
        'Wetterbeständige Struktur',
        'Traditionelles Design mit moderner Anpassung',
      ],
    },
  },
  'scara-casa-a': {
    title: {
      ro: 'Scară Casa A',
      en: 'House A Stairs',
      de: 'Haus A Treppe',
    },
    description: {
      ro: 'Scară elegantă din stejar masiv cu mână curentă sculptată. Designul minimalist pune în valoare calitatea materialului și precizia execuției.',
      en: 'Elegant solid oak staircase with sculpted handrail. The minimalist design highlights the quality of the material and the precision of the execution.',
      de: 'Elegante Treppe aus Massiveiche mit geschnitztem Handlauf. Das minimalistische Design unterstreicht die Qualität des Materials und die Präzision der Ausführung.',
    },
    woodType: {
      ro: 'Stejar masiv',
      en: 'Solid oak',
      de: 'Massiveiche',
    },
    images: [
      '/images/portfolio/scara-casa-a/01.jpg',
      '/images/portfolio/scara-casa-a/02.jpg',
      '/images/portfolio/scara-casa-a/03.jpg',
      '/images/portfolio/scara-casa-a/04.jpg',
      '/images/portfolio/scara-casa-a/05.jpg',
    ],
    details: {
      ro: [
        'Trepte și contratrepte din stejar masiv',
        'Mână curentă sculptată din lemn masiv',
        'Integrare perfectă cu podeaua existentă',
      ],
      en: [
        'Solid oak treads and risers',
        'Sculpted solid wood handrail',
        'Perfect integration with existing floor',
      ],
      de: [
        'Tritt- und Setzstufen aus Massiveiche',
        'Geschnitzter Handlauf aus Massivholz',
        'Perfekte Integration mit dem vorhandenen Boden',
      ],
    },
  },
}

const projectSlugs = Object.keys(projects)

function getAdjacentProjects(currentSlug: string, locale: Locale) {
  const currentIndex = projectSlugs.indexOf(currentSlug)
  const prevIndex =
    currentIndex > 0 ? currentIndex - 1 : projectSlugs.length - 1
  const nextIndex =
    currentIndex < projectSlugs.length - 1 ? currentIndex + 1 : 0

  return {
    prev: {
      slug: projectSlugs[prevIndex],
      title: projects[projectSlugs[prevIndex]].title[locale],
    },
    next: {
      slug: projectSlugs[nextIndex],
      title: projects[projectSlugs[nextIndex]].title[locale],
    },
  }
}

export async function PortfolioDetailPage({ locale, slug }: Props) {
  const project = projects[slug]

  if (!project) {
    notFound()
  }

  const t = await getTranslations({ locale, namespace: 'portfolio.project' })
  const tCommon = await getTranslations({ locale, namespace: 'common' })

  const { prev, next } = getAdjacentProjects(slug, locale)
  const portfolioPath = locale === 'ro' ? '/portofoliu' : '/portfolio'
  const localePrefix = locale === 'ro' ? '' : `/${locale}`

  return (
    <>
      <Header transparent locale={locale} />

      <main>
        {/* Cinematic Hero */}
        <section className="relative h-[70vh] min-h-[600px] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={project.images[0]}
              alt={project.title[locale]}
              fill
              className="object-cover animate-ken-burns"
              sizes="100vw"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />

          <Container className="relative z-10 pb-16 md:pb-20">
            <FadeIn>
              <p className="text-cream/70 text-body mb-3">
                {project.woodType[locale]}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-display text-hero text-cream max-w-3xl">
                {project.title[locale]}
              </h1>
            </FadeIn>
          </Container>
        </section>

        {/* Gallery */}
        {project.images.length > 1 && (
          <section className="py-section-lg md:py-section-xl bg-hover">
            <Container>
              <FadeIn>
                <h2 className="font-display text-h2 text-charcoal mb-10 md:mb-12">
                  {t('gallery')}
                </h2>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {project.images.map((image, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className="relative aspect-[4/3] overflow-hidden bg-border">
                      <Image
                        src={image}
                        alt={`${project.title[locale]} - ${i + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-slow"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </FadeIn>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* Project Content */}
        <section className="py-section-lg md:py-section-xl bg-cream">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
              {/* Main content */}
              <div className="lg:col-span-7">
                {/* Breadcrumb */}
                <FadeIn>
                  <nav className="mb-12">
                    <Link
                      href="/portofoliu"
                      className="inline-flex items-center gap-2 text-stone hover:text-forest transition-colors duration-fast group"
                    >
                      <svg
                        className="w-4 h-4 transition-transform duration-fast group-hover:-translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      {tCommon('backToPortfolio')}
                    </Link>
                  </nav>
                </FadeIn>

                {/* Description */}
                <FadeIn delay={0.1}>
                  <p className="text-charcoal text-body-lg leading-relaxed mb-12">
                    {project.description[locale]}
                  </p>
                </FadeIn>

                {/* Details */}
                {project.details[locale] && (
                  <FadeIn delay={0.2}>
                    <div className="border-t border-border pt-10">
                      <h2 className="font-display text-h3 text-charcoal mb-8">
                        {t('details')}
                      </h2>
                      <ul className="space-y-4">
                        {project.details[locale].map((detail, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-4 text-stone text-body-lg"
                          >
                            <span className="w-2 h-2 rounded-full bg-forest mt-2.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-5">
                <FadeIn delay={0.15}>
                  <div className="bg-hover p-8 md:p-10 lg:sticky lg:top-32">
                    <h3 className="font-display text-h3 text-charcoal mb-6">
                      {t('interestedTitle')}
                    </h3>
                    <p className="text-stone mb-8">{t('interestedText')}</p>
                    <Button href="/contact" variant="primary" className="w-full">
                      {tCommon('getInTouch')}
                    </Button>

                    <div className="mt-8 pt-8 border-t border-border">
                      <p className="text-small text-stone mb-2">
                        {locale === 'ro'
                          ? 'Sau sunați direct:'
                          : locale === 'en'
                          ? 'Or call directly:'
                          : 'Oder rufen Sie direkt an:'
                        }
                      </p>
                      <a
                        href={`tel:${CONTACT.phones[1].tel}`}
                        className="text-charcoal font-display text-h4 hover:text-forest transition-colors duration-fast"
                      >
                        {CONTACT.phones[1].number}
                      </a>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        {/* Project Navigation */}
        <section className="border-t border-border">
          <div className="grid grid-cols-2">
            {/* Previous */}
            <NextLink
              href={`${localePrefix}${portfolioPath}/${prev.slug}`}
              className="group relative py-12 md:py-16 px-6 md:px-12 hover:bg-hover transition-colors duration-medium"
            >
              <div className="max-w-md">
                <p className="text-small text-stone mb-2 flex items-center gap-2">
                  <svg
                    className="w-4 h-4 transition-transform duration-fast group-hover:-translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  {locale === 'ro'
                    ? 'Proiect anterior'
                    : locale === 'en'
                    ? 'Previous project'
                    : 'Vorheriges Projekt'
                  }
                </p>
                <h3 className="font-display text-h3 text-charcoal group-hover:text-forest transition-colors duration-fast">
                  {prev.title}
                </h3>
              </div>
            </NextLink>

            {/* Next */}
            <NextLink
              href={`${localePrefix}${portfolioPath}/${next.slug}`}
              className="group relative py-12 md:py-16 px-6 md:px-12 text-right border-l border-border hover:bg-hover transition-colors duration-medium"
            >
              <div className="max-w-md ml-auto">
                <p className="text-small text-stone mb-2 flex items-center justify-end gap-2">
                  {locale === 'ro'
                    ? 'Proiect următor'
                    : locale === 'en'
                    ? 'Next project'
                    : 'Nächstes Projekt'
                  }
                  <svg
                    className="w-4 h-4 transition-transform duration-fast group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </p>
                <h3 className="font-display text-h3 text-charcoal group-hover:text-forest transition-colors duration-fast">
                  {next.title}
                </h3>
              </div>
            </NextLink>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  )
}

export function getProjectSlugs() {
  return Object.keys(projects)
}
