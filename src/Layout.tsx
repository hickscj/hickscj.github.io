import { Background } from "./components/Background";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

export const Layout = (props: any) => {
  return (
    <>
    <div id="main" className="container w-11/12 lg:w-8/12 xl:w-1/2 text-2xl text-base mx-auto z-10">
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
    </>
  );
};
