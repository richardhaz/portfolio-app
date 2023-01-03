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
      <div className="use-container">
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
};
export default PrimaryLayout;
