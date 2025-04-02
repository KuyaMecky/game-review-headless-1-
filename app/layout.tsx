import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { fetchAPI } from '@/lib/api';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Providers from '@/app/components/Providers';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const SITE_URL = 'https://pagcorcasino.ph';
const SITE_NAME = 'PAGCOR Casino Reviews';

const GET_SITE_BRANDING = `{
  siteIconUrl
  siteLogoUrl
}`;

async function getSiteBranding() {
  try {
    const data = await fetchAPI(GET_SITE_BRANDING);
    return {
      iconUrl: data?.siteIconUrl || undefined,
      logoUrl: data?.siteLogoUrl || undefined,
    };
  } catch {
    return { iconUrl: undefined, logoUrl: undefined };
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const { iconUrl } = await getSiteBranding();

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: 'Best PAGCOR Licensed Casinos 2026 | Expert Reviews & Ratings',
      template: '%s | PAGCOR Casino Reviews',
    },
    description:
      'Find the best PAGCOR-licensed online casinos in the Philippines for 2026. Expert reviews, exclusive bonuses, honest ratings, and trusted recommendations.',
    keywords: [
      'PAGCOR casino',
      'online casino Philippines',
      'PAGCOR licensed casino',
      'best online casino 2026',
      'casino reviews Philippines',
      'online gambling Philippines',
      'casino bonus Philippines',
      'trusted online casino',
      'PAGCOR approved casino',
      'Philippine casino reviews',
    ],
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    icons: iconUrl
      ? {
          icon: iconUrl,
          apple: iconUrl,
        }
      : undefined,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_PH',
      url: SITE_URL,
      siteName: SITE_NAME,
      title: 'Best PAGCOR Licensed Casinos 2026 | Expert Reviews & Ratings',
      description:
        'Find the best PAGCOR-licensed online casinos in the Philippines for 2026. Expert reviews, exclusive bonuses, honest ratings, and trusted recommendations.',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Best PAGCOR Licensed Casinos 2026 | Expert Reviews & Ratings',
      description:
        'Find the best PAGCOR-licensed online casinos in the Philippines for 2026. Expert reviews, exclusive bonuses, and trusted recommendations.',
    },
    alternates: {
      canonical: SITE_URL,
    },
    other: {
      'google-site-verification': 'YOUR_GOOGLE_VERIFICATION_CODE',
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { logoUrl } = await getSiteBranding();

  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body className="font-sans bg-background text-foreground min-h-screen flex flex-col">
        <Providers>
          <Header logoUrl={logoUrl} />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
