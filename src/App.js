import React from "react";
import WorkExperience from "./components/WorkExperience";
import About from "./components/About";
import './styles/tailwind.css';
import './styles/index.scss';
import {Header} from "./components/Header";

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

            <img className="pt-2 pb-10" src={ "../img/snail.png" } alt="Snail on the road" />

            <WorkExperience />

            <About />

            <img className="pt-2 pb-10" src={ "../img/grandmas-full.png" } alt="Running Grandma's Marathon" />
            <button id="to-top" onClick={ toTop }>^</button>
        </div>
        </React.StrictMode>
    );
};

export default App;

