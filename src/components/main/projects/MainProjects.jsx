import technologiesIcons from "../../../data/technologiesIcons.jsx";
import { MajorProjects, minorProjects } from "../../../data/projects.js";
import { FaLink, FaGithub } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";
import { useTranslation } from "react-i18next";

export const MainProjects = () => {
  //TODO 1: Crear tooltips para los botones de live, code, y los iconos de tecnologias.

  const [t, i18n] = useTranslation("global");

  return (
    <section id="projects" className="justify-center w-3/4 mt-20">
      <div className=" divider divider-secondary"></div>
      <h3 className="text-2xl text-[#0E1F39] dark:text-[#FFF9F3] font-bold mt-10">
        {t("main.projects.title")}
      </h3>
      <p className="text-xl text-[#313234] mt-5 dark:text-[#B0B5BC]">
        {t("main.projects.description")}
      </p>
      <div>
        {MajorProjects.map((project) => (
          <article
            key={project.id}
            className="grid mb-5 lg:grid-cols-2 gap-x-4"
          >
            <img
              src={project.image}
              alt={`Image of ${project.title}`}
              className="object-cover mt-5 shadow-xl rounded-xl shadow-black min-w-80 h-48 md:w-full md:h-fit hover:scale-95 transition-transform duration-300 ease-in-out"
            />
            <div>
              <h4
                className={`text-xl md:text-2xl text-[#0E1F39] dark:text-[#FFF9F3] font-bold mt-5 ${
                  project.title.includes("main.projects.project_1.title")
                    ? "text-red-500 dark:text-red-500"
                    : ""
                }`}
              >
                {t(project.title)}
              </h4>
              <p className="text-xl text-[#0E1F39] dark:text-white">
                {t(project.description)}
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
                  {t(project.title)}
                </h4>
                <p className="text-base text-[#0E1F39] dark:text-[#B0B5BC] text-pretty">
                  {t(project.description)}
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
