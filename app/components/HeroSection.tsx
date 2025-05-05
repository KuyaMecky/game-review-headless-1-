'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-36">
      <div className="absolute inset-0 bg-hero-gradient" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
            Find the Best Casinos
            <br className="hidden md:block" />
            {' '}Licensed by <span className="text-primary">PAGCOR</span>
          </h1>
        </motion.div>

        <motion.p
          className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Expert reviews, exclusive bonuses, and trusted ratings for
          the Philippines&apos; top online casinos.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#casinos" className="btn-primary text-sm px-6 py-3">
            View Top Casinos
          </a>
          <Link href="/blog" className="btn-outline text-sm px-6 py-3">
            Read Our Blog
          </Link>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {['PAGCOR Licensed', 'Expert Reviewed', 'Updated Weekly'].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
