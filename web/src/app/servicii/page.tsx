import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Servicii | Trend Wood",
  description:
    "Mobilier la comandă, consultanță design, măsurători la domiciliu. Descoperă serviciile Trend Wood.",
};

const services = [
  {
    title: "Mobilier la comandă",
    description:
      "Mese, scaune, dulapuri, paturi - orice visați, putem crea. Fiecare piesă este unică, realizată după specificațiile dumneavoastră.",
  },
  {
    title: "Consultanță design",
    description:
      "Vă ajutăm să găsiți soluțiile perfecte pentru spațiul dumneavoastră. Consiliem în alegerea esenței de lemn, finisajelor și detaliilor.",
  },
  {
    title: "Măsurători la domiciliu",
    description:
      "Venim la dumneavoastră pentru măsurători precise și discuții despre proiect. Astfel, fiecare element va fi personalizat perfect.",
  },
  {
    title: "Gamă largă de finisaje",
    description:
      "De la uleiuri naturale la lacuri, de la tonuri deschise la culori închise - oferim o paletă variată de opțiuni pentru finisarea lemnului.",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Consultare",
    description: "Discutăm despre viziunea și nevoile dumneavoastră.",
  },
  {
    step: 2,
    title: "Design",
    description: "Creăm proiectul și alegem materialele împreună.",
  },
  {
    step: 3,
    title: "Execuție",
    description: "Realizăm piesa cu atenție la fiecare detaliu.",
  },
  {
    step: 4,
    title: "Livrare",
    description: "Instalăm și finalizăm lucrarea la dumneavoastră.",
  },
];

export default function Servicii() {
  return (
    <>
      <Header />

      <main className="pt-20 md:pt-24">
        {/* Page Hero */}
        <section className="py-24 md:py-32 bg-hover">
          <Container>
            <div className="max-w-3xl">
              <h1 className="font-display text-h1 text-charcoal mb-6">
                Servicii
              </h1>
              <p className="text-stone text-body-lg">
                De la idee la realitate - vă însoțim în fiecare etapă a
                proiectului dumneavoastră de mobilier din lemn masiv.
              </p>
            </div>
          </Container>
        </section>

        {/* Services List */}
        <section className="py-24 md:py-32">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="p-8 bg-hover border border-border"
                >
                  <h3 className="font-display text-h3 text-charcoal mb-4">
                    {service.title}
                  </h3>
                  <p className="text-stone">{service.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Process */}
        <section className="py-24 md:py-32 bg-charcoal text-cream">
          <Container>
            <h2 className="font-display text-h2 text-cream text-center mb-16">
              Procesul nostru
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-cream/30 rounded-full">
                    <span className="font-display text-lg text-cream">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-cream mb-2">
                    {step.title}
                  </h3>
                  <p className="text-cream/70 text-small">{step.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Personalization */}
        <section className="py-24 md:py-32">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-h2 text-charcoal mb-8">
                Venim la dumneavoastră
              </h2>
              <p className="text-stone text-body-lg mb-6">
                Călătorim la client pentru măsurători și discuții, astfel încât
                fiecare element să fie personalizat conform dorințelor și
                nevoilor dumneavoastră.
              </p>
              <p className="text-stone text-body-lg">
                Oferim consultanță design și o gamă variată de opțiuni de culori
                și finisaje pentru a crea piesa perfectă pentru spațiul
                dumneavoastră.
              </p>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 bg-forest text-cream">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-h2 text-cream mb-6">
                Să discutăm despre proiectul dumneavoastră
              </h2>
              <p className="text-cream/80 text-body-lg mb-10">
                Suntem aici să transformăm viziunea dumneavoastră în realitate.
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
