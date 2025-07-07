import { fetchAPI } from '@/lib/api';
import { GET_ALL_POSTS } from '@/lib/graphql';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const SITE_URL = 'https://pagcorcasino.ph';

export const metadata: Metadata = {
  title: 'Casino Blog - Guides, Tips & Latest News',
  description:
    'Read the latest casino guides, gambling tips, bonus strategies, and industry news for Philippine online casinos. Updated regularly by our experts.',
  keywords: [
    'casino blog',
    'gambling tips Philippines',
    'casino guides',
    'online casino news',
    'casino bonus tips',
  ],
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    type: 'website',
    title: 'Casino Blog - Guides, Tips & Latest News',
    description:
      'Read the latest casino guides, gambling tips, bonus strategies, and industry news for Philippine online casinos.',
    url: `${SITE_URL}/blog`,
    siteName: 'PAGCOR Casino Reviews',
  },
};

function BlogBreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function BlogPage() {
  const data = await fetchAPI(GET_ALL_POSTS);
  const posts = data?.posts?.nodes ?? [];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <BlogBreadcrumbSchema />

      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-8">
        <ol className="flex items-center gap-1">
          <li>
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          </li>
          <li><span className="mx-1">/</span></li>
          <li><span className="text-muted-foreground">Blog</span></li>
        </ol>
      </nav>

      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground">
          Casino <span className="text-primary">Blog</span>
        </h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Guides, strategies, and the latest news from the world of online casinos.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-center text-muted-foreground">No posts found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card overflow-hidden group hover:border-primary/30 transition-colors duration-200"
            >
              {post.featuredImage?.node?.sourceUrl ? (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.featuredImage.node.altText || post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
              ) : (
                <div className="h-48 bg-muted flex items-center justify-center">
                  <svg className="w-12 h-12 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
              )}

              <div className="p-6">
                {post.categories?.nodes?.[0] && (
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {post.categories.nodes[0].name}
                  </span>
                )}
                <h2 className="mt-2 text-lg font-semibold text-foreground group-hover:text-foreground transition-colors line-clamp-2">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <div
                    className="mt-2 text-sm text-muted-foreground line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                )}
                <p className="mt-4 text-xs text-muted-foreground">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
