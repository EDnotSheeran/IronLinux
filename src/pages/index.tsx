import React from 'react';
import Head from 'next/head';
import Layout from '@components/Layout';
import {
  MainSection,
  CoursesSection,
  SpecialtiesSection,
  ContactSection,
  RecentPosts,
  NeedASuperHero,
  Certification,
} from '@components/Sections';

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Página Inicial</title>
      </Head>
      <MainSection />
      <SpecialtiesSection />
      <CoursesSection />
      <Certification />
      <NeedASuperHero />
      <RecentPosts />
      <ContactSection />
    </Layout>
  );
};

export default Home;
