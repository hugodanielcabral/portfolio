import { useEffect, useState } from "react";

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
    <header>
      <nav>
        <div className="navbar">
          <div className="flex-1">
            <label className="text-3xl swap swap-flip">
              <input type="checkbox" onClick={handleChangeTheme} />

              <div className="swap-on">🌑</div>
              <div className="swap-off">🌞</div>
            </label>
          </div>
          <div className="flex-none text-[#000000] dark:text-[#FFF9F3]">
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
              <summary className="m-1 bg-gray-300 btn text-[#000] dark:text-[#fff] dark:bg-cyan-900 dark:hover:dark:bg-cyan-800">
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
      </nav>
    </header>
  );
};
