import React, { Component } from "react";
import WorkExperience from "./WorkExperience";
import About from "./About";

class App extends Component {

    fetchData() {
        fetch('jobject.json', {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }).then( response => {
            return response.json();
        }).then( myJson => {
            console.log(myJson.jobs);
            let re = new RegExp(/javascript/, 'i');
            let jobs = myJson.jobs.filter( j => {
                if(re.test(j.description)) {
                    return j;
                }
                return false;
            });
            console.log(jobs);
            return <WorkExperience stuff={jobs} />;
        });
    }

    filteredJobs() {
        return [];
    }

    componentDidMount() {
        this.fetchData();
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
        if(evt.target.classList.contains('sel'))
            evt.target.classList.remove('sel');
        else
            evt.target.classList.add('sel');
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

                <WorkExperience filteredJobs={ this.filteredJobs() }/>

                <About />

                <button id="to-top" onClick={ this.toTop }>^</button>
                <img id="grandmas" src={ "../img/grandmas-full.png" } alt="Running Grandma's Marathon" />
            </div>
        );
    }
}

export default App;

