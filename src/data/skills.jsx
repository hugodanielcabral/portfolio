import {
  BiLogoPostgresql,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoNodejs,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoGit,
  BiLogoGithub,
  BiLogoBootstrap,
  BiLogoReact,
  BiLogoTrello,
} from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { FaLanguage } from "react-icons/fa";

export const skillsFront = [
  {
    id: 1,
    name: "HTML",
    icon: (
      <BiLogoHtml5 className="text-4xl text-[#E34F26] dark:text-[#E34F26] size-20" />
    ),
  },
  {
    id: 2,
    name: "CSS",
    icon: (
      <BiLogoCss3 className="text-4xl text-[#264DE4] dark:text-[#264DE4] size-20" />
    ),
  },
  {
    id: 3,
    name: "JavaScript",
    icon: (
      <BiLogoJavascript className="text-4xl text-[#c0a705cd] dark:text-[#F7DF1E] dark:bg-transparent size-20" />
    ),
  },
  {
    id: 4,
    name: "React",
    icon: (
      <BiLogoReact className="text-4xl text-[#61DAFB] dark:text-[#61DAFB] size-20" />
    ),
  },
  {
    id: 5,
    name: "TailwindCSS",
    icon: (
      <BiLogoTailwindCss className="text-4xl text-[#06B6D4] dark:text-[#06B6D4] size-20" />
    ),
  },
  {
    id: 6,
    name: "Bootstrap",
    icon: (
      <BiLogoBootstrap className="text-4xl text-[#7952B3] dark:text-[#7952B3] size-20" />
    ),
  },
];

export const skillsBack = [
  {
    id: 1,
    name: "Node.js",
    icon: (
      <BiLogoNodejs className="text-4xl text-[#339933] dark:text-[#339933] size-20" />
    ),
  },
  {
    id: 2,
    name: "Express",
    icon: (
      <SiExpress className="text-4xl text-[#000000] dark:text-[#000000] size-20" />
    ),
  },
  {
    id: 3,
    name: "MySQL",
    icon: (
      <GrMysql className="text-4xl text-[#00758F] dark:text-[#00758F] size-20" />
    ),
  },
  {
    id: 4,
    name: "PostgreSQL",
    icon: (
      <BiLogoPostgresql className="text-4xl text-[#336791] dark:text-[#336791] size-20" />
    ),
  },
];

export const skillsOthers = [
  {
    id: 1,
    name: "Git",
    icon: (
      <BiLogoGit className="text-4xl text-[#F05032] dark:text-[#F05032] size-20" />
    ),
  },
  {
    id: 2,
    name: "GitHub",
    icon: (
      <BiLogoGithub className="text-4xl text-[#181717] dark:text-[#181717] size-20" />
    ),
  },
  {
    id: 3,
    name: "Trello (Scrum)",
    icon: (
      <BiLogoTrello className="text-4xl text-[#0079BF] dark:text-[#0079BF] size-20" />
    ),
  },
  {
    id: 4,
    name: "English (B2) - Spanish (Native)",
    icon: (
      <FaLanguage className="text-4xl text-[#c0a705cd] dark:text-[#FFD700] size-20" />
    ),
  },
];
