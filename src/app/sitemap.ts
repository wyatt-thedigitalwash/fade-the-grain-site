import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fadethegrainbarbershop.com';

  return [
    { url: baseUrl, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/barbers`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/gallery`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly' as const, priority: 0.8 },
  ].map(page => ({ ...page, lastModified: new Date() }));
}
