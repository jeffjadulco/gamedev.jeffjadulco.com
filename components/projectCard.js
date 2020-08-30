import Link from "next/link";

export const ProjectCard = ({ project }) => {
  return (
    <div className="grid grid-cols-2 gap-4 bg-gray-950 h-80 overflow-hidden">
      <div className="ml-8 mt-6">
        <h2 className="mt-1 mb-5 text-4xl font-bold text-gray-500">
          {project.title}
        </h2>
        <p className="mb-12 text-lg text-gray-600">{project.description}</p>
      </div>
      <div className="relative">
        <img
          className="object-cover w-full h-featured"
          src={project.image}
          alt={`${project.title} image`}
        />
        {/* <div className="absolute top-0 left-0 bg-gradient-to-r from-transparent to-black w-full h-featured z-10"></div> */}
      </div>
    </div>
  );
};
