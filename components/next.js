import Link from "next/link";
import { useNextProject } from "../hooks/useNextProject";
import { Footer } from "./footer";

export const Next = () => {
  const { nextProject: project } = useNextProject();
  return (
    <div className="pt-12 md:pt-24 pb-16 bg-gray-950 border-b-4 border-teal-300">
      <div className="container m-auto h-full flex flex-col justify-between space-y-40">
        <div className="group flex flex-col-reverse lg:flex-row justify-center md:items-center space-x-0 lg:space-x-6">
          <Link href={`/project/${project.id}`}>
            <a className="px-8 md:px-0 md:h-64 md:w-120 overflow-hidden">
              <img
                className="h-full w-full object-cover opacity-75 transform group-hover:scale-105 group-hover:opacity-100 transition-all duration-200"
                src={project.image}
                alt={`${project.title} image`}
              />
            </a>
          </Link>
          <Link href={`/project/${project.id}`}>
            <a className="px-8 md:px-0 text-gray-600 group-hover:text-teal-300 transition-colors duration-200">
              <div className="text-2xl sm:text-4xl font-bold">Next</div>
              <div className="-mt-3 md:-mt-5 text-4xl sm:text-6xl font-bold">
                {project.title}
              </div>
            </a>
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
};
