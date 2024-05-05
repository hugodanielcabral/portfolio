import donc_image from "../images/donc_wallpaper.webp";
import dog360_image from "../images/dog360_wallpaper.webp";
import gamenest_image from "../images/gamenest_wallpaper.webp";

export const MajorProjects = [
  {
    id: 1,
    title: "GameNest (In progress)",
    description:
      "I am currently working on a website where you can create collection of games, find information about them and read reviews.",
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
      exist: false,
      link: "#",
    },
  },
  {
    id: 2,
    title: "DonC Alojamientos",
    description:
      "I designed a website where you can book different types of houses and even publish your own.",
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
    title: "Dog360",
    description:
      "I worked on a website where you will find information about dogs, such as breed, size, weight, etc.",
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
    title: "Dawson E-Commerce",
    description: "I developed an E-Commerce following the SCRUM methodology.",
    technologies: ["Javascript", "HTML5", "Bootstrap"],
    repository: {
      exist: true,
      link: "https://github.com/dani-assa/Dawson-ecommerce",
    },
  },
];
