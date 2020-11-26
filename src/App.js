import React from "react";
import { render } from "react-dom";
import WorkExperience from "./WorkExperience";
import About from "./About";

const App = () => {
    return (
        <div id="myResume">
            <header>
                <img className="face" src={ require("../img/chad_hicks.jpg") } alt="" />
                <h2>Chad J. Hicks</h2>
            </header>

            <ul className="specialties">
                <li><a href="#about">About Me</a></li>
                <li>CSS |&nbsp;</li>
                <li>PHP |&nbsp;</li>
                <li>JavaScript |&nbsp;</li>
            </ul>
            
            <WorkExperience />

            <About />

            <a href="#">Return to Top</a>
            <img id="grandmas" src={ require("../img/grandmas-full.png") } alt="Running Grandma's Marathon" />
        </div>
    )
};


render(<App />, document.getElementById("root"));
