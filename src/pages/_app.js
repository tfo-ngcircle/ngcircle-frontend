import "../styles/_globals.scss";
import App from "next/app";
import Head from "next/head";
import { createContext } from "react";
import { fetchApi } from "@/lib/api";
import { getStrapiMedia } from "@/lib/media";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
  const { global } = pageProps;
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

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
  const global = await fetchApi(`/global?_locale=${ctx.ctx.locale}`);
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
