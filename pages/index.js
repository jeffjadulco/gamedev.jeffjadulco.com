import { Helmet } from "../components/helmet";
import { Layout } from "../components/layout";
import { FeaturedCard } from "../components/featuredCard";
import { ProjectCard } from "../components/projectCard";
import projects from "../data/projects";

export default function Home() {
  return (
    <>
      <Helmet />
      <Layout>
        <h1 className="mb-24 text-5xl font-bold text-teal-300">
          I’m a game developer with 5+ years of experience, specializing in
          multiplayer and online services.
        </h1>
        <div className="-mx-8">
          {projects.featured.map((project) => (
            <FeaturedCard key={project.id} project={project} />
          ))}
          <div className="mt-16 grid grid-cols-2 gap-12">
            {projects.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
