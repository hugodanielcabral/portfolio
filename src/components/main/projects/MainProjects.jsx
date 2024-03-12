import donc_image from "../../../images/donc_wallpaper.png";
import dog360_image from "../../../images/dog360_wallpaper.png";
import gamenest_image from "../../../images/gamenest_wallpaper.png";
import { FaReact, FaLink, FaGithub, FaHtml5 } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiTailwindcss,
  SiMysql,
  SiBootstrap,
  SiJest,
  SiRedux,
  SiFirebase,
} from "react-icons/si";
import { IoLogoJavascript, IoNewspaper } from "react-icons/io5";

export const MainProjects = () => {
  //TODO 1: Crear una carpeta data y colocar el archivo technologiesIcons, MajorProjects y minorProjects.
  //TODO 2: Crear tooltips para los botones de live, code, y los iconos de tecnologias.
  //TODO 3: Optimizar las imagenes de los proyectos.

  const technologiesIcons = [
    {
      id: 1,
      name: "React",
      icon: <FaReact size={32} className="text-blue-400" />,
    },
    {
      id: 2,
      name: "Node",
      icon: <DiNodejs size={60} className="text-green-400" />,
    },
    {
      id: 3,
      name: "PostgreSQL",
      icon: <BiLogoPostgresql size={32} className="text-blue-400" />,
    },
    {
      id: 4,
      name: "Tailwind",
      icon: <SiTailwindcss size={32} className="text-blue-400" />,
    },
    {
      id: 5,
      name: "MySQL",
      icon: (
        <SiMysql size={32} className="dark:text-amber-500 text-stone-800" />
      ),
    },
    {
      id: 6,
      name: "Bootstrap",
      icon: <SiBootstrap size={32} className="text-violet-500" />,
    },
    {
      id: 7,
      name: "Javascript",
      icon: (
        <IoLogoJavascript
          size={32}
          className="dark:text-[#F7DF1E] text-[#c0a705cd]"
        />
      ),
    },
    {
      id: 8,
      name: "HTML5",
      icon: <FaHtml5 size={32} className="text-red-600" />,
    },
    {
      id: 9,
      name: "Jest",
      icon: <SiJest size={32} className="text-red-600" />,
    },
    {
      id: 10,
      name: "Redux",
      icon: <SiRedux size={32} className="text-purple-600" />,
    },
    {
      id: 11,
      name: "Firebase",
      icon: <SiFirebase size={32} className="text-yellow-500" />,
    },
  ];

  const MajorProjects = [
    {
      id: 1,
      title: "GameNest (In progress)",
      description:
        "I am currently working on a website where you can find create collection of games, find information about them and read reviews.",
      image: gamenest_image,
      technologies: [
        "React",
        "Node",
        "PostgreSQL",
        "Tailwind",
        "Jest",
        "Redux",
        "Firebase",
      ],
      repository: {
        exist: false,
        link: "#",
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

  const minorProjects = [
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

  return (
    <section id="projects" className="justify-center w-3/4 mt-20">
      <div className=" divider divider-secondary"></div>
      <h3 className="text-2xl text-[#0E1F39] dark:text-[#FFF9F3] font-bold">
        Projects
      </h3>
      <p className="text-xl text-[#313234] mt-5 dark:text-[#B0B5BC]">
        Here are some of my projects that i&apos;ve been working on
      </p>
      <div>
        {MajorProjects.map((project) => (
          <article key={project.id} className="grid lg:grid-cols-2 gap-x-4">
            <img
              src={project.image}
              alt={`Image of ${project.title}`}
              className="mt-5 transition duration-300 ease-in-out delay-150 shadow-xl h-60 rounded-xl shadow-black max-w-[550px] w-full object-cover"
            />
            <div>
              <h4
                className={`text-xl text-[#0E1F39] dark:text-[#FFF9F3] font-bold mt-5 ${
                  project.title.includes("GameNest")
                    ? "text-red-500 dark:text-red-500"
                    : ""
                }`}
              >
                {project.title}
              </h4>
              <p className="text-xl text-[#0E1F39] dark:text-[#B0B5BC]">
                {project.description}
              </p>
              <ul className="flex items-center justify-center mt-3 gap-x-5 lg:justify-start">
                {technologiesIcons
                  .filter((icon) => project.technologies.includes(icon.name))
                  .map((icon) => (
                    <li key={icon.id}>{icon.icon}</li>
                  ))}
              </ul>

              <div className="flex justify-center gap-x-2 lg:justify-start">
                {
                  <a
                    href={project.live.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-xl btn btn-primary ${
                      project.live.exist
                        ? ""
                        : "opacity-50 cursor-not-allowed pointer-events-none"
                    }`}
                  >
                    <FaLink />
                    Live
                  </a>
                }

                {
                  <a
                    href={project.repository.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-xl btn btn-warning ${
                      project.repository.exist
                        ? ""
                        : "opacity-50 cursor-not-allowed pointer-events-none"
                    }`}
                  >
                    <FaGithub />
                    Code
                  </a>
                }

                {project?.updates && (
                  <a
                    href={project.updates.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-xl btn btn-info ${
                      project.updates.exist
                        ? ""
                        : "opacity-50 cursor-not-allowed pointer-events-none"
                    }`}
                  >
                    <IoNewspaper />
                    Updates
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}

        <div className="mx-auto mt-10 max-w-64">
          {minorProjects.map((project) => (
            <a href={project.repository.link} key={project.id}>
              <article className="p-3 border rounded-lg dark:border-zinc-100 border-zinc-800 border-opacity-80 dark:border-opacity-80 hover:bg-slate-500 hover:bg-opacity-20">
                <h4 className="text-lg text-[#0E1F39] dark:text-[#FFF9F3] font-bold mt-5 text-center">
                  {project.title}
                </h4>
                <p className="text-base text-[#0E1F39] dark:text-[#B0B5BC]">
                  {project.description}
                </p>
                <ul className="flex items-center justify-center mt-3 gap-x-5">
                  {technologiesIcons
                    .filter((icon) => project.technologies.includes(icon.name))
                    .map((icon) => (
                      <li key={icon.id}>{icon.icon}</li>
                    ))}
                </ul>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
