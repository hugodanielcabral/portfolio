import { useEffect, useState } from "react";
import sunIcon from "../../images/sun.svg";
import moonIcon from "../../images/moon.svg";

export const Header = () => {
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
    <header className="sticky top-0 dark:bg-[rgb(14,31,57)] backdrop-blur-md">
      <nav>
        <div className="navbar">
          <div className="justify-around flex-1">
            <label className="text-3xl swap swap-flip">
              <input type="checkbox" onClick={handleChangeTheme} />

              <div className="swap-on">
                <img src={moonIcon} alt="Moon Icon" className="w-9 h-9" />
              </div>
              <div className="swap-off">
                <img src={sunIcon} alt="Sun Icon" />
              </div>
            </label>
            <div className="flex-none text-[#0E1F39] dark:text-[#FFF9F3] font-bold">
              <ul className="hidden px-1 menu menu-horizontal lg:flex">
                <li>
                  <a href="#">HOME</a>
                </li>
                <li>
                  <a href="#">PROJECTS</a>
                </li>
                <li>
                  <a href="#">ABOUT</a>
                </li>
                <li>
                  <a href="#">CONTACT</a>
                </li>
              </ul>

              <details className="dropdown md:hidden dropdown-end">
                <summary className="m-1 bg-gray-300 btn text-[#000] dark:text-[#fff] dark:bg-cyan-900 dark:hover:dark:bg-cyan-800 hover:bg-gray-200">
                  Menu
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] dark:bg-cyan-900 rounded-box w-52 bg-gray-300">
                  <li>
                    <a href="#">HOME</a>
                  </li>
                  <li>
                    <a href="#">PROJECTS</a>
                  </li>
                  <li>
                    <a href="#">ABOUT</a>
                  </li>
                  <li>
                    <a href="#">CONTACT</a>
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
