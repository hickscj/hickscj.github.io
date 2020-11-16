import React from "react";

const Job = ({ title, dates, description }) => {
    return (
        <div className="job">
            <h4>{dates}</h4>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
}

export default Job;