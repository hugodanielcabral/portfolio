import { MainContact } from "./contact/MainContact";
import { MainHome } from "./home/MainHome";
import { MainProjects } from "./projects/MainProjects";
import { MainSkills } from "./skills/MainSkills";

export const Main = () => {
  return (
    <main className="flex flex-col items-center justify-center w-4/4">
      <MainHome />
      <MainSkills />
      <MainProjects />
      <MainContact />
    </main>
  );
};
