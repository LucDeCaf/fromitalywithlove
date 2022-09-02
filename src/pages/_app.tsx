import { SSRProvider } from "react-bootstrap";
import Head from "next/head";
import "../styles/global.scss";
import "../styles/custom-bootstrap.scss";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="From Italy, With Love" key="title" />
        <title>From Italy, With Love</title>
      </Head>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
