import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read our privacy policy to understand how PAGCOR Casino Reviews collects, uses, and protects your personal information.',
  alternates: { canonical: 'https://pagcorcasino.ph/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-8">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
          <li><span className="mx-1">/</span></li>
          <li><span className="text-muted-foreground">Privacy Policy</span></li>
        </ol>
      </nav>

      <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-2">
        Privacy <span className="text-primary">Policy</span>
      </h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: February 2026</p>

      <div className="prose-casino space-y-6">
        <p>
          PAGCOR Casino Reviews (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information
          when you visit our website pagcorcasino.ph.
        </p>

        <h2>Information We Collect</h2>
        <h3>Information You Provide</h3>
        <p>We may collect information you voluntarily provide, including:</p>
        <ul>
          <li>Name and email address when you contact us</li>
          <li>Any messages or feedback you submit through our contact form</li>
          <li>Newsletter subscription information</li>
        </ul>

        <h3>Automatically Collected Information</h3>
        <p>When you visit our website, we automatically collect certain information, including:</p>
        <ul>
          <li>IP address and browser type</li>
          <li>Device type and operating system</li>
          <li>Pages visited and time spent on pages</li>
          <li>Referring website addresses</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our website</li>
          <li>Respond to your inquiries and customer service requests</li>
          <li>Send newsletters and promotional materials (with your consent)</li>
          <li>Analyze website usage to improve user experience</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Cookies</h2>
        <p>
          We use cookies and similar tracking technologies to track activity on our website. Cookies
          are small data files stored on your device. You can configure your browser to refuse cookies,
          but some parts of the website may not function properly.
        </p>
        <p>We use the following types of cookies:</p>
        <ul>
          <li><strong>Essential Cookies</strong> &mdash; Required for the website to function properly.</li>
          <li><strong>Analytics Cookies</strong> &mdash; Help us understand how visitors interact with our website.</li>
          <li><strong>Advertising Cookies</strong> &mdash; Used to deliver relevant advertisements and track ad performance.</li>
        </ul>

        <h2>Third-Party Links</h2>
        <p>
          Our website contains links to third-party casino websites. We are not responsible for the
          privacy practices or content of these external sites. We encourage you to read the privacy
          policies of any third-party sites you visit.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal information. However,
          no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute
          security of your data.
        </p>

        <h2>Your Rights</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your personal data</li>
          <li>Opt out of marketing communications</li>
          <li>Lodge a complaint with a data protection authority</li>
        </ul>

        <h2>Children&apos;s Privacy</h2>
        <p>
          Our website is not intended for individuals under the age of 18. We do not knowingly collect
          personal information from minors. If you believe we have collected data from a minor, please
          contact us immediately.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by
          posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please{' '}
          <Link href="/contact">contact us</Link>.
        </p>
      </div>
    </article>
  );
}
