import "../styles/index.css";
import { StaticKitProvider } from "@statickit/react";

function MyApp({ Component, pageProps }) {
  return (
    <StaticKitProvider site={process.env.NEXT_PUBLIC_STATICKIT_SITE_ID}>
      <Component {...pageProps} />
    </StaticKitProvider>
  );
}

export default MyApp;
