import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import packageInfo from '@root/package.json';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt">
        <Head>
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Iron Linux" />
          <meta name="build version" content={packageInfo.version} />
          <link rel="icon" href="https://rocketseat.com.br/favicon.ico" />
        </Head>
        <body className="bg-secondary">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
