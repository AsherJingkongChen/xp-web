import { building, dev } from '$app/environment';
import type { Handle } from '@sveltejs/kit';
import { minify, type Options } from 'html-minifier';

const htmlMinifierOptions: Options = {
  collapseBooleanAttributes: true,
  collapseInlineTagWhitespace: true,
  collapseWhitespace: true,
  decodeEntities: true,
  html5: true,
  minifyCSS: true,
  minifyJS: {
    module: true,
  },
  minifyURLs: true,
  removeAttributeQuotes: true,
  removeComments: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  removeTagWhitespace: true,
  sortAttributes: true,
  sortClassName: true,
};

export const handle: Handle = async ({
  event,
  resolve,
}) => {
  const response = await resolve(event, {
    transformPageChunk({ done, html }) {
      if (building && !dev && done) {
        return minify(html, htmlMinifierOptions);
      } else {
        return html;
      }
    },
  });

  return response;
};
