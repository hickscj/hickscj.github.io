import {
    loadJobsInProgress,
    loadJobsSuccess
} from "./actions";
// import db from './firebase-config';
// import { collection, getDocs } from "firebase/firebase-firestore";

export const loadJobs = () => async (dispatch) => {
    try {
        dispatch(loadJobsInProgress());
        const response = await fetch('jobject.json');
        const jobs = await response.json();
        // const response = await collection(db, 'jobs');
        // const jobs = await getDocs(response);

        // db.collection('jobs').get().then(snap => {
        //     const jobs = [];
        //     snap.forEach(job => jobs.push(job.data()));
        //     return jobs;
        // }).then(jobs => {
        //     dispatch(loadJobsSuccess(jobs));
        // });
        dispatch(loadJobsSuccess(jobs));
    } catch (e) {
        alert(`Error loading from firebase... ${e}`);
    }
};

export const displayAlert = text => () => {
    alert(`${text}`);
};
