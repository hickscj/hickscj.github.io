import React, { useState, useEffect } from "react";
import Job from "./Job";
import firebase from "firebase";
// import { firestore } from './firebase';

const Jobs = () => {
    const [hasErrors, setErrors] = useState(false);
    const [jobs, setJobs] = useState();

    const firebaseConfig = {
        apiKey: "AIzaSyDaIAnUkMqcNJwwdVAjrLaURzFa3kf0s4E",
        authDomain: "resume-api-81358.firebaseapp.com",
        databaseURL: "https://resume-api-81358.firebaseio.com",
        storageBucket: "resume-api-81358.appspot.com",
    };
      
    if(!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    useEffect(() => {
        firebase.database().ref('jobs').once('value').then((snapshot) => {
            let res = snapshot.val();
            const jobList = res.map( (job) => {
                // console.log(job.title);
                return <Job key={job.title} name={job.title} dates={job.dates} desc={job.description} />
            });
            setJobs(jobList);
        });
        // async function fetchData() {
            // const res = await fetch("https://resume-api-81358.firebaseio.com/jobs/")
            // res.json()
            //     .then(res => {
            //         const jobList = res.jobs.map( (job) => {
            //             // console.log(job.title);
            //             return <Job key={job.title} name={job.title} dates={job.dates} desc={job.description} />
            //         });
            //         setJobs(jobList);
            //     })
            //     .catch(err => setErrors(err));
        }
        // fetchData().then(() => console.log('success') );
        
        // if(hasErrors) {
        //     console.log(hasErrors);
        // }
    , []); // pass empty array to second arg to avoid repeated api calls

    return (
        <div>
            {jobs}
        </div>
    );
}

export default Jobs;