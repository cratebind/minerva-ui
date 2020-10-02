import React from 'react';
import { AnimationStyles, ReachGlobalStyles } from 'minerva-ui';
import 'nextra-theme-docs/style.css';
import '../global.css';

export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      <ReachGlobalStyles />
      <AnimationStyles />
      <Component {...pageProps} />
    </>
  );
}
