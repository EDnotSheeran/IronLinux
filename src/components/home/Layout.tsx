import React from 'react';
import { Navbar, Footer } from '@components/home';

const HomeLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
