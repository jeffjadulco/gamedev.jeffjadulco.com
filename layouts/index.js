import { Helmet } from "../components/helmet";
import { Layout } from "../components/layout";

const ProjectInfo = ({ label, value }) => {
  return (
    <div className="flex-row">
      <div className="text-lg font-bold text-gray-500">{label}</div>
      <div className="text-lg">{value}</div>
    </div>
  );
};

const ProjectLink = ({ label, url }) => {
  return (
    <span className="text-lg font-bold text-teal-300">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {label}
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="inline-block w-5 h-5 ml-1 mb-1"
        >
          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
        </svg>
      </a>
    </span>
  );
};

const ProjectLayout = ({ children, frontMatter }) => {
  return (
    <>
      <Helmet />
      <Layout>
        <h1 className="text-6xl font-bold text-teal-300">
          {frontMatter.title}
        </h1>
        <div className="mt-16 grid grid-cols-6 text-gray-600">
          <div className="col-span-3">
            <div className="mb-8 flex space-x-20">
              {frontMatter.type && (
                <ProjectInfo label="Project Type" value={frontMatter.type} />
              )}
              {frontMatter.year && (
                <ProjectInfo label="Year" value={frontMatter.year} />
              )}
              {frontMatter.platform && (
                <ProjectInfo label="Platform" value={frontMatter.platform} />
              )}
            </div>
            <div className="prose prose-lg">{children}</div>
            <div className="mt-8 mb-12 flex space-x-20">
              {frontMatter.size && (
                <ProjectInfo label="Team Size" value={frontMatter.size} />
              )}
              {frontMatter.engine && (
                <ProjectInfo
                  label="Engine & Tools"
                  value={frontMatter.engine}
                />
              )}
            </div>
            <div className="flex space-x-8">
              {frontMatter.links &&
                frontMatter.links.map((link) => {
                  return (
                    <ProjectLink
                      key={link.action}
                      url={link.url}
                      label={link.action}
                    />
                  );
                })}
            </div>
          </div>
          <div className="col-span-3">images</div>
        </div>
      </Layout>
    </>
  );
};

export default ProjectLayout;
