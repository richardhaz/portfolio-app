import React, { FC, ReactNode } from 'react';

import { sizeConfig } from '@/config';

// import Footer from './Footer';
import Navbar from './Navbar';

interface Props {
  children: ReactNode;
}

const PrimaryLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div
        className="use-container-layout"
        style={{ height: `calc(100vh - ${sizeConfig().navbar.height})` }}
      >
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
};
export default PrimaryLayout;
