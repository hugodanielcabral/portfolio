import React from "react";
import { Header } from "../components/header/Header";

export const Layout = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <h1 className="text-red-500">Layout</h1>
      </main>
    </div>
  );
};
