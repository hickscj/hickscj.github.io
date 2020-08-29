import React from "react";
import { render } from "react-dom";
import Jobs from "./Jobs";

const App = () => {
    return (
        <div id="myResume">
            <header>
                <img className="face" src={ require("../img/chad_hicks.jpg") } alt="" />
                <h2>Chad J. Hicks</h2>
                <ul className="breadcrumbs">
                    <li>Software Engineer |&nbsp;</li>
                    <li>Runner |&nbsp;</li>
                    <li>Musician</li>
                </ul>
            </header>

            <section className="work-experience">
                <Jobs />
            </section>

            <section>
                <h3>Personality and Disposition</h3>
                <ul>
                    <li>Strengths Finder: Input, Learner, Connectedness, Restorative, Strategic</li>
                    <li>Enneagram: Type 9</li>
                    <li>
                        DiSC Assessment:
                        <br />Highest dimension: Steadiness and Conscientiousness
                        <br />Segment Number: D 2 i 4 S 5 C 5
                        <br />Classical Pattern: Perfectionist
                    </li>
                    <li>Meyers-Briggs: ENFP</li>
                </ul>
            </section>
            <img src={ require("../img/grandmas-full.png") } alt="Running Grandma's Marathon" />
        </div>
    )
};


render(<App />, document.getElementById("root"));
