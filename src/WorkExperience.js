import React, {useEffect} from "react";
import Job from "./Job";
import { connect } from "react-redux";
import { loadJobs } from "./thunks";
import { getJobs } from "./selectors";
// import {loadJobsSuccess} from "./actions";

const WorkExperience = ({ jobs, startLoadingJobs }) => {
    useEffect(() => {
        startLoadingJobs()
    }, []);

    return (
        <section className="work-experience">
            {Array.from(jobs).sort((a, b) => b.key - a.key).map( (job, idx) => {
                if (idx < 5) {
                    return(<Job key={idx} {...job} />)
                }
            })}
        </section>
    );
}

const mapStateToProps = state => ({
    jobs: getJobs(state),
});

const mapDispatchToProps = dispatch => ({
    startLoadingJobs: () => dispatch(loadJobs()),
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkExperience);
