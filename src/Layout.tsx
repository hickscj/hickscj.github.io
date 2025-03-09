import React from "react";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

export const Layout = (props: any) => {
  return (
    <div id="main" className="container lg:w-7/12 mx-auto">
      <Header />

      <Outlet />

      <div className="flex flex-row justify-center">
        <img
          className="pt-2 pb-10"
          src={"../img/grandmas-full.png"}
          alt="Running Grandma's Marathon"
        />
      </div>
    </div>
  );
};
