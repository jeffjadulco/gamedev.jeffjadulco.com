import { useContext, createContext, useState } from "react";
import { allProjects } from "../data/projects";

const NextProjectContext = createContext();

export const NextProjectProvider = ({ children, currentProject }) => {
  const getNextProject = (_) => {
    if (!currentProject) return null;

    let index = 0;

    allProjects.map((project, i) => {
      if (project.id === currentProject) index = i + 1;
    });

    return allProjects[index % allProjects.length];
  };
  const nextProject = getNextProject();

  return (
    <NextProjectContext.Provider value={{ nextProject }}>
      {children}
    </NextProjectContext.Provider>
  );
};

export const useNextProject = () => {
  const { nextProject } = useContext(NextProjectContext);
  return { nextProject };
};
