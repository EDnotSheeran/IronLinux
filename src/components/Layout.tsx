import React from 'react';
import Navbar from '@components/Navbar';
import Container from '@components/Container';
import Footer from '@components/Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
