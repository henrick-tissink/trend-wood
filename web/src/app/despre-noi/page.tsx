import Image from "next/image";
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Despre Noi | Trend Wood",
  description:
    "Povestea Trend Wood - rigoare transilvăneană și pasiune pentru lemnul masiv din 2020.",
};

export default function DespreNoi() {
  return (
    <>
      <Header />

      <main className="pt-20 md:pt-24">
        {/* Page Hero */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
          <Image
            src="/images/portfolio/masa-stejar.jpg"
            alt="Atelier Trend Wood"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal/50" />
          <Container className="relative z-10 text-center">
            <h1 className="font-display text-h1 text-cream">Despre Noi</h1>
          </Container>
        </section>

        {/* Origin Story */}
        <section className="py-24 md:py-32">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="font-display text-h2 text-charcoal mb-8">
                  Povestea noastră
                </h2>
                <div className="space-y-6 text-stone text-body-lg">
                  <p>
                    Ideea pentru Trend Wood a apărut în 2020 din cauza lipsei de
                    seriozitate de pe piață în ceea ce privește calitatea
                    produsului finit pentru mobilierul din lemn masiv.
                  </p>
                  <p>
                    Având abilitățile necesare pentru a face față celor mai
                    exigente așteptări, am decis să deschidem un mic atelier cu
                    ideea de a arăta că &bdquo;se poate și așa&rdquo;.
                  </p>
                  <p>
                    Este rigoarea transilvăneană împletită cu o pasiune care nu
                    acceptă &bdquo;așa e și așa rămâne&rdquo;.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] lg:aspect-square">
                <Image
                  src="/images/portfolio/scara-emil.jpg"
                  alt="Scară din lemn - exemplu de lucru"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* Philosophy */}
        <section className="py-24 md:py-32 bg-hover">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-h2 text-charcoal mb-8">
                Filosofia noastră
              </h2>
              <blockquote className="font-display text-h3 text-charcoal mb-8 text-balance">
                &bdquo;Nu ne lăudăm cu viteza de execuție (se știe că ardelenii
                sunt ceva mai domoali, dar în Ardeal nimic nu se face de
                mântuială) — știm că lucrurile bune cer timp, răbdare și o mână
                care respectă lemnul.&rdquo;
              </blockquote>
              <p className="text-stone text-body-lg">
                Suntem cea mai bună alternativă pentru cei care doresc mobilier
                de calitate din lemn masiv, cu finisaje și asamblare care fac
                diferența pe termen lung și asigură longevitate.
              </p>
            </div>
          </Container>
        </section>

        {/* Craftsmanship */}
        <section className="py-24 md:py-32">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 relative aspect-[4/3] lg:aspect-square">
                <Image
                  src="/images/portfolio/scara-casa-a.jpg"
                  alt="Detaliu lemn"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-display text-h2 text-charcoal mb-8">
                  Măiestria
                </h2>
                <div className="space-y-6 text-stone text-body-lg">
                  <p>
                    Sunt dulgheri care taie lemnul și dulgheri care îl simt. La
                    Trend Wood, alegem fiecare scândură, îi înțelegem nodurile
                    și îi respectăm fibra.
                  </p>
                  <p>
                    Rezultatul? Lucrări care nu seamănă cu nimic de pe piață.
                    Dacă căutați unicitate și o execuție care va sfida timpul,
                    ați ajuns unde trebuie.
                  </p>
                  <p className="font-display text-charcoal text-h3">
                    Aici, lemnul primește un nume: al dumneavoastră.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 bg-forest text-cream">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-h2 text-cream mb-6">
                Să creăm împreună
              </h2>
              <p className="text-cream/80 text-body-lg mb-10">
                Fiecare proiect este o poveste unică. Spuneți-ne pe a
                dumneavoastră.
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
