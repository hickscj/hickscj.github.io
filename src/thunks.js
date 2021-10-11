import {
    loadJobsInProgress,
    loadJobsSuccess
} from "./actions";
import db from './firebase-config';

export const loadJobs = () => async (dispatch) => {
    try {
        dispatch(loadJobsInProgress());
        // const response = await fetch('jobject.json');
        // const data = await response.json();
        // const response = await collection(db, 'jobs');
        // const jobs = await getDocs(response);
        // dispatch(loadJobsSuccess(data.jobs));

        db.collection('jobs').get().then(snap => {
            const jobs = [];
            snap.forEach(job => jobs.push(job.data()));
            return jobs;
        }).then(jobs => {
            dispatch(loadJobsSuccess(jobs));
        });
    } catch (e) {
        alert(`Error loading job data... ${e}`);
    }
};

export const displayAlert = text => () => {
    alert(`${text}`);
};
