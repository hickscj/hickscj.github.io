import { Link } from "react-router-dom";

export const Header = (props: any) => {
  return (
    <header className="pt-5 mb-5">
      <div className="w-full xl:w-2/3">
        <ul className="flex text-base space-x-4">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              About Me
            </Link>
          </li>
          <li>
            <a href="https://github.com/hickscj">GitHub</a>
          </li>
          <li>
            <a href="../resources/chad.hicks_resume-v4.pdf" target="_blank">
              Resume (pdf)
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-row">
        <div>
          <img className="w-40 m-5 ml-0 sepia border-2" src="img/chad.hicks.jpg" />
        </div>
        <div className="select-none mt-auto">
          <h2 className="mb-2 md:mb-1">Chad J. Hicks</h2>
        </div>
      </div>
    </header>
  );
};
