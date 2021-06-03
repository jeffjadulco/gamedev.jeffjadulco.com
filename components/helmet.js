import Head from "next/head";
import { useRouter } from "next/router";

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
        data-goatcounter={`https://${process.env.NEXT_PUBLIC_GOAT_COUNTER_CODE}.goatcounter.com/count`}
        data-goatcounter-settings='{"allow_local": true}'
        async={true}
        src="//gc.zgo.at/count.js"
      ></script>
    </Head>
  );
};
