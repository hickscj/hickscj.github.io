import React from "react";

const Job = ({ title, startDate, endDate, employer, description }) => {
    return (
        <div className="job">
            <h4>{startDate} - {endDate}</h4>
            <h4>{title} at {employer}</h4>
            <p>{description}</p>
        </div>
    );
};

export default Job;
