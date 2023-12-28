import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { building } from '$app/environment';

export const trailingSlash = 'never';

export const load: PageServerLoad = () => {
  if (!building) {
    error(404, 'Not Found');
  }
};
