import { Footer } from "./footer";
import { Header } from "./header";

export const Layout = ({ children, FooterComponent }) => {
  return (
    <div>
      <div className="container m-auto">
        <Header />
        <main className="pb-32">{children}</main>
      </div>
      <Footer Widget={FooterComponent} />
    </div>
  );
};
