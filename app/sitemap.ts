import { MetadataRoute } from 'next';
import { fetchAPI } from '@/lib/api';
import { GET_ALL_CASINOS, GET_ALL_POSTS } from '@/lib/graphql';

const SITE_URL = 'https://pagcorcasino.ph';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const casinoData = await fetchAPI(GET_ALL_CASINOS);
  const casinos = casinoData?.casinos?.nodes ?? [];

  const postData = await fetchAPI(GET_ALL_POSTS);
  const posts = postData?.posts?.nodes ?? [];

  const casinoUrls = casinos.map((casino: any) => ({
    url: `${SITE_URL}/reviews/${casino.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const postUrls = posts.map((post: any) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    ...casinoUrls,
    ...postUrls,
  ];
}
