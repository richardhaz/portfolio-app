import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { ReactElement } from 'react';

import { NextPageWithLayout } from '@/interfaces';
import { PrimaryLayout } from '@/layouts';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout): ReactElement {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {/* <div className="h-screen bg-mainBgLight bg-cover bg-center bg-no-repeat dark:bg-mainBgDark"> */}
      <div className="main-bg-gradient"></div>
      <div className="min-h-screen w-full bg-mainBgLight bg-cover bg-fixed bg-center bg-no-repeat dark:bg-mainBgDark">
        <PrimaryLayout>{getLayout(<Component {...pageProps} />)}</PrimaryLayout>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
