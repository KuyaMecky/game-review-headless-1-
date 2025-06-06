import { fetchAPI } from '@/lib/api';
import { GET_CASINO_BY_SLUG, GET_ALL_CASINOS } from '@/lib/graphql';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import StarRating from '@/app/components/StarRating';
import BonusBadge from '@/app/components/BonusBadge';

const SITE_URL = 'https://pagcorcasino.ph';

export async function generateStaticParams() {
  const data = await fetchAPI(GET_ALL_CASINOS);
  const casinos = data?.casinos?.nodes ?? [];
  return casinos.map((casino: any) => ({ slug: casino.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = await fetchAPI(GET_CASINO_BY_SLUG(params.slug));
  const casino = data?.casino;
  if (!casino) return {};

  const seo = casino.seo;
  const fallbackTitle = `${casino.title} Review 2026 - Bonus, Rating & Expert Analysis`;
  const fallbackDesc = `Read our expert review of ${casino.title}. Overall rating: ${casino.casinoFields.overallRating || 0}/5. ${casino.casinoFields.bonusOffer ? `Welcome bonus: ${casino.casinoFields.bonusOffer}.` : ''} PAGCOR licensed & verified.`;
  const url = `${SITE_URL}/reviews/${params.slug}`;
  const image = seo?.opengraphImage?.sourceUrl || casino.featuredImage?.node?.sourceUrl;

  const title = seo?.title || fallbackTitle;
  const description = seo?.metaDesc || fallbackDesc;

  return {
    title,
    description,
    keywords: seo?.focuskw
      ? [seo.focuskw, `${casino.title} review`, `${casino.title} bonus`, 'PAGCOR casino review', 'online casino Philippines']
      : [`${casino.title} review`, `${casino.title} bonus`, `${casino.title} rating`, 'PAGCOR casino review', 'online casino Philippines'],
    alternates: {
      canonical: seo?.canonical || url,
    },
    robots: {
      index: seo?.metaRobotsNoindex !== 'noindex',
      follow: seo?.metaRobotsNofollow !== 'nofollow',
    },
    openGraph: {
      type: 'article',
      title: seo?.opengraphTitle || title,
      description: seo?.opengraphDescription || description,
      url,
      siteName: 'PAGCOR Casino Reviews',
      ...(image && { images: [{ url: image, alt: casino.title }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: seo?.twitterTitle || title,
      description: seo?.twitterDescription || description,
      ...(image && { images: [image] }),
    },
  };
}

function ReviewSchema({ casino, slug }: { casino: any; slug: string }) {
  // Use Yoast schema if available, otherwise use custom schema
  if (casino.seo?.schema?.raw) {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: casino.seo.schema.raw }}
      />
    );
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    name: `${casino.title} Review`,
    url: `${SITE_URL}/reviews/${slug}`,
    description: `Expert review of ${casino.title} - a PAGCOR licensed online casino.`,
    author: {
      '@type': 'Organization',
      name: 'PAGCOR Casino Reviews',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PAGCOR Casino Reviews',
      url: SITE_URL,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: casino.casinoFields.overallRating || 0,
      bestRating: 5,
      worstRating: 0,
    },
    itemReviewed: {
      '@type': 'Organization',
      name: casino.title,
      url: 'https://www.fairplay.ph/?inviteCode=b59beb16&redirect=register',
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BreadcrumbSchema({ title, slug }: { title: string; slug: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Casinos', item: `${SITE_URL}/#casinos` },
      { '@type': 'ListItem', position: 3, name: `${title} Review`, item: `${SITE_URL}/reviews/${slug}` },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function CasinoPage({ params }: { params: { slug: string } }) {
  const data = await fetchAPI(GET_CASINO_BY_SLUG(params.slug));
  const casino = data?.casino;

  if (!casino) return notFound();

  const { title, content, casinoFields } = casino;
  const { overallRating, bonusOffer, recommendation, compatibility, establishedYear, license, minDeposit, paymentMethods, withdrawalTime, customerSupport, gameProviders } = casinoFields;

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ReviewSchema casino={casino} slug={params.slug} />
      <BreadcrumbSchema title={title} slug={params.slug} />

      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-8">
        <ol className="flex items-center flex-wrap gap-1">
          <li>
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          </li>
          <li><span className="mx-1">/</span></li>
          <li>
            <Link href="/#casinos" className="hover:text-foreground transition-colors">Casinos</Link>
          </li>
          <li><span className="mx-1">/</span></li>
          <li>
            <span className="text-muted-foreground">{title}</span>
          </li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            {title} <span className="text-primary">Review</span>
          </h1>
          <div className="flex items-center gap-4 mb-8">
            <StarRating rating={overallRating || 0} size="lg" showNumber />
            <span className="text-sm text-muted-foreground">Expert Rating</span>
          </div>

          {content ? (
            <div className="prose-casino" dangerouslySetInnerHTML={{ __html: content }} />
          ) : (
            <p className="text-muted-foreground">Review content coming soon.</p>
          )}
        </div>

        <aside className="lg:col-span-1">
          <div className="card p-6 sticky top-24 space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Info</h3>

            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                Overall Rating
              </p>
              <StarRating rating={overallRating || 0} size="md" showNumber />
            </div>

            {recommendation && (
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Recommendation
                </p>
                <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${
                  recommendation === 'Highly Recommended' ? 'text-green-500' :
                  recommendation === 'Recommended' ? 'text-blue-500' :
                  recommendation === 'Average' ? 'text-yellow-500' :
                  'text-red-500'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${
                    recommendation === 'Highly Recommended' ? 'bg-green-500' :
                    recommendation === 'Recommended' ? 'bg-blue-500' :
                    recommendation === 'Average' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`} />
                  {recommendation}
                </span>
              </div>
            )}

            {bonusOffer && (
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Welcome Bonus
                </p>
                <BonusBadge bonus={bonusOffer} />
              </div>
            )}

            {compatibility && (
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Compatibility
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {compatibility.split(', ').map((device: string) => (
                    <span key={device} className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-md">
                      {device}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {license && (
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  License
                </p>
                <p className="text-sm text-foreground font-medium">{license}</p>
              </div>
            )}

            {establishedYear && (
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Established
                </p>
                <p className="text-sm text-foreground">{establishedYear}</p>
              </div>
            )}

            {minDeposit && (
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Min. Deposit
                </p>
                <p className="text-sm text-foreground">{minDeposit}</p>
              </div>
            )}

            {paymentMethods && (
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Payment Methods
                </p>
                <p className="text-sm text-foreground">{paymentMethods}</p>
              </div>
            )}

            {withdrawalTime && (
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Withdrawal Time
                </p>
                <p className="text-sm text-foreground">{withdrawalTime}</p>
              </div>
            )}

            {customerSupport && (
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Support
                </p>
                <p className="text-sm text-foreground">{customerSupport}</p>
              </div>
            )}

            <a
              href={`/go/${params.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center text-lg py-4"
            >
              Claim Bonus Now
            </a>

            <p className="text-xs text-muted-foreground text-center">
              18+. T&Cs apply. Gamble responsibly.
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
}
