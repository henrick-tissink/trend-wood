import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Portofoliu | Trend Wood",
  description:
    "Descoperă lucrările noastre - mobilier din lemn masiv realizat cu măiestrie și pasiune.",
};

// Temporary static data - will be replaced with Sanity
const projects = [
  {
    slug: "casa-utu",
    title: "Casa Utu",
    image: "/images/portfolio/casa-utu.jpg",
    woodType: "Brad masiv",
  },
  {
    slug: "scara-emil",
    title: "Scară interioară Emil",
    image: "/images/portfolio/scara-emil.jpg",
    woodType: "Stejar masiv",
  },
  {
    slug: "masa-stejar",
    title: "Masă din stejar",
    image: "/images/portfolio/masa-stejar.jpg",
    woodType: "Stejar masiv",
  },
  {
    slug: "balcon-lemn",
    title: "Balcon din lemn",
    image: "/images/portfolio/balcon.jpg",
    woodType: "Lemn masiv",
  },
  {
    slug: "scara-casa-a",
    title: "Scară Casa A",
    image: "/images/portfolio/scara-casa-a.jpg",
    woodType: "Stejar masiv",
  },
];

export default function Portofoliu() {
  return (
    <>
      <Header />

      <main className="pt-20 md:pt-24">
        {/* Page Hero */}
        <section className="py-24 md:py-32 bg-hover">
          <Container>
            <div className="max-w-3xl">
              <h1 className="font-display text-h1 text-charcoal mb-6">
                Portofoliu
              </h1>
              <p className="text-stone text-body-lg">
                Lucrări care vorbesc de la sine. Fiecare piesă spune o poveste
                unică.
              </p>
            </div>
          </Container>
        </section>

        {/* Project Grid */}
        <section className="py-24 md:py-32">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/portofoliu/${project.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-border mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-slow ease-smooth group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <h3 className="font-display text-h3 text-charcoal group-hover:text-forest transition-colors duration-fast">
                    {project.title}
                  </h3>
                  <p className="text-stone text-small mt-1">
                    {project.woodType}
                  </p>
                </Link>
              ))}
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
                Să vorbim despre proiectul dumneavoastră.
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
