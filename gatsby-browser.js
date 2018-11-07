/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 * We load our styles and typefaces up front, so that we do not get a FOUC when SSR is rendered but not JS.
 */
exports.onClientEntry = () => {
// Host Google Fonts locally
  require('typeface-ubuntu');
  require('typeface-lato');

  require('./src/sass/styles.scss');
};
