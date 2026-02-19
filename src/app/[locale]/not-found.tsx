import { Link } from '@/lib/i18n/routing'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <>
      <Header locale="ro" />
      <main className="min-h-[70vh] flex items-center justify-center bg-cream">
        <Container className="text-center py-20">
          <h1 className="font-display text-[120px] md:text-[180px] text-forest/20 leading-none mb-4">
            404
          </h1>
          <h2 className="font-display text-h2 text-charcoal mb-6">
            Pagina nu a fost găsită
          </h2>
          <p className="text-body text-charcoal/70 mb-10 max-w-md mx-auto">
            Ne pare rău, dar pagina pe care o căutați nu există sau a fost mutată.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button>Acasă</Button>
            </Link>
            <Link href="/portofoliu">
              <Button variant="secondary">Portofoliu</Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary">Contact</Button>
            </Link>
          </div>
        </Container>
      </main>
      <Footer locale="ro" />
    </>
  )
}
