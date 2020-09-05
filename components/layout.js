import { motion } from "framer-motion";

export const Layout = ({ children, FooterComponent }) => {
  return (
    <>
      <div className="container m-auto max-w-screen-lg px-5 md:px-6 xl:px-0">
        <main className="pb-12 sm:pb-16 md:pb-20 lg:pb-32">{children}</main>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <FooterComponent />
      </motion.div>
    </>
  );
};
