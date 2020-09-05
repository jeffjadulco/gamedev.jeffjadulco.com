import Link from "next/link";
import { motion } from "framer-motion";
import { easing } from "../animations";

const fadeInUp = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Header = () => {
  return (
    <motion.div
      className="container m-auto max-w-screen-lg px-5 md:px-6 xl:px-0"
      initial="initial"
      animate="animate"
      variants={stagger}
      exit={{ opacity: 0 }}
    >
      <div className="py-8 md:py-16 flex md:justify-start">
        <motion.span
          className="text-lg sm:text-2xl font-bold text-gray-600"
          variants={fadeInUp}
        >
          jeffjadulco/
        </motion.span>
        <motion.span
          className="text-lg sm:text-2xl font-bold text-teal-300 hover:text-gray-600 focus:text-gray-600 transition-colors duration-200"
          variants={fadeInUp}
        >
          <Link href="/">
            <a>gamedev</a>
          </Link>
        </motion.span>
      </div>
    </motion.div>
  );
};
