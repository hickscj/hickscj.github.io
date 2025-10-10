import { Link } from "react-router-dom";

export const Header = (props: any) => {
  return (
    <header className="justify-between pt-5 mb-5">
      <ul className="flex justify-center text-base space-x-0 whitespace-nowrap">
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
      <div className="flex justify-center">
        <h2 className="font-[Mate_SC] text-5xl md:text-7xl whitespace-nowrap">Chad Hicks</h2>
      </div>
    </header>
  );
};
