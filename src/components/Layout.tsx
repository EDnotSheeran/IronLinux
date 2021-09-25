import React from 'react';
import { Navbar, Footer } from '@components';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
