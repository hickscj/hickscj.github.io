import React, { useState, useEffect } from "react";
import Job from "./Job";
import { firestore } from "./firebase";


const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const snapshot = await firestore.collection('jobs').orderBy('dates', 'desc').get();
            const jobList = snapshot.docs.map( doc => {
                let job = doc.data();
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