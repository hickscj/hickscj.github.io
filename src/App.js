import React, { Component } from "react";
import WorkExperience from "./WorkExperience";
import About from "./About";
import BarChart from "./BarChart";
// import ExperienceChart from "./ExperienceChart";
// import TestComponent from './TestComponent.class';
import TestComponent from './TestComponent.func';

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

    toAbout() {
        let coords = document.getElementById('about').getBoundingClientRect();
        window.scrollTo({
            top: coords.top,
            left: coords.left,
            behavior: 'smooth'
        });
    }

    highlightRelevant(evt) {
        switch(evt.target.textContent) {
            case 'JavaScript': console.log('js');
                break;
            case 'PHP': console.log('php');
                break;
            default:
                console.log('css');
        }
    }

    render() {
        return (
            <div id="myResume">
                <header>
                    <img className="face" src="../img/chad_hicks.jpg" alt="" />
                    <h2>Chad Hicks</h2>
                </header>

                <ul className="specialties">
                    <li><button className='linkish' onClick={ this.toAbout }>About Me</button></li>
                    <li><button className='linkish' onClick={ this.highlightRelevant }>CSS</button></li>
                    <li><button className='linkish' onClick={ this.highlightRelevant }>PHP</button></li>
                    <li><button className='linkish' onClick={ this.highlightRelevant }>JavaScript</button></li>
                </ul>

                <TestComponent whatever="this is" />

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

