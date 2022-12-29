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
  </div>
);

export default DefaultLayout;
