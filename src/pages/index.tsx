import React from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import Container from '../components/Container';
import MainSection from '../components/Sections/MainSection';
import CoursesSection from '../components/Sections/CoursesSection';
import SpecialtiesSection from '../components/Sections/SpecialtiesSection';
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
