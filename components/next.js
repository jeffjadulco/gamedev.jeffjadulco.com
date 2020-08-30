import Link from "next/link";
import { useNextProject } from "../hooks/useNextProject";

export const Next = () => {
  const { nextProject: project } = useNextProject();
  return (
    <div>
      <div className="flex justify-center items-center space-x-6">
        <Link href={`/project/${project.id}`}>
          <a className="h-64 w-120 overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={project.image}
              alt={`${project.title} image`}
            />
          </a>
        </Link>
        <Link href={`/project/${project.id}`}>
          <a>
            <div className="text-4xl font-bold text-gray-600">Next</div>
            <div className="-mt-5 text-6xl font-bold text-gray-600">
              {project.title}
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};
