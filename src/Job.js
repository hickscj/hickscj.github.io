import React from "react";

const Job = ({ title, startDate, endDate, description }) => {
    return (
        <div className="job">
            <h4>{startDate} - {endDate}</h4>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
};

export default Job;
