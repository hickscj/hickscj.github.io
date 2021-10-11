import {
    CREATE_JOB,
    LOAD_JOBS_SUCCESS
} from "./actions";

const initialState = { isLoading: false, data: [] };

export const jobs = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_JOB: {
            return state;
        }
        case LOAD_JOBS_SUCCESS: {
            const { jobs } = payload;
            return {
                ...state,
                isLoading: false,
                data: jobs
            }
        }
        default: {
            return state;
        }
    }
};
