const projects = {
  featured: [
    {
      id: "project-xandata",
      title: "Project Xandata",
      image: "/static/images/project-xandata/project-xandata-1.jpg",
      description:
        "A skill-based, team-focused, competitive 3v3 first-person shooter. Explore an expansive customization system in a game that blends gun play discipline with skill-based gameplay.",
      tags: ["Unreal Engine", "Windows"],
    },
    {
      id: "the-chef",
      title: "The Chef",
      image: "/static/images/the-chef/the-chef-3.png",
      description:
        "A time management game where you have to serve meals to customers while keeping your tummy happy.",
      tags: ["Phaser", "Web"],
    },
  ],
  projects: [
    {
      id: "cube-party",
      title: "Cube Party",
      image: "/static/images/cube-party/cube-party-3.png",
      description: `An offline 4-player battle arena where music influences the level.`,
      tags: ["Unity", "Windows"],
    },
    {
      id: "space-shapes",
      title: "Space Shapes",
      image: "/static/images/space-shapes/space-shapes-1.png",
      description: "A Space Impact clone with shoot 'em up gameplay.",
      tags: ["Unity", "Windows"],
    },
    {
      id: "abducktion",
      title: "Abducktion",
      image: "/static/images/abducktion/abducktion-3.jpg",
      description:
        "A casual game where cultists must sacrifice all the ducks of the earth.",
      tags: ["Unity", "Android"],
    },
    {
      id: "platon",
      title: "Platon",
      image: "/static/images/platon/platon-1.jpg",
      description:
        "A casual match three accompanied by synthwave aesthetics and music.",
      tags: ["PlayCanvas", "Web"],
    },
  ],
};

export const allProjects = [...projects.featured, ...projects.projects];

export default projects;
