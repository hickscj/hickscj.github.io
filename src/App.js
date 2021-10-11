import React from "react";
import WorkExperience from "./WorkExperience";
import About from "./About";
import './tailwind.css';
import './index.scss';
import {Header} from "./Header";

const App = () => {

    const toTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    const toAbout = (e) => {
        e.preventDefault();
        let coords = document.getElementById('about').getBoundingClientRect();
        window.scrollTo({
            top: coords.top,
            left: coords.left,
            behavior: 'smooth'
        });
    }

    return (
        <React.StrictMode>
        <div id="myResume" className="container mx-auto">
            <Header toAbout={ toAbout } />

            <WorkExperience />

            <About />

            <button id="to-top" onClick={ toTop }>^</button>
            <img className="pt-2 pb-10" src={ "../img/grandmas-full.png" } alt="Running Grandma's Marathon" />
        </div>
        </React.StrictMode>
    );
};

export default App;

