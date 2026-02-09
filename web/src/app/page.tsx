import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <>
      <Header transparent />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          {/* Background Image */}
          <Image
            src="/images/portfolio/casa-utu.jpg"
            alt="Casă din lemn în pădure"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-charcoal/50" />

          <Container className="relative z-10 text-center py-32">
            {/* Large Hero Logo */}
            <FadeIn duration={0.8}>
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

            <FadeIn delay={0.3}>
              <p className="font-display text-h3 md:text-h2 text-cream max-w-3xl mx-auto text-balance">
                Aici, lemnul primește un nume: al tău.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="mt-6 text-body-lg text-cream/70 max-w-xl mx-auto">
                Mobilier din lemn masiv, realizat cu rigoare transilvăneană.
              </p>
            </FadeIn>

            <FadeIn delay={0.7}>
              <div className="mt-10">
                <Button href="/contact" size="large">
                  Hai să vorbim
                </Button>
              </div>
            </FadeIn>
          </Container>

          {/* Scroll indicator */}
          <FadeIn delay={1} className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-cream/40"
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
        </section>

        {/* Intro Section */}
        <section className="py-24 md:py-32">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <FadeIn>
                <blockquote className="font-display text-h2 text-charcoal text-balance">
                  &bdquo;Sunt dulgheri care taie lemnul și dulgheri care îl simt.&rdquo;
                </blockquote>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="mt-8 text-body-lg text-stone max-w-2xl mx-auto">
                  La Trend Wood, alegem fiecare scândură, îi înțelegem nodurile și
                  îi respectăm fibra. Rezultatul? Lucrări care nu seamănă cu nimic
                  de pe piață.
                </p>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* Featured Works */}
        <section className="py-24 md:py-32 bg-hover">
          <Container>
            <h2 className="font-display text-h2 text-charcoal text-center mb-16">
              Lucrări recente
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { src: "/images/portfolio/scara-emil.jpg", title: "Scară interioară Emil", alt: "Scară din stejar masiv cu trepte curbate" },
                { src: "/images/portfolio/masa-stejar.jpg", title: "Masă din stejar", alt: "Blat de masă din stejar masiv" },
                { src: "/images/portfolio/scara-casa-a.jpg", title: "Scară Casa A", alt: "Scară din stejar cu mână curentă" },
              ].map((work, i) => (
                <div
                  key={i}
                  className="group relative aspect-[4/3] overflow-hidden bg-border"
                >
                  <Image
                    src={work.src}
                    alt={work.alt}
                    fill
                    className="object-cover transition-transform duration-slow ease-smooth group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-medium" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-medium">
                    <h3 className="font-display text-lg text-cream">{work.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button href="/portofoliu" variant="secondary">
                Vezi toate lucrările
              </Button>
            </div>
          </Container>
        </section>

        {/* Values Section */}
        <section className="py-24 md:py-32">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              <div className="text-center">
                <h3 className="font-display text-h3 text-charcoal mb-4">
                  Lucrat manual
                </h3>
                <p className="text-stone">
                  Fiecare piesă este realizată cu atenție la detalii, folosind
                  tehnici tradiționale și unelte moderne.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-display text-h3 text-charcoal mb-4">
                  Personalizat
                </h3>
                <p className="text-stone">
                  Venim la dumneavoastră pentru măsurători și discuții, astfel
                  încât fiecare element să fie unic.
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-display text-h3 text-charcoal mb-4">
                  Durabil
                </h3>
                <p className="text-stone">
                  Îmbinări tradiționale executate cu precizie modernă. Piese
                  care vor dura generații.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-forest text-cream">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-h2 text-cream mb-6">
                Aveți un proiect în minte?
              </h2>
              <p className="text-cream/80 text-body-lg mb-10">
                Să discutăm despre cum putem transforma viziunea dumneavoastră
                în realitate.
              </p>
              <Button
                href="/contact"
                variant="secondary"
                className="border-cream text-cream hover:bg-cream hover:text-forest"
              >
                Contactați-ne
              </Button>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
