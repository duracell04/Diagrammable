import type { AppProps } from "next/app";
import Head from "next/head";
import "@diagrammable/theme/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Diagrammable Classroom</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" sizes="any" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
