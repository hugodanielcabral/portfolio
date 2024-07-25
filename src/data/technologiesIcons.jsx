import { FaReact, FaHtml5 } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiTailwindcss,
  SiMysql,
  SiBootstrap,
  SiJest,
  SiRedux,
  SiFirebase,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiJsonwebtokens } from "react-icons/si";

const technologiesIcons = [
  {
    id: 1,
    name: "React",
    icon: <FaReact size={32} className="text-blue-400" />,
  },
  {
    id: 2,
    name: "Node",
    icon: <DiNodejs size={60} className="text-green-400" />,
  },
  {
    id: 3,
    name: "PostgreSQL",
    icon: <BiLogoPostgresql size={32} className="text-blue-400" />,
  },
  {
    id: 4,
    name: "Tailwind",
    icon: <SiTailwindcss size={32} className="text-blue-400" />,
  },
  {
    id: 5,
    name: "MySQL",
    icon: <SiMysql size={32} className="dark:text-amber-500 text-stone-800" />,
  },
  {
    id: 6,
    name: "Bootstrap",
    icon: <SiBootstrap size={32} className="text-violet-500" />,
  },
  {
    id: 7,
    name: "Javascript",
    icon: (
      <IoLogoJavascript
        size={32}
        className="dark:text-[#F7DF1E] text-[#c0a705cd]"
      />
    ),
  },
  {
    id: 8,
    name: "HTML5",
    icon: <FaHtml5 size={32} className="text-red-600" />,
  },
  {
    id: 9,
    name: "Jest",
    icon: <SiJest size={32} className="text-red-600" />,
  },
  {
    id: 10,
    name: "Redux",
    icon: <SiRedux size={32} className="text-purple-600" />,
  },
  {
    id: 11,
    name: "Firebase",
    icon: <SiFirebase size={32} className="text-yellow-500" />,
  },
  {
    id: 12,
    name: "TypeScript",
    icon: <SiTypescript size={32} className="text-blue-400" />,
  },
  {
    id: 13,
    name: "JWT",
    icon: <SiJsonwebtokens size={32} className="text-green-400" />,
  },
];

export default technologiesIcons;
