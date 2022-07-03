import "../styles/global.css";

import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Lisa Patel</title>
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
