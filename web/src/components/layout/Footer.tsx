import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const navigation = [
  { name: "Acasă", href: "/" },
  { name: "Despre Noi", href: "/despre-noi" },
  { name: "Servicii", href: "/servicii" },
  { name: "Portofoliu", href: "/portofoliu" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="relative block h-14 w-40">
              <Image
                src="/images/logo.png"
                alt="Trend Wood"
                fill
                className="object-contain"
              />
            </Link>
            <p className="mt-4 text-cream/70 text-body max-w-xs">
              Mobilier din lemn masiv, realizat cu rigoare transilvăneană și
              pasiune pentru detalii.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-lg font-medium text-cream mb-4">
              Navigare
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-cream/70 hover:text-cream transition-colors duration-fast"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-medium text-cream mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-cream/70">
              <li>
                <a
                  href="tel:+40724533675"
                  className="hover:text-cream transition-colors duration-fast"
                >
                  0724 533 675
                </a>
              </li>
              <li>
                <a
                  href="tel:+40731491811"
                  className="hover:text-cream transition-colors duration-fast"
                >
                  0731 491 811
                </a>
              </li>
              <li>
                <a
                  href="mailto:trendwoodconsult@gmail.com"
                  className="hover:text-cream transition-colors duration-fast"
                >
                  trendwoodconsult@gmail.com
                </a>
              </li>
              <li className="text-cream/50">Ciolpani, Ilfov</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-cream/10">
          <p className="text-cream/50 text-small">
            © {new Date().getFullYear()} Trend Wood Consult. Toate drepturile
            rezervate.
          </p>
        </div>
      </Container>
    </footer>
  );
}
