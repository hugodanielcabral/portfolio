import { MainContact } from "../contact/MainContact";
import { MainAbout } from "./about/MainAbout";
import { MainHome } from "./home/MainHome";
import { MainProjects } from "./projects/MainProjects";

export const Main = () => {
  return (
    <main className="flex flex-col items-center justify-center w-4/4">
      <MainHome />
      <MainAbout />
      <MainProjects />
      <MainContact />
    </main>
  );
};
