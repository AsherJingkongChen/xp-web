import { building, dev } from '$app/environment';
import type { Handle } from '@sveltejs/kit';
import { minify, type Options } from 'html-minifier';

const htmlMinifierOptions: Options = {
  caseSensitive: true,
  collapseBooleanAttributes: true,
  collapseInlineTagWhitespace: true,
  collapseWhitespace: true,
  conservativeCollapse: false,
  decodeEntities: true,
  html5: true,
  keepClosingSlash: false,
  minifyCSS: true,
  minifyJS: {
    module: true,
  },
  minifyURLs: true,
  preserveLineBreaks: false,
  removeAttributeQuotes: true,
  removeComments: true,
  removeEmptyAttributes: false,
  removeEmptyElements: false,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  removeTagWhitespace: true,
  sortAttributes: true,
  sortClassName: true,
  useShortDoctype: false,
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
