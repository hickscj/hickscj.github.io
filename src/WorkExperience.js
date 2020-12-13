import React, { useState, useEffect } from "react";
import Job from "./Job";
// import { firestore } from "./firebase";


const WorkExperience = () => {
    const [jobs, setJobs] = useState([]);

    function fetchData() {
        fetch('jobject.json', {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }).then( response => {
            return response.json();
        }).then( myJson => {
            setJobs(myJson.jobs.map( job => {
                return <Job key={job.key} {...job} />;
            }));
        });
    }

    useEffect( () => {
        fetchData();
    }, []);

    return (
        <section className="work-experience">
            {jobs}
        </section>
    );
}

export default WorkExperience;
