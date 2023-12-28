import type { RequestHandler } from './$types';
import { PUBLIC_BASE_URL } from '$env/static/public';

export const prerender = true;

export const GET: RequestHandler = () => {
  return new Response(`\
User-agent: *
Allow: /

Sitemap: ${PUBLIC_BASE_URL}/sitemap.xml
`);
};
