import type { RequestHandler } from './$types';
import { PUBLIC_BASE_URL } from '$env/static/public';
import * as sitemap from 'super-sitemap';

export const prerender = true;

export const GET: RequestHandler = () => {
  return sitemap.response({
    origin: PUBLIC_BASE_URL,
  });
};
