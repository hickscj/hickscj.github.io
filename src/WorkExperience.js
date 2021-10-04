import React from "react";
import Job from "./Job";


const WorkExperience = (props) => {

    return (
        <section className="work-experience">
            {props.jobs.map( (job, idx) => {
                if (idx < 5) {
                    return(<Job key={idx} {...job} />)
                }
            })}
        </section>
    );
}

export default WorkExperience;
