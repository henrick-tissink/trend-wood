import Image from 'next/image'
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

export async function AboutPage({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: 'about' })
  const tCommon = await getTranslations({ locale, namespace: 'common' })

  return (
    <>
      <Header transparent locale={locale} />

      <main>
        {/* Page Hero */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/portfolio/masa-stejar.jpg"
              alt="Trend Wood workshop"
              fill
              priority
              className="object-cover animate-ken-burns"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/50 to-charcoal/70" />
          <Container className="relative z-10 text-center">
            <FadeIn duration={0.8}>
              <h1 className="font-display text-hero text-cream">{t('hero.title')}</h1>
            </FadeIn>
          </Container>
        </section>

        {/* Origin Story */}
        <section className="py-section-lg md:py-section-xl bg-cream">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              <div>
                <FadeIn>
                  <h2 className="font-display text-h1 text-charcoal mb-10">
                    {t('story.title')}
                  </h2>
                </FadeIn>
                <div className="space-y-8 text-stone text-body-lg">
                  <FadeIn delay={0.1}>
                    <p>
                      {locale === 'ro'
                        ? 'Ideea pentru Trend Wood a apărut în 2020 din cauza lipsei de seriozitate de pe piață în ceea ce privește calitatea produsului finit pentru mobilierul din lemn masiv.'
                        : locale === 'en'
                        ? 'The idea for Trend Wood emerged in 2020 due to the lack of seriousness on the market regarding the quality of the finished product for solid wood furniture.'
                        : 'Die Idee für Trend Wood entstand 2020 aufgrund des Mangels an Ernsthaftigkeit auf dem Markt in Bezug auf die Qualität des fertigen Produkts für Massivholzmöbel.'
                      }
                    </p>
                  </FadeIn>
                  <FadeIn delay={0.15}>
                    <p>
                      {locale === 'ro'
                        ? 'Având abilitățile necesare pentru a face față celor mai exigente așteptări, am decis să deschidem un mic atelier cu ideea de a arăta că „se poate și așa".'
                        : locale === 'en'
                        ? 'Having the necessary skills to meet the most demanding expectations, we decided to open a small workshop with the idea of showing that "it can be done this way too".'
                        : 'Mit den notwendigen Fähigkeiten, um den anspruchsvollsten Erwartungen gerecht zu werden, beschlossen wir, eine kleine Werkstatt zu eröffnen, um zu zeigen, dass "es auch so geht".'
                      }
                    </p>
                  </FadeIn>
                  <FadeIn delay={0.2}>
                    <p>
                      {locale === 'ro'
                        ? 'Este rigoarea transilvăneană împletită cu o pasiune care nu acceptă „așa e și așa rămâne".'
                        : locale === 'en'
                        ? 'It is Transylvanian rigor intertwined with a passion that does not accept "that\'s how it is and that\'s how it stays".'
                        : 'Es ist siebenbürgische Strenge, verflochten mit einer Leidenschaft, die kein "so ist es und so bleibt es" akzeptiert.'
                      }
                    </p>
                  </FadeIn>
                </div>
              </div>
              <FadeIn delay={0.1} direction="right">
                <div className="relative aspect-[4/3] lg:aspect-[3/4]">
                  <Image
                    src="/images/portfolio/scara-emil.jpg"
                    alt="Wooden stairs - example of work"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* Philosophy */}
        <section className="py-section-lg md:py-section-xl bg-charcoal">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <FadeIn>
                <h2 className="font-display text-h1 text-cream mb-12">
                  {t('philosophy.title')}
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <blockquote className="font-display text-quote text-cream/90 mb-12 text-balance">
                  &bdquo;{locale === 'ro'
                    ? 'Nu ne lăudăm cu viteza de execuție (se știe că ardelenii sunt ceva mai domoali, dar în Ardeal nimic nu se face de mântuială) — știm că lucrurile bune cer timp, răbdare și o mână care respectă lemnul.'
                    : locale === 'en'
                    ? "We don't boast about execution speed (it's known that Transylvanians are a bit more laid-back, but in Transylvania nothing is done carelessly) — we know that good things take time, patience, and a hand that respects the wood."
                    : 'Wir prahlen nicht mit der Ausführungsgeschwindigkeit (es ist bekannt, dass Siebenbürger etwas gemächlicher sind, aber in Siebenbürgen wird nichts nachlässig gemacht) — wir wissen, dass gute Dinge Zeit, Geduld und eine Hand brauchen, die das Holz respektiert.'
                  }&rdquo;
                </blockquote>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="text-cream/60 text-body-lg max-w-2xl mx-auto">
                  {locale === 'ro'
                    ? 'Suntem cea mai bună alternativă pentru cei care doresc mobilier de calitate din lemn masiv, cu finisaje și asamblare care fac diferența pe termen lung și asigură longevitate.'
                    : locale === 'en'
                    ? 'We are the best alternative for those who want quality solid wood furniture, with finishes and assembly that make a long-term difference and ensure longevity.'
                    : 'Wir sind die beste Alternative für diejenigen, die hochwertige Massivholzmöbel wünschen, mit Oberflächen und Montage, die langfristig einen Unterschied machen und Langlebigkeit gewährleisten.'
                  }
                </p>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* Craftsmanship */}
        <section className="py-section-lg md:py-section-xl bg-cream">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              <FadeIn direction="left">
                <div className="order-2 lg:order-1 relative aspect-[4/3] lg:aspect-[3/4]">
                  <Image
                    src="/images/portfolio/scara-casa-a.jpg"
                    alt="Wood detail"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </FadeIn>
              <div className="order-1 lg:order-2">
                <FadeIn>
                  <h2 className="font-display text-h1 text-charcoal mb-10">
                    {locale === 'ro' ? 'Măiestria' : locale === 'en' ? 'Craftsmanship' : 'Handwerkskunst'}
                  </h2>
                </FadeIn>
                <div className="space-y-8 text-stone text-body-lg">
                  <FadeIn delay={0.1}>
                    <p>
                      {locale === 'ro'
                        ? 'Sunt dulgheri care taie lemnul și dulgheri care îl simt. La Trend Wood, alegem fiecare scândură, îi înțelegem nodurile și îi respectăm fibra.'
                        : locale === 'en'
                        ? 'There are carpenters who cut wood and carpenters who feel it. At Trend Wood, we choose each board, understand its knots and respect its grain.'
                        : 'Es gibt Zimmerleute, die Holz schneiden, und Zimmerleute, die es fühlen. Bei Trend Wood wählen wir jedes Brett aus, verstehen seine Äste und respektieren seine Maserung.'
                      }
                    </p>
                  </FadeIn>
                  <FadeIn delay={0.15}>
                    <p>
                      {locale === 'ro'
                        ? 'Rezultatul? Lucrări care nu seamănă cu nimic de pe piață. Dacă căutați unicitate și o execuție care va sfida timpul, ați ajuns unde trebuie.'
                        : locale === 'en'
                        ? 'The result? Works that are unlike anything on the market. If you are looking for uniqueness and execution that will defy time, you have come to the right place.'
                        : 'Das Ergebnis? Werke, die einzigartig auf dem Markt sind. Wenn Sie Einzigartigkeit und eine Ausführung suchen, die der Zeit trotzt, sind Sie hier richtig.'
                      }
                    </p>
                  </FadeIn>
                  <FadeIn delay={0.2}>
                    <p className="font-display text-charcoal text-h3">
                      {locale === 'ro'
                        ? 'Aici, lemnul primește un nume: al dumneavoastră.'
                        : locale === 'en'
                        ? 'Here, wood gets a name: yours.'
                        : 'Hier bekommt Holz einen Namen: Ihren.'
                      }
                    </p>
                  </FadeIn>
                </div>
              </div>
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
                    ? 'Să creăm împreună'
                    : locale === 'en'
                    ? "Let's create together"
                    : 'Lassen Sie uns gemeinsam schaffen'
                  }
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-cream/70 text-body-lg mb-12">
                  {locale === 'ro'
                    ? 'Fiecare proiect este o poveste unică. Spuneți-ne pe a dumneavoastră.'
                    : locale === 'en'
                    ? 'Every project is a unique story. Tell us yours.'
                    : 'Jedes Projekt ist eine einzigartige Geschichte. Erzählen Sie uns Ihre.'
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
