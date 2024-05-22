import { useTranslation } from "react-i18next";
import { IoIosDocument } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";

export const MainHome = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section id="home" className="justify-center w-3/4 mt-32">
      <h3 className="text-lg lg:text-2xl text-[#FF31AD]">
        {t("main.home.title")}
      </h3>
      <h1 className="my-3 text-4xl lg:text-6xl text-[#0E1F39] dark:text-[#FFF9F3] font-bold">
        {t("main.home.name")}
      </h1>
      <h2 className="text-xl sm:text-xl lg:text-4xl dark:text-[#B0B5BC] text-[#313234]">
        {t("main.home.description")}
      </h2>
      <article className="flex flex-col justify-center mt-3 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <a
          href={t("main.home.resumeLink")}
          download
          className="btn bg-stone-700 hover:bg-stone-800 text-[#FF31AD] btn-wide text-lg dark:bg-slate-200 dark:hover:bg-slate-300"
        >
          {t("main.home.resumeButton")}
          <IoIosDocument />
        </a>

        <a
          href="#contact"
          className="btn bg-[#FF31AD] hover:bg-[#cf4e9b] text-white bg-opacity-75 btn-wide text-lg"
        >
          {t("main.home.contactButton")} <MdOutlineMailOutline />
        </a>
      </article>
    </section>
  );
};
