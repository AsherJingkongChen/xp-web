import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { building } from '$app/environment';

export const trailingSlash = 'never';

export const load: PageLoad = () => {
  if (!building) {
    error(404, 'Not Found');
  }
};
