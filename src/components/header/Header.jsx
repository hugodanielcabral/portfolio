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
            <label className="swap swap-flip text-5xl">
              <input type="checkbox" onClick={handleChangeTheme} />

              <div className="swap-on">🌑</div>
              <div className="swap-off">🌞</div>
            </label>
          </div>
          <div className="flex-none text-[#000000] dark:text-[#FFFFFF]">
            <ul className="menu menu-horizontal px-1">
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
          </div>
        </div>
      </nav>
    </header>
  );
};
