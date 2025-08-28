import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - Who We Are',
  description:
    'Learn about PAGCOR Casino Reviews - the Philippines\' most trusted source for online casino reviews, ratings, and expert recommendations.',
  alternates: { canonical: 'https://pagcorcasino.ph/about' },
};

export default function AboutPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-8">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
          <li><span className="mx-1">/</span></li>
          <li><span className="text-muted-foreground">About Us</span></li>
        </ol>
      </nav>

      <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
        About <span className="text-primary">PAGCOR Casino Reviews</span>
      </h1>

      <div className="prose-casino space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          PAGCOR Casino Reviews is the Philippines&apos; leading independent platform for online casino reviews.
          Our mission is to help Filipino players find safe, licensed, and trustworthy online casinos
          regulated by the Philippine Amusement and Gaming Corporation (PAGCOR).
        </p>

        <h2>Our Mission</h2>
        <p>
          We believe every player deserves transparent, unbiased information before choosing where to play.
          Our team of experienced gambling industry experts thoroughly reviews each casino, testing their
          games, bonuses, payment methods, customer support, and security measures to provide you with
          accurate and up-to-date recommendations.
        </p>

        <h2>What We Do</h2>
        <ul>
          <li><strong>In-Depth Reviews</strong> &mdash; We personally test every casino we recommend, evaluating game quality, user experience, and payout speeds.</li>
          <li><strong>Bonus Analysis</strong> &mdash; We break down welcome bonuses, wagering requirements, and promotional offers so you know exactly what you&apos;re getting.</li>
          <li><strong>Safety First</strong> &mdash; We only list casinos that hold valid PAGCOR licenses and use industry-standard encryption to protect your data.</li>
          <li><strong>Regular Updates</strong> &mdash; Our reviews are updated weekly to reflect changes in bonuses, game selections, and casino policies.</li>
        </ul>

        <h2>Our Review Process</h2>
        <p>
          Every casino on our site goes through a rigorous evaluation process. We create real accounts,
          make real deposits, play real games, and test withdrawal speeds. We evaluate customer support
          responsiveness, mobile compatibility, and the fairness of terms and conditions. Only casinos
          that meet our high standards make it to our recommended list.
        </p>
        <p>
          Learn more about our detailed evaluation criteria on our{' '}
          <Link href="/how-we-rate">How We Rate</Link> page.
        </p>

        <h2>Our Team</h2>
        <p>
          Our team consists of gambling industry professionals with over a decade of combined experience
          in online casino operations, game development, and regulatory compliance. We understand the
          Philippine online gambling landscape inside and out, and we use this expertise to guide our readers
          toward the best possible gaming experiences.
        </p>

        <h2>Editorial Independence</h2>
        <p>
          While we may earn commissions through affiliate partnerships with the casinos we review, this
          never influences our ratings or recommendations. Our editorial team operates independently, and
          our reviews are based solely on merit. A casino with a generous affiliate program will never
          receive a higher rating than it deserves.
        </p>

        <div className="mt-10 p-6 bg-muted rounded-lg border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-3">Have Questions?</h3>
          <p className="text-muted-foreground mb-4">
            We&apos;re always happy to hear from our readers. Whether you have a question about a casino,
            want to suggest a review, or need help with responsible gambling resources, don&apos;t hesitate to reach out.
          </p>
          <Link href="/contact" className="btn-outline text-sm">
            Contact Us
          </Link>
        </div>
      </div>
    </article>
  );
}
