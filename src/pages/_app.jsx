import Head from "next/head";
import FinalNavbar from "../components/FinalNavbar";
import { SSRProvider } from "react-bootstrap";
import "../styles/global.scss";
import "../styles/custom-bootstrap.scss";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>From Italy, With Love</title>
      </Head>
      <FinalNavbar />
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
