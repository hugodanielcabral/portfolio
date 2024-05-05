import { useEffect, useState } from "react";
import sunIcon from "../../images/sun.svg";
import moonIcon from "../../images/moon.svg";
import usaFlag from "../../images/usa-flag.webp";
import argFlag from "../../images/argentina-flag.webp";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const [t, i18n] = useTranslation("global");

  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  });

  const handleChangeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
      document.querySelector("html").classList.remove("light");
    } else {
      document.querySelector("html").classList.remove("dark");
      document.querySelector("html").classList.add("light");
    }
  }, [theme]);
  return (
    <header className="sticky top-0 dark:bg-[rgb(14,31,57)]  bg-slate-300 bg-opacity-50 backdrop-blur-md dark:bg-opacity-45 z-50">
      <nav>
        <div className="navbar">
          <div className="justify-evenly flex-1 items-center">
            <label className="text-3xl swap swap-flip">
              <input type="checkbox" onClick={handleChangeTheme} />

              <div className="swap-on">
                <img src={moonIcon} alt="Moon Icon" className="w-9 h-9" />
              </div>
              <div className="swap-off">
                <img src={sunIcon} alt="Sun Icon" />
              </div>
            </label>
            <div className="space-x-5">
              <button onClick={() => handleChangeLanguage("en")}>
                <img
                  src={usaFlag}
                  alt="United States Flag"
                  className="rounded-full 
                 size-10 hover:scale-110 transition-transform duration-300 ease-in-out"
                  width={44}
                  height={44}
                />
              </button>
              <button onClick={() => handleChangeLanguage("es")}>
                <img
                  src={argFlag}
                  alt="Argentina's Flag"
                  className="rounded-full 
                  size-10 hover:scale-110 transition-transform duration-300 ease-in-out"
                  width={42}
                  height={42}
                />
              </button>
            </div>
            <div className="flex-none text-[#0E1F39] dark:text-[#FFF9F3] font-bold">
              <ul className="hidden px-1 menu menu-horizontal lg:flex md:flex">
                <li>
                  <a href="#home">{t("header.nav.home")}</a>
                </li>
                <li>
                  <a href="#projects">{t("header.nav.projects")}</a>
                </li>
                <li>
                  <a href="#skills">{t("header.nav.skills")}</a>
                </li>
                <li>
                  <a href="#contact">{t("header.nav.contact")}</a>
                </li>
              </ul>
              <details className="dropdown md:hidden dropdown-end">
                <summary className="m-1 bg-gray-300 btn text-[#000] dark:text-[#fff] dark:bg-black dark:bg-opacity-10 dark:hover:bg-transparent hover:bg-transparent bg-opacity-65">
                  Menu
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52 dark:bg-slate-800 dark:bg-opacity-85 bg-white bg-opacity-85">
                  <li>
                    <a href="#home">HOME</a>
                  </li>
                  <li>
                    <a href="#projects">PROJECTS</a>
                  </li>
                  <li>
                    <a href="#skills">SKILLS</a>
                  </li>
                  <li>
                    <a href="#contact">CONTACT</a>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
