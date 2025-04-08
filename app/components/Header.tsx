'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#casinos', label: 'Casinos' },
  { href: '/blog', label: 'Blog' },
  { href: '/how-we-rate', label: 'How We Rate' },
  { href: '/about', label: 'About' },
];

export default function Header({ logoUrl }: { logoUrl?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
          scrolled
            ? 'bg-background/95 backdrop-blur-sm border-b border-border'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              {logoUrl ? (
                <Image
                  src={logoUrl}
                  alt="PAGCOR Casino Reviews"
                  width={140}
                  height={40}
                  className="h-8 w-auto object-contain"
                  priority
                />
              ) : (
                <>
                  <span className="text-lg font-semibold text-foreground">PAGCOR</span>
                  <span className="text-sm text-muted-foreground hidden sm:block">Casino Reviews</span>
                </>
              )}
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden overflow-hidden"
              >
                <div className="border-t border-border px-4 py-3 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-muted-foreground hover:text-foreground text-sm font-medium py-2 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
      <div className="h-16" />
    </>
  );
}
