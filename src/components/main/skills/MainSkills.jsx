import { useTranslation } from "react-i18next";
import { skillsBack, skillsFront, skillsOthers } from "../../../data/skills";

export const MainSkills = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <section id="skills" className="grid w-3/4 grid-cols-3 mt-10">
      <div className="col-span-3 divider divider-secondary"></div>
      <h3 className="text-2xl text-[#0E1F39] dark:text-[#FFF9F3] font-bold col-span-3">
        {t("main.skills.title")}
      </h3>
      <article className="col-span-3 md:col-span-1">
        <p className="text-3xl font-bold text-[#313234] text-center mt-5 dark:text-[#B0B5BC]">
          Frontend
        </p>

        <ul className="grid grid-cols-2 text-2xl text-[#313234] mt-5 dark:text-[#B0B5BC] mb-5 md:gap-x-0 gap-x-3 *:mt-2">
          {skillsFront.map((skill) => (
            <li key={skill.id} className="flex flex-col items-center">
              {skill.icon}
              <p className="mt-2 text-sm font-semibold">{skill.name}</p>
            </li>
          ))}
        </ul>
      </article>

      <article className="col-span-3 md:col-span-1">
        <p className="text-3xl font-bold text-[#313234] mt-5 dark:text-[#B0B5BC] text-center">
          Backend
        </p>
        <ul className="grid grid-cols-2 text-2xl text-[#313234] mt-5 dark:text-[#B0B5BC] mb-5 md:gap-x-0 gap-x-3 *:mt-2">
          {skillsBack.map((skill) => (
            <li key={skill.id} className="flex flex-col items-center">
              {skill.icon}
              <p className="mt-2 text-sm font-semibold">{skill.name}</p>
            </li>
          ))}
        </ul>
      </article>

      <article className="col-span-3 md:col-span-1">
        <p className="text-3xl font-bold text-[#313234] mt-5 dark:text-[#B0B5BC] text-center">
          Others
        </p>
        <ul className="grid grid-cols-2 text-2xl text-[#313234] mt-5 dark:text-[#B0B5BC] md:gap-x-0 gap-x-3 *:mt-2">
          {skillsOthers.map((skill) => (
            <li key={skill.id} className="flex flex-col items-center">
              {skill.icon}
              <p className="mt-2 text-sm font-semibold">{skill.name}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};
