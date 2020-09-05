import { Helmet } from "../components/helmet";
import { Layout } from "../components/layout";
import { FeaturedCard } from "../components/cards/featuredCard";
import { ProjectCard } from "../components/cards/projectCard";
import { ContactFooter } from "../components/contactFooter";
import projects from "../data/projects";
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
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <>
      <Helmet />
      <Layout FooterComponent={ContactFooter}>
        <motion.div
          initial="initial"
          animate="animate"
          exit={{ opacity: 0 }}
          variants={stagger}
        >
          <motion.h1
            className="mb-12 md:mb-24 text-2xl sm:text-3xl lg:text-5xl font-bold text-teal-300"
            variants={fadeInUp}
          >
            I’m a game programmer with 5+ years of experience, specializing in
            multiplayer and online services.
          </motion.h1>
          <motion.div className="space-y-12">
            {projects.featured.map((project) => (
              <FeaturedCard key={project.id} project={project} />
            ))}
          </motion.div>
          <motion.div
            className="lg:-mx-8 mt-12 grid lg:grid-cols-2 gap-y-12 gap-x-10"
            variants={fadeInUp}
          >
            {projects.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </Layout>
    </>
  );
}
