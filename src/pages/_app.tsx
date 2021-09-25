import React, { ReactElement } from 'react';
import Head from 'next/head';
import '@styles/tailwind.css';
import { Layout } from '@components';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout ?? ((page: ReactElement) => <Layout>{page}</Layout>);
  return getLayout(
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
