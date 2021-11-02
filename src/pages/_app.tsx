import React from 'react';
import Head from 'next/head';
import '@styles/tailwind.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Layout as HomeLayout } from '@components/home';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  // Verifica se a pagina pede um layout diferente
  const Layout = Component.Layout ?? HomeLayout;

  // Ao mudar de rota, mostra o progress bar
  Router.events.on('routeChangeStart', url => {
    NProgress.start();
  });

  // Ao terminar de mudar de rota, esconde o progress bar
  Router.events.on('routeChangeComplete', url => {
    NProgress.done();
  });

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
