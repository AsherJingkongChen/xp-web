import { PUBLIC_BASE_URL } from '$env/static/public';
import { text, type RequestHandler } from '@sveltejs/kit';

export const prerender = true;

export const GET: RequestHandler = () => {
  return text(
    `\
User-agent: *
Disallow: /404.html
Sitemap: ${new URL('sitemap.xml', PUBLIC_BASE_URL)}`,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    },
  );
};
