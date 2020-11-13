import React, { useState, useEffect } from "react";
import Job from "./Job";
import { firestore } from "./firebase";


const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const snapshot = await firestore.collection('jobs').get();
            // const jobList = [];
            // snapshot.forEach( doc => {
            //     let job = doc.data();
            //     jobList.push(<Job key={job.title} name={job.title} dates={job.dates} desc={job.description} />)
            // });
            const jobList = snapshot.docs.map( doc => {
                let job = doc.data();
                console.log(job);
                return <Job {...job} key={job.title} />;
            });
            setJobs(jobList);
        }
        fetchData();
    }, []); // pass empty array to second arg to avoid repeated api calls

    return (
        <div id="jobs">
            {jobs}
        </div>
    );
}

export default Jobs;