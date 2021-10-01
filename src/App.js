import React, { useState, useEffect } from "react";
import WorkExperience from "./WorkExperience";
import About from "./About";
//import Skills from "./Skills";
import SkillsVerbose from "./SkillsVerbose";
// import FilterButton from "./FilterButton";

const App = () => {
    const [jobs, setJobs] = useState([]);
    // const [filter, setFilter] = useState([]);
    // const specialties = ['JavaScript','CSS','PHP'];

    useEffect(() => {
        fetch('jobject.json', {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }).then( response => {
            return response.json();
        }).then( myJson => {
            // let filters = filter.join('|');
            // let re = new RegExp(`${filters}`, 'i');
            // setJobs(myJson.jobs.filter( j => re.test(j.description) ? j : false ));
            setJobs(myJson.jobs)
        });
    }, []);

    function toTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    function toAbout() {
        let coords = document.getElementById('about').getBoundingClientRect();
        window.scrollTo({
            top: coords.top,
            left: coords.left,
            behavior: 'smooth'
        });
    }

    // const highlightRelevant = (evt) => {
    //     let selected = document.getElementsByClassName('sel');
    //     let selText = [];
    //     if(evt.target.textContent === 'All' && !evt.target.classList.contains('sel')) {
    //         setFilter([]);
    //         for(let s of selected) {
    //             if(s.classList.contains('sel') && s.textContent !== 'All') s.classList.remove('sel');        
    //         }
    //     } else {
    //         for(let s of selected) {
    //             selText.push(s.textContent);
    //         }
    //         setFilter(selText);
    //     }
    //     if(evt.target.classList.contains('sel')) {
    //         evt.target.classList.remove('sel');
    //     } else {
    //         evt.target.classList.add('sel');
    //     }
    // };

    return (
        <React.StrictMode>
        <div id="myResume">
            <header>
                <img className="face" src="../img/chad_hicks.jpg" alt="" />
                <h2>Chad Hicks</h2>
                <div>
                {/*<button className="info" onClick={ toAbout }>i</button>*/}
                    <ul id="specialties">
                        <li><button onClick={ toAbout }>About Me</button></li>
                    </ul>
                </div>
            </header>
{/*
            <ul id="specialties">
                <li><button className='linkish' onClick={ toAbout }>About Me</button></li>
                specialties.map( s => {
                    return <li key={s}><FilterButton action={highlightRelevant} text={s} /></li>;
                })
            </ul>
*/}

            <SkillsVerbose />

            <WorkExperience jobs={ jobs }/>

            <About />

            <button id="to-top" onClick={ toTop }>^</button>
            <img id="grandmas" src={ "../img/grandmas-full.png" } alt="Running Grandma's Marathon" />
        </div>
        </React.StrictMode>
    );
};

export default App;

