import { useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations";
import { Helmet } from "../components/helmet";

export const Thanks = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <>
      <Helmet title="Thanks!" />
      <motion.div
        className="flex flex-col w-full min-h-screen h-full justify-center mx-auto max-w-screen-lg px-5 lg:px-0"
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
        variants={stagger}
      >
        <motion.h1
          className="text-4xl sm:text-6xl font-black"
          variants={fadeInUp}
        >
          Thank you!
        </motion.h1>
        <motion.p
          className="text-4xl sm:text-6xl font-black"
          variants={fadeInUp}
        >
          We'll be in touch soon. 😊
        </motion.p>
      </motion.div>
    </>
  );
};

export default Thanks;
