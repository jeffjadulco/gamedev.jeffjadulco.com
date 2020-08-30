import Link from "next/link";

export const FeaturedCard = ({ project }) => {
  return (
    <div className="grid grid-cols-3 gap-12 bg-gray-950 h-featured">
      <div className="col-span-1 ml-8 mt-6">
        <div className="text-base tracking-wiiddee text-gray-700">
          FEATURED PROJECT
        </div>
        <h2 className="mt-1 mb-5 text-4xl font-bold text-gray-500">
          {project.title}
        </h2>
        <p className="mb-12 text-lg text-gray-600">{project.description}</p>
        <Link href={`/project/${project.id}`}>
          <a className="w-48 px-8 py-4 bg-teal-300 font-bold text-gray-900 text-lg">
            View Project
          </a>
        </Link>
      </div>
      <div className="col-span-2 relative">
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
