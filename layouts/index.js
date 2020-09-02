import { Helmet } from "../components/helmet";
import { Layout } from "../components/layout";
import { Next } from "../components/next";
import { NextProjectProvider } from "../hooks/useNextProject";
import { PreviewImage } from "../components/previews/previewImage";
import { PreviewVideo, PreviewGif } from "../components/previews/previewVideo";

const ProjectInfo = ({ label, value }) => {
  return (
    <div className="flex-row mr-8 mb-5 md:mb-0 md:mr-0">
      <div className="text-lg font-bold text-gray-500">{label}</div>
      <div className="text-lg">{value}</div>
    </div>
  );
};

const ProjectLink = ({ label, url }) => {
  return (
    <a
      className="group btn slide relative px-4 py-3 md:px-8 md:py-4 text-lg font-bold text-gray-950"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="relative">{label}</span>
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        className="inline-block w-5 h-5 ml-1 mb-1 transform origin-bottom-left scale-90 transition-transform group-hover:scale-110 duration-200"
      >
        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
      </svg>
    </a>
  );
};

const ProjectLayout = ({ children, frontMatter }) => {
  return (
    <>
      <Helmet />
      <NextProjectProvider currentProject={frontMatter.id}>
        <Layout FooterComponent={Next}>
          <h1 className="text-4xl sm:text-6xl font-bold text-teal-300">
            {frontMatter.title}
          </h1>
          <div>
            <div className="mt-8 mb-12 flex flex-wrap sm:flex sm:space-x-10 md:space-x-16 lg:space-x-20">
              {frontMatter.type && (
                <ProjectInfo label="Project Type" value={frontMatter.type} />
              )}
              {frontMatter.year && (
                <ProjectInfo label="Year" value={frontMatter.year} />
              )}
              {frontMatter.engine && (
                <ProjectInfo label="Game Engine" value={frontMatter.engine} />
              )}
              {frontMatter.size && (
                <ProjectInfo label="Team Size" value={frontMatter.size} />
              )}
              {frontMatter.platform && (
                <ProjectInfo label="Platform" value={frontMatter.platform} />
              )}
            </div>
            <div className="grid lg:grid-cols-6 gap-16 text-gray-600">
              <div className="col-span-3">
                <div className="prose prose-lg">{children}</div>
                <div className="mt-8 flex space-x-4 md:space-x-8">
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
              <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                {frontMatter.images &&
                  frontMatter.images.map((url, index) => {
                    return (
                      <PreviewImage
                        key={index}
                        url={url}
                        alt={`${frontMatter.title} screenshot ${index}`}
                      />
                    );
                  })}
                {frontMatter.videos &&
                  frontMatter.videos.map((url, index) => {
                    return <PreviewVideo key={index} url={url} />;
                  })}
                {frontMatter.gifs &&
                  frontMatter.gifs.map((url, index) => {
                    return <PreviewGif key={index} url={url} />;
                  })}
              </div>
            </div>
          </div>
        </Layout>
      </NextProjectProvider>
    </>
  );
};

export default ProjectLayout;
