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
                        ? 'Este rigoarea științei împletită cu pasiune, care nu acceptă „merge și așa".'
                        : locale === 'en'
                        ? 'It is the rigor of science intertwined with passion, which does not accept "good enough".'
                        : 'Es ist die Strenge der Wissenschaft, verflochten mit Leidenschaft, die kein "gut genug" akzeptiert.'
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
                    ? 'Știm că obiectele care trec proba timpului se nasc cu răbdare, migală și o mână care ascultă povestea lemnului. Poate că suntem mai așezați, dar la noi nimic nu se face de mântuială.'
                    : locale === 'en'
                    ? 'We know that objects which stand the test of time are born with patience, care, and a hand that listens to the story of the wood. Perhaps we are more settled, but nothing is done carelessly here.'
                    : 'Wir wissen, dass Gegenstände, die den Test der Zeit bestehen, mit Geduld, Sorgfalt und einer Hand geboren werden, die der Geschichte des Holzes zuhört. Vielleicht sind wir ruhiger, aber bei uns wird nichts nachlässig gemacht.'
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
                        ? 'Unii doar taie lemnul; noi îl simțim sub degete. La Trend Wood, fiecare nod este o semnătură a naturii pe care o respectăm, alegând cu grijă scândura care va deveni parte din casa ta.'
                        : locale === 'en'
                        ? 'Some just cut the wood; we feel it under our fingers. At Trend Wood, each knot is a signature of nature that we respect, carefully choosing the board that will become part of your home.'
                        : 'Manche schneiden nur das Holz; wir fühlen es unter unseren Fingern. Bei Trend Wood ist jeder Ast eine Signatur der Natur, die wir respektieren, und wählen sorgfältig das Brett, das Teil Ihres Hauses wird.'
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
                        ? 'Aici transformăm materia primă în piesa dumneavoastră unică.'
                        : locale === 'en'
                        ? 'Here we transform raw material into your unique piece.'
                        : 'Hier verwandeln wir Rohmaterial in Ihr einzigartiges Stück.'
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
                    ? 'Fiecare proiect este personalizat. Transformați povestea dumneavoastră într-un proiect unic, alături de noi.'
                    : locale === 'en'
                    ? 'Every project is personalized. Transform your story into a unique project, together with us.'
                    : 'Jedes Projekt ist personalisiert. Verwandeln Sie Ihre Geschichte in ein einzigartiges Projekt, gemeinsam mit uns.'
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
