import React from "react";
import Job from "./Job";


const WorkExperience = (props) => {

    console.log(props.filteredJobs);

    return (
        <section className="work-experience">
            {props.filteredJobs.map( (job, idx) => {
                console.log(job);
                return(<Job key={idx} {...job} />)
            })}
        </section>
    );
}

export default WorkExperience;
