import donc_image from "../images/donc_wallpaper.webp";
import dog360_image from "../images/dog360_wallpaper.webp";
import gamenest_image from "../images/gamenest_wallpaper.webp";

export const MajorProjects = [
  {
    id: 1,
    title: "main.projects.project_1.title",
    description: "main.projects.project_1.description",
    image: gamenest_image,
    technologies: ["React", "Node", "PostgreSQL", "Tailwind", "Jest", "Redux"],
    repository: {
      exist: true,
      link: "https://github.com/hugodanielcabral/gamenest",
    },
    live: {
      exist: false,
      link: "#",
    },
    updates: {
      exist: true,
      link: "https://github.com/hugodanielcabral/gamenest",
    },
  },
  {
    id: 2,
    title: "main.projects.project_2.title",
    description: "main.projects.project_2.description",
    image: donc_image,
    technologies: ["React", "Node", "PostgreSQL", "Tailwind"],
    repository: {
      exist: true,
      link: "https://github.com/hugodanielcabral/cab_alojamientos",
    },
    live: {
      exist: true,
      link: "https://donc-alojamientos.onrender.com/",
    },
  },
  {
    id: 3,
    title: "main.projects.project_3.title",
    description: "main.projects.project_3.description",
    image: dog360_image,
    technologies: ["React", "Node", "MySQL", "Tailwind"],
    repository: {
      exist: true,
      link: "https://github.com/hugodanielcabral/dog360",
    },
    live: {
      exist: false,
      link: "#",
    },
  },
];

export const minorProjects = [
  {
    id: 1,
    title: "main.projects.project_4.title",
    description: "main.projects.project_4.description",
    technologies: ["Javascript", "HTML5", "Bootstrap"],
    repository: {
      exist: true,
      link: "https://github.com/dani-assa/Dawson-ecommerce",
    },
  },
];
