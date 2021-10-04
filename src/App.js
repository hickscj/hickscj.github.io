import React, { useState, useEffect } from "react";
import WorkExperience from "./WorkExperience";
import About from "./About";
import './tailwind.gen.css';

const App = () => {
    const [jobs, setJobs] = useState([]);
    // const [filter, setFilter] = useState([]);
    // const specialties = ['JavaScript','CSS','PHP'];

    useEffect(() => {
        fetch('jobject.json', {
            'Content-Type': 'application/json',
        }).then( response => {
            return response.json();
        }).then( myJson => {
            setJobs(myJson.jobs)
        });
    }, []);

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
            <header>
                <img className="face ring-4 ring-yellow-500 ring-opacity-50" src="../img/chad_hicks.jpg" alt="" />
                <h2 className="select-none">Chad Hicks</h2>
                <ul className="p-4">
                    <li><a href="/" onClick={ toAbout }>About Me</a></li>
                    <li><a href="https://github.com/hickscj">GitHub</a></li>
                </ul>
            </header>

            <WorkExperience jobs={ jobs }/>

            <About />

            <button id="to-top" onClick={ toTop }>^</button>
            <img className="pt-2 pb-10" src={ "../img/grandmas-full.png" } alt="Running Grandma's Marathon" />
        </div>
        </React.StrictMode>
    );
};

export default App;

