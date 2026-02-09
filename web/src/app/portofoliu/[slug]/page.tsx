import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

// Temporary static data - will be replaced with Sanity
const projects: Record<
  string,
  {
    title: string;
    description: string;
    woodType: string;
    images: string[];
    details?: string[];
  }
> = {
  "casa-utu": {
    title: "Casa Utu",
    description:
      "Construcție din lemn masiv de brad, realizată cu atenție la fiecare detaliu. Un proiect care demonstrează că tradiția și confortul modern pot coexista armonios în mijlocul naturii.",
    woodType: "Brad masiv",
    images: ["/images/portfolio/casa-utu.jpg"],
    details: [
      "Structură din lemn masiv de brad",
      "Finisaje naturale rezistente la intemperii",
      "Design personalizat în armonie cu natura",
    ],
  },
  "scara-emil": {
    title: "Scară interioară Emil",
    description:
      "Scară din stejar masiv cu trepte curbate la bază, realizată cu precizie artizanală. Fiecare detaliu reflectă măiestria transilvăneană și pasiunea pentru lemn.",
    woodType: "Stejar masiv",
    images: ["/images/portfolio/scara-emil.jpg"],
    details: [
      "Trepte din stejar masiv cu curbură elegantă",
      "Finisaj cu ulei natural",
      "Montaj și ajustare la fața locului",
    ],
  },
  "masa-stejar": {
    title: "Masă din stejar",
    description:
      "O masă impunătoare din stejar masiv, unde fibra naturală a lemnului este protagonista. Grosimea blatului și finisajul cu ulei natural evidențiază caracterul unic al fiecărei piese.",
    woodType: "Stejar masiv",
    images: ["/images/portfolio/masa-stejar.jpg"],
    details: [
      "Blat masiv din stejar cu fibră vizibilă",
      "Finisaj cu ulei natural",
      "Picioare din metal pentru contrast modern",
    ],
  },
  "balcon-lemn": {
    title: "Balcon din lemn",
    description:
      "Balustradă și structură de balcon din lemn masiv, integrată armonios în arhitectura casei. Lemnul tratată asigură durabilitate și estetică pe termen lung.",
    woodType: "Lemn masiv",
    images: ["/images/portfolio/balcon.jpg"],
    details: [
      "Balustradă din lemn masiv tratat",
      "Structură rezistentă la intemperii",
      "Design tradițional adaptat modern",
    ],
  },
  "scara-casa-a": {
    title: "Scară Casa A",
    description:
      "Scară elegantă din stejar masiv cu mână curentă sculptată. Designul minimalist pune în valoare calitatea materialului și precizia execuției.",
    woodType: "Stejar masiv",
    images: ["/images/portfolio/scara-casa-a.jpg"],
    details: [
      "Trepte și contratrpte din stejar masiv",
      "Mână curentă sculptată din lemn masiv",
      "Integrare perfectă cu podeaua existentă",
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return {
      title: "Proiect negăsit | Trend Wood",
    };
  }

  return {
    title: `${project.title} | Trend Wood`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function ProiectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="pt-20 md:pt-24">
        {/* Hero Image */}
        <section className="relative h-[60vh] min-h-[500px]">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
        </section>

        {/* Project Info */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <nav className="mb-8">
                <Link
                  href="/portofoliu"
                  className="text-stone hover:text-forest transition-colors text-small"
                >
                  &larr; Înapoi la portofoliu
                </Link>
              </nav>

              {/* Title */}
              <h1 className="font-display text-h1 text-charcoal mb-4">
                {project.title}
              </h1>

              {/* Wood Type */}
              <p className="text-forest font-medium mb-8">{project.woodType}</p>

              {/* Description */}
              <p className="text-stone text-body-lg mb-12">
                {project.description}
              </p>

              {/* Details */}
              {project.details && (
                <div className="border-t border-border pt-8">
                  <h2 className="font-display text-h3 text-charcoal mb-6">
                    Detalii proiect
                  </h2>
                  <ul className="space-y-3">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-stone">
                        <span className="w-1.5 h-1.5 rounded-full bg-forest mt-2.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 bg-forest text-cream">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-h2 text-cream mb-6">
                Vreți ceva similar?
              </h2>
              <p className="text-cream/80 text-body-lg mb-10">
                Să discutăm despre proiectul dumneavoastră.
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
