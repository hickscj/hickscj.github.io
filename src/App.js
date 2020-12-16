import React, { Component } from "react";
import WorkExperience from "./WorkExperience";
import About from "./About";
import BarChart from "./BarChart";
// import ExperienceChart from "./ExperienceChart";

class App extends Component {

    getStuff() {
        fetch('http://localhost:5000/jobs').then( (res) => {
            return res.json();
        }).then( (jsonData) => {
            console.log(jsonData);
        });
    }

    componentDidMount() {
        this.getStuff();
    }

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

                <BarChart />
                {/* <ExperienceChart /> */}
                <WorkExperience />

                <About />

                <button id="to-top" onClick={ this.toTop }>^</button>
                <img id="grandmas" src={ "../img/grandmas-full.png" } alt="Running Grandma's Marathon" />
            </div>
        );
    }
}

export default App;

