import githubIcon from "../../../images/github.svg";
import linkedinIcon from "../../../images/linkedin.svg";
import emailIcon from "../../../images/email.svg";
import { useTranslation } from "react-i18next";

export const MainContact = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section id="contact" className="grid w-3/4 mb-40">
      <div className="divider divider-secondary"></div>
      <h2 className="text-4xl font-bold text-center text-[#FF31AD] mt-40">
        {t("main.contact.title")}
      </h2>
      <p className="text-xl text-center text-[#313234] mt-5 mb-5 dark:text-[#B0B5BC]">
        {t("main.contact.description")}
      </p>
      <div className="flex justify-center mt-5 gap-x-5">
        <a
          href="https://github.com/hugodanielcabral"
          target="_blank"
          rel="noreferrer"
          className="transition-transform duration-300 ease-in-out hover:scale-110"
        >
          <img
            className="w-20 rounded-full"
            src={githubIcon}
            alt="My GitHub Icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/hugo-daniel-cabral"
          target="_blank"
          rel="noreferrer"
          className="transition-transform duration-300 ease-in-out hover:scale-110"
        >
          <img
            className="w-20 rounded-full"
            src={linkedinIcon}
            alt="My LinkedIn Icon"
          />
        </a>
        <a
          href="mailto:danicabral151@gmail.com"
          className="transition-transform duration-300 ease-in-out hover:scale-110"
        >
          <img
            className="w-20 rounded-full"
            src={emailIcon}
            alt="My Email Icon"
          />
        </a>
      </div>
    </section>
  );
};
