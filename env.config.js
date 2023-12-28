/* Constants */

import { config } from 'dotenv';
import { join, resolve } from 'path';

export const PREVIEW_ORIGIN = 'http://localhost:4173';

/* Raw Environment Variables */

const { BUILD_ENV_DIR } = process.env;
const { BASE_URL } = config({
  path: BUILD_ENV_DIR
    ? resolve(BUILD_ENV_DIR, '.env')
    : undefined,
}).parsed ?? {
  BASE_URL: PREVIEW_ORIGIN,
};

/* Typed Environment Variables */

export const BUILD_BASE_URL = new URL(BASE_URL);
export const BUILD_BASE_PATH_UNSLASHED =
  BUILD_BASE_URL.pathname.replace(/\/$/, '');
export const BUILD_BASE_PATH_SLASHED = join(
  BUILD_BASE_URL.pathname,
  '/',
);
export const PREVIEW_BASE_URL = new URL(
  BUILD_BASE_URL.pathname,
  PREVIEW_ORIGIN,
);
