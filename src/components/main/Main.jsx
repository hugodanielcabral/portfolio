import { MainAbout } from "./about/MainAbout";
import { MainHome } from "./home/MainHome";

export const Main = () => {
  return (
    <main className="flex flex-col items-center justify-center w-4/4">
      <MainHome />
      <MainAbout />
    </main>
  );
};
