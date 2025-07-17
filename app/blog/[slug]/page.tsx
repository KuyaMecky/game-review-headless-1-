import { fetchAPI } from '@/lib/api';
import { GET_POST_BY_SLUG, GET_ALL_POSTS } from '@/lib/graphql';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const SITE_URL = 'https://pagcorcasino.ph';

export async function generateStaticParams() {
  const data = await fetchAPI(GET_ALL_POSTS);
  const posts = data?.posts?.nodes ?? [];
  return posts.map((post: any) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = await fetchAPI(GET_POST_BY_SLUG(params.slug));
  const post = data?.post;
  if (!post) return {};

  const seo = post.seo;
  const fallbackDesc = post.excerpt
    ? post.excerpt.replace(/<[^>]*>/g, '').trim().slice(0, 160)
    : `Read ${post.title} on PAGCOR Casino Reviews blog.`;
  const url = `${SITE_URL}/blog/${params.slug}`;
  const image = seo?.opengraphImage?.sourceUrl || post.featuredImage?.node?.sourceUrl;

  const title = seo?.title || post.title;
  const description = seo?.metaDesc || fallbackDesc;

  return {
    title,
    description,
    keywords: seo?.focuskw ? [seo.focuskw] : undefined,
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
      publishedTime: post.date,
      authors: post.author?.node?.name ? [post.author.node.name] : undefined,
      ...(image && { images: [{ url: image, alt: post.title }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: seo?.twitterTitle || title,
      description: seo?.twitterDescription || description,
      ...(image && { images: [image] }),
    },
  };
}

function ArticleSchema({ post, slug }: { post: any; slug: string }) {
  if (post.seo?.schema?.raw) {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: post.seo.schema.raw }}
      />
    );
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    url: `${SITE_URL}/blog/${slug}`,
    datePublished: post.date,
    description: post.excerpt
      ? post.excerpt.replace(/<[^>]*>/g, '').trim().slice(0, 160)
      : undefined,
    author: {
      '@type': 'Person',
      name: post.author?.node?.name || 'PAGCOR Casino Reviews',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PAGCOR Casino Reviews',
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${slug}`,
    },
    ...(post.featuredImage?.node?.sourceUrl && {
      image: post.featuredImage.node.sourceUrl,
    }),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BlogPostBreadcrumbSchema({ title, slug }: { title: string; slug: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: title, item: `${SITE_URL}/blog/${slug}` },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const data = await fetchAPI(GET_POST_BY_SLUG(params.slug));
  const post = data?.post;

  if (!post) return notFound();

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ArticleSchema post={post} slug={params.slug} />
      <BlogPostBreadcrumbSchema title={post.title} slug={params.slug} />

      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-8">
        <ol className="flex items-center flex-wrap gap-1">
          <li>
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          </li>
          <li><span className="mx-1">/</span></li>
          <li>
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          </li>
          <li><span className="mx-1">/</span></li>
          <li><span className="text-muted-foreground">{post.title}</span></li>
        </ol>
      </nav>

      <header className="mb-10">
        {post.categories?.nodes?.[0] && (
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            {post.categories.nodes[0].name}
          </span>
        )}
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-foreground leading-tight">
          {post.title}
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          {post.author?.node?.name && <span>By {post.author.node.name}</span>}
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </header>

      {post.featuredImage?.node?.sourceUrl && (
        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-10">
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div
        className="prose-casino"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="mt-16 pt-8 border-t border-border">
        <Link href="/blog" className="btn-outline text-sm">
          &larr; Back to Blog
        </Link>
      </div>
    </article>
  );
}
