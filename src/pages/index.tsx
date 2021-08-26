import React from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import Container from '../components/Container';
import MainSection from '../components/MainSection';
const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Página Inicial</title>
      </Head>
      <Navbar />
      <Container>
        <MainSection />
      </Container>
    </>
  );
};

export default Home;
