import { getTranslations } from 'next-intl/server'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import type { Locale } from '@/lib/i18n/config'

type Props = {
  locale: Locale
}

export async function ServicesPage({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: 'services' })
  const tCommon = await getTranslations({ locale, namespace: 'common' })

  const services = [
    {
      title: t('list.stairs.title'),
      description: t('list.stairs.description'),
    },
    {
      title: t('list.furniture.title'),
      description: t('list.furniture.description'),
    },
    {
      title: t('list.flooring.title'),
      description: t('list.flooring.description'),
    },
    {
      title: t('list.terraces.title'),
      description: t('list.terraces.description'),
    },
    {
      title: t('list.restoration.title'),
      description: t('list.restoration.description'),
    },
  ]

  const processSteps = [
    {
      step: 1,
      title: t('process.steps.consultation.title'),
      description: t('process.steps.consultation.description'),
    },
    {
      step: 2,
      title: t('process.steps.design.title'),
      description: t('process.steps.design.description'),
    },
    {
      step: 3,
      title: t('process.steps.crafting.title'),
      description: t('process.steps.crafting.description'),
    },
    {
      step: 4,
      title: t('process.steps.delivery.title'),
      description: t('process.steps.delivery.description'),
    },
  ]

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

        {/* Services List */}
        <section className="py-section-lg md:py-section-xl">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {services.map((service, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="p-8 md:p-10 bg-hover border border-border">
                    <h3 className="font-display text-h3 text-charcoal mb-5">
                      {service.title}
                    </h3>
                    <p className="text-stone leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Process */}
        <section className="py-section-lg md:py-section-xl bg-charcoal">
          <Container>
            <FadeIn>
              <h2 className="font-display text-h1 text-cream text-center mb-16 md:mb-20">
                {t('process.title')}
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {processSteps.map((step, i) => (
                <FadeIn key={step.step} delay={i * 0.1}>
                  <div className="text-center">
                    <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center border border-cream/30 rounded-full">
                      <span className="font-display text-h4 text-cream">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="font-display text-h3 text-cream mb-3">
                      {step.title}
                    </h3>
                    <p className="text-cream/60">{step.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Personalization */}
        <section className="py-section-lg md:py-section-xl bg-cream">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <h2 className="font-display text-h1 text-charcoal mb-10">
                  {locale === 'ro'
                    ? 'Venim la dumneavoastră'
                    : locale === 'en'
                    ? 'We come to you'
                    : 'Wir kommen zu Ihnen'
                  }
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-stone text-body-lg mb-8">
                  {locale === 'ro'
                    ? 'Călătorim la client pentru măsurători și discuții, astfel încât fiecare element să fie personalizat conform dorințelor și nevoilor dumneavoastră.'
                    : locale === 'en'
                    ? 'We travel to the client for measurements and discussions, so that each element is customized according to your wishes and needs.'
                    : 'Wir reisen zum Kunden für Messungen und Gespräche, damit jedes Element nach Ihren Wünschen und Bedürfnissen angepasst wird.'
                  }
                </p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="text-stone text-body-lg">
                  {locale === 'ro'
                    ? 'Oferim consultanță design și o gamă variată de opțiuni de culori și finisaje pentru a crea piesa perfectă pentru spațiul dumneavoastră.'
                    : locale === 'en'
                    ? 'We offer design consultancy and a wide range of color and finish options to create the perfect piece for your space.'
                    : 'Wir bieten Designberatung und eine breite Palette von Farb- und Oberflächenoptionen, um das perfekte Stück für Ihren Raum zu schaffen.'
                  }
                </p>
              </FadeIn>
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
                    ? 'Să discutăm despre proiectul dumneavoastră'
                    : locale === 'en'
                    ? "Let's discuss your project"
                    : 'Lassen Sie uns über Ihr Projekt sprechen'
                  }
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-cream/70 text-body-lg mb-12">
                  {locale === 'ro'
                    ? 'Suntem aici să transformăm viziunea dumneavoastră în realitate.'
                    : locale === 'en'
                    ? 'We are here to turn your vision into reality.'
                    : 'Wir sind hier, um Ihre Vision in die Realität umzusetzen.'
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
