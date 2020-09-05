import "../styles/index.css";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { StaticKitProvider } from "@statickit/react";
import { Header } from "../components/header";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <StaticKitProvider site={process.env.NEXT_PUBLIC_STATICKIT_SITE_ID}>
      {router.route != "/thanks" && <Header />}
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </StaticKitProvider>
  );
}

export default MyApp;
