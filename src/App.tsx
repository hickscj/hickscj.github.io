import About from "./components/About";
import "./styles/index.scss";
import { Header } from "./components/Header";
import WorkExperience from "./components/WorkExperience";
import { Outlet } from "react-router";

const App = () => {
  const toTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const toAbout = (e: MouseEvent) => {
    e.preventDefault();
    let coords = document.getElementById("about")?.getBoundingClientRect();
    window.scrollTo({
      top: coords?.top,
      left: coords?.left,
      behavior: "smooth",
    });
  };

  return (
    <div id="main" className="container w-9/12 md:w-7/12 mx-auto">
      <Header toAbout={toAbout} />

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

export default App;
