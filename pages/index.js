import { Helmet } from "../components/helmet";
import { Layout } from "../components/layout";
import { Projects } from "../components/projects";

export default function Home() {
  return (
    <>
      <Helmet />
      <Layout>
        <h1 className="mb-48 text-5xl font-bold text-teal-300">
          I’m a game developer with 5+ years of experience, specializing in
          multiplayer and online services.
        </h1>
        <Projects />
      </Layout>
    </>
  );
}
