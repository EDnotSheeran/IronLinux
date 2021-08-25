import React from 'react';
import Head from 'next/head';

import RocketseatLogo from '../assets/rocketseat.svg';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen pb-2 flex flex-col justify-center items-center h-screen">
      <Head>
        <title>Homepage</title>
      </Head>

      <RocketseatLogo />
      <h1 className="text-5xl text-primary mt-10 font-roboto font-bold">
        ReactJS Structure
      </h1>
      <p className="text-2xl text-gray-50 mt-6 leading-8 font-roboto">
        A ReactJS + Next.js structure made by Rocketseat.
      </p>
    </div>
  );
};

export default Home;
