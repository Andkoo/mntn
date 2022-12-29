import Head from "next/head";

import { Articles, Hero } from "~/sections/Home";

const Home = () => {
  return (
    <>
      <Head>
        <title>MNTN</title>
        <meta
          name="description"
          content="Be prepared for the Mountains and beyond!"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Hero />
      <Articles />
    </>
  );
};

export default Home;