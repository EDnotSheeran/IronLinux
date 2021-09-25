import React, { ReactElement } from 'react';
import Head from 'next/head';
import '@styles/tailwind.css';
import { Layout } from '@components';
import Router from 'next/router';
import NProgress from 'nprogress';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  // Encapsula a pagina em um layout provido pela função getLayout de cada pagina
  const getLayout =
    Component.getLayout ?? ((page: ReactElement) => <Layout>{page}</Layout>);

  // NProgress.configure({

  // });

  //
  Router.events.on('routeChangeStart', url => {
    NProgress.start();
    console.log(url);
  });

  //
  Router.events.on('routeChangeComplete', url => {
    NProgress.done();
    console.log(url);
  });

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
