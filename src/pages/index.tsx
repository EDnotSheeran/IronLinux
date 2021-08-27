import React from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import Container from '../components/Container';
import MainSection from '../components/MainSection';
import CoursesSection from '../components/CoursesSection';
import SpecialtiesSection from '../components/SpecialtiesSection';
const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Página Inicial</title>
      </Head>
      <Navbar />
      <Container>
        <MainSection />
        <SpecialtiesSection />
        <CoursesSection />
      </Container>
    </>
  );
};

export default Home;
