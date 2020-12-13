import React, { Component } from "react";
import WorkExperience from "./WorkExperience";
import About from "./About";
// import ExperienceChart from "./ExperienceChart";

class App extends Component {

    toTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <div id="myResume">
                <header>
                    <img className="face" src="../img/chad_hicks.jpg" alt="" />
                    <h2>Chad Hicks</h2>
                </header>

                <ul className="specialties">
                    <li><a href="#about">About Me</a></li>
                    <li>CSS |&nbsp;</li>
                    <li>PHP |&nbsp;</li>
                    <li>JavaScript |&nbsp;</li>
                </ul>

                {/* <ExperienceChart /> */}
                <WorkExperience />

                <About />

                <button onClick={ this.toTop }>Return to top</button>
                <img id="grandmas" src={ "../img/grandmas-full.png" } alt="Running Grandma's Marathon" />
            </div>
        );
    }
}

export default App;

