import React, { useState, useEffect } from "react";
// import { firestore } from './firebase';

const Jobs = () => {
    const [hasErrors, setErrors] = useState(false);
    const [jobs, setJobs] = useState({});

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://damp-spire-8402.herokuapp.com/jobs/")
            res.json()
                .then(res => {
                    console.log(res.jobs[0].title);
                    setJobs(res.jobs[0]);
                })
                .catch(err => setErrors(err));
            }
        fetchData();
        
        if(hasErrors) {
            console.log(hasErrors);
        }
    }, []); // pass empty array to second arg to avoid repeated api calls

    return (
        <div>
            {jobs.title}            
        </div>
    );
}

export default Jobs;