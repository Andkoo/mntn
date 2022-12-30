import { SocialIcon } from "react-social-icons";

import Header from "./Header";
import Footer from "./Footer";

type TDefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: TDefaultLayoutProps) => (
  <div className="relative">
    <Header />

    <main className="min-h-screen">{children}</main>

    <Footer />

    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-end p-4 gap-x-2">
      <SocialIcon
        url="https://github.com/Andkoo/mntn"
        target="_blank"
        bgColor="hsl(0, 0%, 80%)"
        fgColor="hsl(0, 0%, 40%)"
        className="!h-8 !w-8 opacity-50 transition-opacity hover:opacity-100"
      />
      <SocialIcon
        url="mailto:andrejmikulicka95@gmail.com"
        target="_blank"
        bgColor="hsl(0, 0%, 80%)"
        fgColor="hsl(0, 0%, 40%)"
        className="!h-8 !w-8 opacity-50 transition-opacity hover:opacity-100"
      />
    </div>
  </div>
);

export default DefaultLayout;
