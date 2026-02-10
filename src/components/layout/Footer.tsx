import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Link } from '@/lib/i18n/routing'
import type { Locale } from '@/lib/i18n/config'

const navigationItems = {
  ro: [
    { name: 'Acasă', href: '/' },
    { name: 'Despre Noi', href: '/despre-noi' },
    { name: 'Servicii', href: '/servicii' },
    { name: 'Portofoliu', href: '/portofoliu' },
    { name: 'Contact', href: '/contact' },
  ],
  en: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ],
  de: [
    { name: 'Startseite', href: '/' },
    { name: 'Über Uns', href: '/uber-uns' },
    { name: 'Dienstleistungen', href: '/dienstleistungen' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Kontakt', href: '/kontakt' },
  ],
}

const footerText = {
  ro: {
    description:
      'Mobilier din lemn masiv, realizat cu rigoare transilvăneană și pasiune pentru detalii. Fiecare piesă este unică.',
    navigation: 'Navigare',
    contact: 'Contact',
    location: 'Ciolpani, Ilfov',
    copyright: 'Trend Wood Consult. Toate drepturile rezervate.',
    madeWith: 'Realizat cu pasiune în România',
  },
  en: {
    description:
      'Solid wood furniture, crafted with Transylvanian rigor and passion for details. Each piece is unique.',
    navigation: 'Navigation',
    contact: 'Contact',
    location: 'Ciolpani, Ilfov, Romania',
    copyright: 'Trend Wood Consult. All rights reserved.',
    madeWith: 'Made with passion in Romania',
  },
  de: {
    description:
      'Massivholzmöbel, gefertigt mit siebenbürgischer Präzision und Leidenschaft für Details. Jedes Stück ist einzigartig.',
    navigation: 'Navigation',
    contact: 'Kontakt',
    location: 'Ciolpani, Ilfov, Rumänien',
    copyright: 'Trend Wood Consult. Alle Rechte vorbehalten.',
    madeWith: 'Mit Leidenschaft in Rumänien gefertigt',
  },
}

type FooterProps = {
  locale?: Locale
}

export function Footer({ locale = 'ro' }: FooterProps) {
  const navigation = navigationItems[locale] || navigationItems.ro
  const text = footerText[locale] || footerText.ro
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-cream">
      {/* Main Footer Content */}
      <div className="py-20 md:py-24 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand */}
            <div className="md:col-span-5 lg:col-span-4">
              <Link href="/" className="relative block h-16 w-44">
                <Image
                  src="/images/logo.png"
                  alt="Trend Wood"
                  fill
                  className="object-contain"
                />
              </Link>
              <p className="mt-6 text-cream/60 text-body leading-relaxed max-w-sm">
                {text.description}
              </p>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3 lg:col-span-2 lg:col-start-7">
              <h3 className="font-display text-h4 text-cream mb-6">
                {text.navigation}
              </h3>
              <ul className="space-y-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href as any}
                      className="text-cream/60 hover:text-cream transition-colors duration-fast"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-4 lg:col-span-3">
              <h3 className="font-display text-h4 text-cream mb-6">
                {text.contact}
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+40724533675"
                    className="text-cream/60 hover:text-cream transition-colors duration-fast flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    0724 533 675
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/40724533675"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/60 hover:text-cream transition-colors duration-fast flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:trendwoodconsult@gmail.com"
                    className="text-cream/60 hover:text-cream transition-colors duration-fast flex items-center gap-2"
                  >
                    <svg
                      className="w-4 h-4 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    trendwoodconsult@gmail.com
                  </a>
                </li>
                <li className="text-cream/40 flex items-center gap-2 pt-2">
                  <svg
                    className="w-4 h-4 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {text.location}
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-cream/10">
        <Container>
          <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-cream/40 text-small">
              &copy; {currentYear} {text.copyright}
            </p>
            <p className="text-cream/30 text-small">{text.madeWith}</p>
          </div>
        </Container>
      </div>
    </footer>
  )
}
