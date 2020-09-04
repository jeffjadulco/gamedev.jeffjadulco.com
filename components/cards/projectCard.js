import Link from "next/link";
import { Tag } from "../tag";

export const ProjectCard = ({ project }) => {
  return (
    <Link href={`/project/${project.id}`}>
      <a>
        <div className="group flex flex-col-reverse sm:grid sm:grid-cols-2 gap-4 bg-gray-950 hover:bg-opacity-75 h-80 sm:h-64 overflow-hidden rounded-sm shadow-sm transform hover:-translate-y-2 hover:shadow-lg transition-all duration-200">
          <div className="px-5 pt-3 pb-6 sm:pl-8 sm:pr-3 sm:pt-5 sm:pb-8">
            <h2 className="mt-1 mb-1 text-2xl xl:text-3xl leading-tight font-bold text-gray-500 group-hover:text-teal-300 transition-colors duration-200">
              {project.title}
            </h2>
            <p className="text-base lg:text-lg lg:h-auto text-gray-600 group-hover:text-gray-500 transition-colors duration-200">
              {project.description}
            </p>
            <div className="mt-4 mb-3 flex flex-wrap space-x-2">
              {project.tags &&
                project.tags.map((tag) => <Tag key={tag} tag={tag} />)}
            </div>
          </div>
          <div className="grayscale-overlay">
            <img
              className="grayscale object-cover w-full h-64"
              src={project.image}
              alt={`${project.title} image`}
            />
          </div>
        </div>
      </a>
    </Link>
  );
};
