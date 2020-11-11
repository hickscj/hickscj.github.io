import React from "react";
import { render } from "react-dom";
import Jobs from "./Jobs";

const App = () => {
    return (
        <div id="myResume">
            <header>
                <img className="face" src={ require("../img/chad_hicks.jpg") } alt="" />
                <h2>Chad J. Hicks</h2>
                <ul className="identities">
                    <li>Software Engineer |&nbsp;</li>
                    <li>Runner |&nbsp;</li>
                    <li>Musician</li>
                </ul>
                <ul className="specialties">
                    <li><a href="#about">About Me</a></li>
                    <li>CSS |&nbsp;</li>
                    <li>PHP |&nbsp;</li>
                    <li>JavaScript |&nbsp;</li>
                </ul>
            </header>

            <section className="work-experience">
                <Jobs />
            </section>

            <section id="about">
                <h3>Personality and Disposition</h3>
                <ul>
                    <li>Strengths Finder: 
                        &nbsp;<a href="https://www.gallup.com/cliftonstrengths/en/252278/input-theme.aspx" target="_blank" rel="noreferrer">Input</a>, 
                        &nbsp;<a href="https://www.gallup.com/cliftonstrengths/en/252293/learner-theme.aspx" target="_blank" rel="noreferrer">Learner</a>, 
                        &nbsp;<a href="https://www.gallup.com/cliftonstrengths/en/252197/connectedness-theme.aspx" target="_blank" rel="noreferrer">Connectedness</a>, 
                        &nbsp;<a href="https://www.gallup.com/cliftonstrengths/en/252323/restorative-theme.aspx" target="_blank" rel="noreferrer">Restorative</a>, 
                        &nbsp;<a href="https://www.gallup.com/cliftonstrengths/en/252350/strategic-theme.aspx" target="_blank" rel="noreferrer">Strategic</a>
                    </li>
                    <li>Enneagram: <a href="https://www.enneagraminstitute.com/type-9" target="_blank" rel="noreferrer">Type 9 - The Peacemaker</a></li>
                    <li>
                        DiSC Assessment:
                        <br />Highest dimension: <a href="https://www.discprofiles.com/blog/2019/08/what-is-the-disc-sc-style/" target="_blank" rel="noreferrer">Steadiness and Conscientiousness</a>
                        <br />Segment Number: D 2 i 4 S 5 C 5
                        <br />Classical Pattern: <a href="https://www.discprofiles4u.com/blog/2012/disc-classic-2-perfectionist-pattern-15-of-16/" target="_blank" rel="noreferrer">Perfectionist</a>
                    </li>
                    <li>Meyers-Briggs: <a href="https://www.verywellmind.com/enfp-an-overview-of-the-champion-personality-type-2795980" target="_blank" rel="noreferrer">ENFP</a></li>
                </ul>
                <a href="#">Return to Top</a>
                <img id="grandmas" src={ require("../img/grandmas-full.png") } alt="Running Grandma's Marathon" />
            </section>
        </div>
    )
};


render(<App />, document.getElementById("root"));
