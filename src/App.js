import React, { useState, useEffect } from "react";
import WorkExperience from "./WorkExperience";
import About from "./About";

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

    const toAbout = () => {
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
                <h2>Chad Hicks</h2>
                <div>
                {/*<button className="info" onClick={ toAbout }>i</button>*/}
                    <button onClick={ toAbout }>About Me</button>
                </div>
            </header>

            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">img</div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                        <a href="/" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding
                            customers for your new business</a>
                        <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work.
                            Here are five ideas you can use to find your first customers.</p>
                    </div>
                </div>
            </div>

            {/*<SkillsVerbose />*/}

            <WorkExperience jobs={ jobs }/>

            <About />

            <button id="to-top" onClick={ toTop }>^</button>
            <img id="grandmas" src={ "../img/grandmas-full.png" } alt="Running Grandma's Marathon" />
        </div>
        </React.StrictMode>
    );
};

export default App;

