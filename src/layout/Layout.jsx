import { Header } from "../components/header/Header";
import { Main } from "../components/main/Main";
/* import { Aside } from "../components/aside/Aside";
 */ export const Layout = () => {
  return (
    <div className="relative flex flex-col">
      <Header />
      {/*       <Aside />
       */}
      <Main />
    </div>
  );
};
