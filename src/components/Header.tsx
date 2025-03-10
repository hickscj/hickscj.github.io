import { Link } from "react-router-dom";

export const Header = (props: any) => {
  return (
    <header className="pt-5 mb-10">
      <div className="w-full xl:w-1/2">
        <ul className="flex text-md justify-between">
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
            <a href="../resources/chad.hicks_resume.pdf" target="_blank">
              Resume (pdf)
            </a>
          </li>
          <li>
            <a href="../resources/chad.hicks_resume.docx" target="_blank">
              Resume (docx)
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-between w-full">
        <div className="select-none pl-2">
          <h2>Chad J. Hicks</h2>
        </div>
        <div className="face"></div>
      </div>
      <div className="header-image flex flex-row"></div>
    </header>
  );
};
