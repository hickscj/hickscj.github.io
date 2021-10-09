export const CREATE_JOB = 'CREATE_JOB';
export const createJob = job => ({
    type: CREATE_JOB,
    payload: { job }
});

export const LOAD_JOBS_IN_PROGRESS = 'LOAD_JOBS_IN_PROGRESS';
export const loadJobsInProgress = () => ({
    type: LOAD_JOBS_IN_PROGRESS,
});

export const LOAD_JOBS_SUCCESS = 'LOAD_JOBS_SUCCESS';
export const loadJobsSuccess = jobs => ({
    type: LOAD_JOBS_SUCCESS,
    payload: { jobs }
});
