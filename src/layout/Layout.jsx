import { Header } from "../components/header/Header";
export const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col">
      <Header />
      {children}
    </div>
  );
};
