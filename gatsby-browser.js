/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import ScrollingProvider from './src/components/ScrollingProvider';
import './src/styles/global.scss';
import './src/styles/typography.scss';

export const wrapRootElement = ({ element }) => (
  <ScrollingProvider>{element}</ScrollingProvider>
);
