import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Read the terms and conditions for using PAGCOR Casino Reviews. By using our website, you agree to these terms.',
  alternates: { canonical: 'https://pagcorcasino.ph/terms' },
};

export default function TermsPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-8">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
          <li><span className="mx-1">/</span></li>
          <li><span className="text-muted-foreground">Terms of Service</span></li>
        </ol>
      </nav>

      <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-2">
        Terms of <span className="text-primary">Service</span>
      </h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: February 2026</p>

      <div className="prose-casino space-y-6">
        <p>
          Welcome to PAGCOR Casino Reviews. By accessing and using our website at pagcorcasino.ph,
          you agree to be bound by these Terms of Service. If you do not agree to these terms, please
          do not use our website.
        </p>

        <h2>1. About Our Service</h2>
        <p>
          PAGCOR Casino Reviews is an informational website that provides reviews, ratings, and
          comparisons of online casinos licensed by the Philippine Amusement and Gaming Corporation
          (PAGCOR). We do not operate any casino or gambling services ourselves.
        </p>

        <h2>2. Age Restriction</h2>
        <p>
          You must be at least 18 years old to use this website. By using our website, you confirm
          that you are of legal gambling age in your jurisdiction. We do not condone or encourage
          underage gambling.
        </p>

        <h2>3. Informational Purpose Only</h2>
        <p>
          The content on this website is provided for informational and entertainment purposes only.
          We do not provide gambling services, accept bets, or process any financial transactions.
          Our reviews and ratings represent the opinions of our editorial team and should not be
          considered as financial or legal advice.
        </p>

        <h2>4. Affiliate Disclosure</h2>
        <p>
          Our website contains affiliate links to third-party casino websites. When you click on
          these links and register or make a deposit, we may receive a commission. This does not
          affect the cost to you or influence our editorial ratings and reviews.
        </p>

        <h2>5. Accuracy of Information</h2>
        <p>
          While we strive to provide accurate and up-to-date information, we cannot guarantee that
          all information on our website is complete, current, or error-free. Casino bonuses, terms,
          and conditions are subject to change by the casino operators at any time. Always verify
          information directly with the casino before making decisions.
        </p>

        <h2>6. Third-Party Websites</h2>
        <p>
          Our website contains links to external casino websites. We are not responsible for the
          content, privacy practices, or terms of service of these third-party websites. Visiting
          these sites is at your own risk.
        </p>

        <h2>7. Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, logos, and reviews, is the property
          of PAGCOR Casino Reviews and is protected by copyright law. You may not reproduce,
          distribute, or republish any content without our written permission.
        </p>

        <h2>8. Responsible Gambling</h2>
        <p>
          We promote responsible gambling and encourage all users to gamble within their means.
          If you believe you have a gambling problem, please visit our{' '}
          <Link href="/responsible-gambling">Responsible Gambling</Link> page for resources and support.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>
          PAGCOR Casino Reviews shall not be liable for any direct, indirect, incidental, or
          consequential damages arising from your use of this website or any third-party casino
          services accessed through our links. Gambling involves risk, and you are solely responsible
          for any losses incurred.
        </p>

        <h2>10. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms of Service at any time. Changes will be effective
          immediately upon posting. Your continued use of the website constitutes acceptance of the
          revised terms.
        </p>

        <h2>11. Governing Law</h2>
        <p>
          These Terms of Service are governed by the laws of the Republic of the Philippines.
          Any disputes arising from these terms shall be resolved in the courts of the Philippines.
        </p>

        <h2>12. Contact</h2>
        <p>
          For questions about these Terms of Service, please{' '}
          <Link href="/contact">contact us</Link>.
        </p>
      </div>
    </article>
  );
}
