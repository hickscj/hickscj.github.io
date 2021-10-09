import {CREATE_JOB, LOAD_JOBS_SUCCESS} from "./actions";

export const jobs = (state = [], action) => {
    const { type } = action;

    switch (type) {
        case CREATE_JOB: {
            return state;
        }
        case LOAD_JOBS_SUCCESS: {
            return state;
        }
        default: {
            return state;
        }
    }
};
