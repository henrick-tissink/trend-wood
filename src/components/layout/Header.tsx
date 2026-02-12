'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher'
import { Link } from '@/lib/i18n/routing'
import { cn } from '@/lib/utils'
import { ease, duration } from '@/lib/animations'
import { CONTACT, NAVIGATION } from '@/lib/constants'
import type { Locale } from '@/lib/i18n/config'

interface HeaderProps {
  transparent?: boolean
  locale?: Locale
}

export function Header({ transparent = false, locale = 'ro' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navigation = NAVIGATION[locale] || NAVIGATION.ro

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const isTransparent = transparent && !scrolled

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all',
          scrolled ? 'duration-fast' : 'duration-medium',
          isTransparent
            ? 'bg-transparent'
            : 'bg-cream/95 backdrop-blur-md shadow-sm'
        )}
      >
        <Container>
          <nav
            className={cn(
              'flex items-center justify-between transition-all',
              scrolled ? 'duration-fast' : 'duration-medium',
              scrolled ? 'h-16 md:h-20' : 'h-20 md:h-28'
            )}
          >
            {/* Logo */}
            <Link
              href="/"
              className={cn(
                'relative transition-all',
                scrolled ? 'duration-fast' : 'duration-medium',
                scrolled
                  ? 'h-10 w-28 md:h-12 md:w-36'
                  : 'h-14 w-36 md:h-16 md:w-48 lg:h-[72px] lg:w-56'
              )}
            >
              <Image
                src="/images/logo.png"
                alt="Trend Wood"
                fill
                className={cn(
                  'object-contain transition-all duration-medium',
                  isTransparent ? '' : 'invert'
                )}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              <ul className="flex items-center gap-8 lg:gap-10">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        'relative text-body transition-colors duration-fast group',
                        isTransparent
                          ? 'text-cream/90 hover:text-cream'
                          : 'text-charcoal hover:text-forest'
                      )}
                    >
                      {item.name}
                      {/* Underline animation */}
                      <span
                        className={cn(
                          'absolute -bottom-1 left-0 w-0 h-px transition-all duration-medium ease-smooth group-hover:w-full',
                          isTransparent ? 'bg-cream' : 'bg-forest'
                        )}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
              <LanguageSwitcher
                locale={locale}
                variant={isTransparent ? 'light' : 'dark'}
              />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <LanguageSwitcher
                locale={locale}
                variant={mobileMenuOpen ? 'light' : isTransparent ? 'light' : 'dark'}
              />
              <button
                type="button"
                className={cn(
                  'p-2 transition-colors duration-fast relative z-50',
                  mobileMenuOpen
                    ? 'text-cream'
                    : isTransparent
                    ? 'text-cream'
                    : 'text-charcoal'
                )}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <div className="w-6 h-6 relative">
                  {/* Animated hamburger to X */}
                  <motion.span
                    className={cn(
                      'absolute left-0 w-6 h-[1.5px] rounded-full',
                      mobileMenuOpen
                        ? 'bg-cream'
                        : isTransparent
                        ? 'bg-cream'
                        : 'bg-charcoal'
                    )}
                    initial={false}
                    animate={{
                      top: mobileMenuOpen ? '50%' : '25%',
                      rotate: mobileMenuOpen ? 45 : 0,
                      translateY: mobileMenuOpen ? '-50%' : 0,
                    }}
                    transition={{ duration: 0.3, ease: ease.smooth }}
                  />
                  <motion.span
                    className={cn(
                      'absolute left-0 top-1/2 -translate-y-1/2 w-6 h-[1.5px] rounded-full',
                      mobileMenuOpen
                        ? 'bg-cream'
                        : isTransparent
                        ? 'bg-cream'
                        : 'bg-charcoal'
                    )}
                    initial={false}
                    animate={{
                      opacity: mobileMenuOpen ? 0 : 1,
                      scaleX: mobileMenuOpen ? 0 : 1,
                    }}
                    transition={{ duration: 0.2, ease: ease.smooth }}
                  />
                  <motion.span
                    className={cn(
                      'absolute left-0 w-6 h-[1.5px] rounded-full',
                      mobileMenuOpen
                        ? 'bg-cream'
                        : isTransparent
                        ? 'bg-cream'
                        : 'bg-charcoal'
                    )}
                    initial={false}
                    animate={{
                      top: mobileMenuOpen ? '50%' : '75%',
                      rotate: mobileMenuOpen ? -45 : 0,
                      translateY: mobileMenuOpen ? '-50%' : 0,
                    }}
                    transition={{ duration: 0.3, ease: ease.smooth }}
                  />
                </div>
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden bg-charcoal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration.fast, ease: ease.smooth }}
          >
            {/* Content */}
            <div className="flex flex-col items-center justify-center h-full">
              <nav>
                <ul className="flex flex-col items-center gap-8">
                  {navigation.map((item, i) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{
                        duration: duration.default,
                        delay: i * 0.08,
                        ease: ease.smooth,
                      }}
                    >
                      <Link
                        href={item.href}
                        className="block font-display text-h1 text-cream hover:text-cream/70 transition-colors duration-fast"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Contact info at bottom */}
              <motion.div
                className="absolute bottom-12 left-0 right-0 flex flex-col items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: duration.default,
                  delay: 0.4,
                  ease: ease.smooth,
                }}
              >
                {CONTACT.phones.map((phone) => (
                  <a
                    key={phone.tel}
                    href={`tel:${phone.tel}`}
                    className="text-cream/60 hover:text-cream transition-colors duration-fast"
                  >
                    {phone.number} - {phone.name}
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
