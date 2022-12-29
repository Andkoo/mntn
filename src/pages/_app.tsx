import { type AppType } from "next/dist/shared/lib/utils";
import localFont from "@next/font/local";

import { DefaultLayout } from "~/layouts";

import "../styles/globals.css";

const chronicleDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/ChronicleDisplay/ChronicleDisplay-SemiBold.otf",
      weight: "600",
    },
  ],
});

const gilroy = localFont({
  src: [
    {
      path: "../../public/fonts/Gilroy/Gilroy-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Gilroy/Gilroy-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/Gilroy/Gilroy-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/Gilroy/Gilroy-ExtraBold.ttf",
      weight: "800",
    },
  ],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${gilroy.style.fontFamily};
          --font-serif: ${chronicleDisplay.style.fontFamily};
        }
      `}</style>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
};

export default MyApp;
