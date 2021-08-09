import "../styles/_globals.css";
import App from "next/app";
import Head from "next/head";
import { createContext } from "react";
import { fetchApi } from "@/lib/api";
import { getStrapiMedia } from "@/lib/media";

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const { global } = pageProps;
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
      </Head>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const global = await fetchApi("/global");
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
