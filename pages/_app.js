import "../styles/index.css";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { FormspreeProvider } from "@formspree/react";
import { Header } from "../components/header";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return (_) => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <FormspreeProvider project={process.env.NEXT_PUBLIC_FORMSPREE_PROJECT_ID}>
      {router.route != "/thanks" && <Header />}
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </FormspreeProvider>
  );
}

export default MyApp;
