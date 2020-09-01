import { Header } from "./header";

export const Layout = ({ children, FooterComponent }) => {
  return (
    <>
      <div className="container m-auto max-w-screen-lg px-5 md:px-10 xl:px-0">
        <Header />
        <main className="pb-12 sm:pb-16 md:pb-20 lg:pb-32">{children}</main>
      </div>
      <FooterComponent />
    </>
  );
};
