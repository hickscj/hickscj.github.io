import React from "react";
import About from "./components/About";
import './styles/index.scss';
import { Header } from "./components/Header";
import WorkExperience from "./components/WorkExperience";

const App = () => {

    const toTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    const toAbout = (e: MouseEvent) => {
        e.preventDefault();
        let coords = document.getElementById('about')?.getBoundingClientRect();
        window.scrollTo({
            top: coords?.top,
            left: coords?.left,
            behavior: 'smooth'
        });
    }

    return (
        <div id="myResume" className="container w-9/12 md:w-7/12 mx-auto">
            <Header toAbout={ toAbout } />

            <WorkExperience />

            <About />

            <div className="flex flex-row justify-center">
                <button id="to-top" onClick={ toTop } aria-label="scroll to top">^</button>
            </div>

            <div className="flex flex-row justify-center">
                <img className="pt-2 pb-10" src={ "../img/grandmas-full.png" } alt="Running Grandma's Marathon" />
            </div>
        </div>
    );
}

export default App;

