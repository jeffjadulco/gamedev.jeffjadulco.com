import { Helmet } from "../components/helmet";
import { Layout } from "../components/layout";
import { FeaturedCard } from "../components/cards/featuredCard";
import { ProjectCard } from "../components/cards/projectCard";
import { ContactFooter } from "../components/contactFooter";
import projects from "../data/projects";

export default function Home() {
  return (
    <>
      <Helmet />
      <Layout FooterComponent={ContactFooter} bShowContactButton={false}>
        <h1 className="mb-12 md:mb-24 text-2xl sm:text-3xl lg:text-5xl font-bold text-teal-300">
          I’m a game programmer with 5+ years of experience, specializing in
          multiplayer and online services.
        </h1>
        <div className="space-y-12">
          {projects.featured.map((project) => (
            <FeaturedCard key={project.id} project={project} />
          ))}
        </div>
        <div className="lg:-mx-8 mt-12 grid lg:grid-cols-2 gap-12">
          {projects.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Layout>
    </>
  );
}
