import React from "react";
import Job from "./Job";
import { connect } from "react-redux";


const WorkExperience = ({ jobs = [] }) => {

    return (
        <section className="work-experience">
            {jobs.map( (job, idx) => {
                if (idx < 5) {
                    return(<Job key={idx} {...job} />)
                }
            })}
        </section>
    );
}

const mapStateToProps = state => ({
    jobs: state.jobs,
});

export default connect(mapStateToProps)(WorkExperience);
