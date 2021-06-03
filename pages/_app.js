import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { FormspreeProvider } from "@formspree/react";
import { Header } from "../components/header";
import { useAnalyticsInstance } from "../hooks/useAnalytics";

import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  useAnalyticsInstance();
  const router = useRouter();

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
