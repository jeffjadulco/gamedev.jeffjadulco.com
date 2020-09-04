import Link from "next/link";
import { Tag } from "../tag";

export const FeaturedCard = ({ project }) => {
  return (
    <div>
      <Link href={`/project/${project.id}`}>
        <a>
          <div className="group lg:-mx-8 flex flex-col-reverse lg:grid lg:grid-cols-3 lg:h-featured bg-gray-950 shadow-sm rounded-sm transform hover:-translate-y-2 hover:shadow-lg transition-all duration-200">
            <div className="px-6 py-6 md:px-8 md:py-8">
              <div className="text-sm sm:text-base tracking-wiiddee text-gray-700">
                FEATURED PROJECT
              </div>
              <h2 className="mt-3 mb-1 text-3xl md:text-4xl font-bold text-gray-500">
                <Link href={`/project/${project.id}`}>
                  <a className="group-hover:text-teal-300 transition-colors duration-200">
                    {project.title}
                  </a>
                </Link>
              </h2>
              <p className="mb-5 text-base md:text-lg text-gray-600">
                {project.description}
              </p>
              <div className="mb-5 flex flex-wrap space-x-2">
                {project.tags &&
                  project.tags.map((tag) => <Tag key={tag} tag={tag} />)}
              </div>
              {/* <div className="mb-12">
                <Link href={`/project/${project.id}`}>
                  <a>
                    <span className="btn slide relative px-8 py-4 text-lg font-bold text-gray-900 bg-gray-500">
                      View Project
                    </span>
                  </a>
                </Link>
              </div> */}
            </div>
            <div className="col-span-2 overflow-hidden">
              <img
                className="object-cover object-top lg:object-center w-full h-56 md:h-90 lg:h-featured"
                src={project.image}
                alt={`${project.title} image`}
              />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};
