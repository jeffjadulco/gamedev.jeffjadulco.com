import Head from "next/head";
import { useRouter } from "next/router";
import { GA_TRACKING_ID } from "../lib/gtag";

const persistentTitle = "Jeff Jadulco | Game Developer Portfolio";

export const Helmet = ({ title, og }) => {
  const router = useRouter();
  const metadata = {
    title: title ? `${title} | ${persistentTitle}` : persistentTitle,
    image: "/og.png",
    description:
      "Jeff Jadulco is a game programmer with 5+ years of experience, specializing in multiplayer and online services.",
  };

  return (
    <Head>
      <title>{metadata.title}</title>
      <link rel="icon" href="/favicon.png" />
      <meta name="theme-color" content="#81E6D9" />
      <meta name="title" content={metadata.title} />
      <meta name="description" content={metadata.description} />
      <meta name="image" content="/og.png" />

      <meta property="og:title" content="Jeff Jadulco" />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:url" content={router.route} />
      <meta property="og:image" content={metadata.image} />
      <meta property="og:type" content="website" />

      <meta property="twitter:title" content="Jeff Jadulco" />
      <meta property="twitter:description" content={metadata.description} />
      <meta property="twitter:image" content={metadata.image} />
      <meta property="twitter:creator" content="@jeffjadulco" />
      <meta property="twitter:card" content="summary_large_image" />

      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </Head>
  );
};
