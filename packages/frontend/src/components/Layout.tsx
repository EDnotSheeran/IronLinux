import React from 'react';
import { Navbar, Footer } from '@components';
import NavContext from '@context/Navigation';

const Layout: React.FC = ({ children }) => {
  return (
    <NavContext>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </NavContext>
  );
};

export default Layout;
