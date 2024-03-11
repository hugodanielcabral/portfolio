import donc_image from "../../../images/donc_wallpaper.png";
import dog360_image from "../../../images/dog360_wallpaper.png";
import { FaReact, FaLink, FaGithub, FaHtml5 } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTailwindcss, SiMysql, SiBootstrap } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

export const MainProjects = () => {
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
        <article className="grid lg:grid-cols-2 gap-x-4">
          <img
            src={donc_image}
            className="mt-5 transition duration-300 ease-in-out delay-150 shadow-xl h-60 rounded-xl shadow-black"
            alt="Image of my project DonC"
          />
          <div>
            <h4 className="text-xl text-[#0E1F39] dark:text-[#FFF9F3] font-bold mt-5">
              DonC Alojamientos
            </h4>
            <p className="text-xl text-[#0E1F39] dark:text-[#B0B5BC]">
              I designed a website where you can book different types of houses
              and even publish your own.
            </p>
            <ul className="flex items-center justify-center mt-3 gap-x-5 lg:justify-start">
              <li>
                <FaReact size={32} className="text-blue-400" />
              </li>
              <li>
                <DiNodejs size={60} className="text-green-400" />
              </li>
              <li>
                <BiLogoPostgresql size={32} className="text-blue-400" />
              </li>
              <li>
                <SiTailwindcss size={32} className="text-blue-400" />
              </li>
            </ul>
            <div className="flex justify-center gap-x-2 lg:justify-start">
              <a
                href="https://donc-alojamientos.onrender.com/"
                target="_blank"
                rel="noreferrer"
                className="text-xl btn btn-primary"
              >
                <FaLink />
                Live
              </a>
              <button className="text-xl btn btn-warning">
                <a
                  href="https://github.com/Teseo11/cab_alojamientos"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
                <FaGithub />
              </button>
            </div>
          </div>
        </article>
        <article className="grid mt-5 lg:grid-cols-2 gap-x-4">
          <img
            src={dog360_image}
            className="mt-5 transition duration-300 ease-in-out delay-150 shadow-xl h-60 rounded-xl shadow-black"
            alt="Image of my project DonC"
          />
          <div>
            <h4 className="text-xl text-[#0E1F39] dark:text-[#FFF9F3] font-bold mt-5">
              Dog360
            </h4>
            <p className="text-xl text-[#0E1F39] dark:text-[#B0B5BC]">
              I worked on a website where you will find information about dogs,
              such as breed, size, weight, etc.
            </p>
            <ul className="flex items-center justify-center mt-3 gap-x-5 lg:justify-start">
              <li>
                <FaReact size={32} className="text-blue-400" />
              </li>
              <li>
                <DiNodejs size={60} className="text-green-400" />
              </li>
              <li>
                <SiMysql size={32} className="text-amber-400" />
              </li>
              <li>
                <SiTailwindcss size={32} className="text-blue-400" />
              </li>
            </ul>
            <div className="flex justify-center gap-x-2 lg:justify-start">
              <button className="text-xl btn btn-warning">
                <a
                  href="https://github.com/Teseo11/dog360"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
                <FaGithub />
              </button>
            </div>
          </div>
        </article>
        <div className="mx-auto mt-10 max-w-64">
          <a href="https://github.com/dani-assa/Dawson-ecommerce">
            <article className="p-3 border rounded-lg dark:border-zinc-100 border-zinc-800 border-opacity-80 dark:border-opacity-80 hover:bg-slate-500 hover:bg-opacity-20">
              <h4 className="text-lg text-[#0E1F39] dark:text-[#FFF9F3] font-bold mt-5 text-center">
                Dawson E-Commerce
              </h4>
              <p className="text-base text-[#0E1F39] dark:text-[#B0B5BC]">
                I developed an E-Commerce following the SCRUM methodology.
              </p>
              <ul className="flex items-center justify-center mt-3 gap-x-5">
                <li>
                  <IoLogoJavascript size={32} className="text-amber-400" />
                </li>
                <li>
                  <FaHtml5 size={32} className="text-red-600" />
                </li>
                <li>
                  <SiBootstrap size={32} className="text-violet-500" />
                </li>
              </ul>
            </article>
          </a>
        </div>
      </div>
    </section>
  );
};
