import React, { useState, useEffect } from "react";
import Job from "./Job";
import { firestore } from "./firebase";


export default function WorkExperience() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const snapshot = await firestore.collection('jobs').orderBy("id", "desc").get();
            const jobList = snapshot.docs.map( doc => {
                let job = doc.data();
                return <Job {...job} key={job.id} />;
            });
            setJobs(jobList);
        }
        fetchData();
    }, []); // pass empty array to second arg to avoid repeated api calls

    return (
        <section className="work-experience">
            {jobs}
        </section>
    );
}
