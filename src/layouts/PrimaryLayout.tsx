import React, { FC, ReactNode } from 'react';

// import Footer from './Footer';
import Navbar from './Navbar';

interface Props {
  children: ReactNode;
}

const PrimaryLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="use-container-layout pb-10">
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
};
export default PrimaryLayout;
