import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '@components/Layout';
import { useRouter } from 'next/router';
import {
  MainSection,
  CoursesSection,
  SpecialtiesSection,
  ContactSection,
  RecentPosts,
  NeedASuperHero,
  Certification,
  Varieties,
} from '@components/Sections';
import Container from '@components/Container';
const Home: React.FC = () => {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>Página Inicial</title>
      </Head>
      <Container>
        <h1>Você está vendo o curso do ID: {router.query.id} </h1>
      </Container>
    </Layout>
  );
};

export default Home;
