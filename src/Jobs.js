import React, { useState, useEffect } from "react";
import Job from "./Job";
// import { firestore } from './firebase';

const Jobs = () => {
    const [hasErrors, setErrors] = useState(false);
    const [jobs, setJobs] = useState();

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://damp-spire-8402.herokuapp.com/jobs/")
            res.json()
                .then(res => {
                    console.log(res.jobs[0].title);
                    const jobList = res.jobs.map( (job) => {
                        // console.log(job.title);
                        return <Job key={job.title} name={job.title} />
                    });
                    console.log(jobList);
                    setJobs(jobList);
                })
                .catch(err => setErrors(err));
            }
        fetchData().then(() => console.log('success') );
        
        if(hasErrors) {
            console.log(hasErrors);
        }
    }, []); // pass empty array to second arg to avoid repeated api calls

    return (
        <div>
            {jobs}
        </div>
    );
}

export default Jobs;