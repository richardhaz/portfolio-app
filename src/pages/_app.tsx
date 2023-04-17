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
      {/* <div className="h-screen bg-main_bg_light bg-cover bg-center bg-no-repeat dark:bg-main_bg_dark"> */}
      <div className="main-bg-gradient"></div>
      <div className="min-h-screen w-full bg-[#f2f5f6]  bg-cover bg-fixed bg-center bg-no-repeat dark:bg-main_bg_dark">
        <PrimaryLayout>{getLayout(<Component {...pageProps} />)}</PrimaryLayout>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
