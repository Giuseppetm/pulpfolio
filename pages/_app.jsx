import { useRef, useEffect } from 'react';
import '@/styles/globals.scss';
import Head from "next/head";
import fonts from "@/utils/fonts";

const MyApp = ({ Component, pageProps }) => {

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    const theme = localStorage.getItem("theme");
    if (theme) {
      body.classList.add(`theme-${theme}`);
    } else {
      localStorage.setItem("theme", "default");
      body.classList.add(`theme-${theme}`);
    }
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Giuseppe Del Campo" />
        <link rel="icon" href="favicon.jpeg" />
      </Head>
      <main className={fonts.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default MyApp;
