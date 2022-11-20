import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { ReactElement } from 'react';

import { PrimaryLayout } from '@/layouts';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <PrimaryLayout>
        <Component {...pageProps} />
      </PrimaryLayout>
    </ThemeProvider>
  );
}

export default MyApp;
