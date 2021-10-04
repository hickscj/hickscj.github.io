import React from "react";

const Job = ({ title, startDate, endDate, employer, description }) => {
    return (
        <div className="border border-green-500 rounded-md p-5 m-1">
            <h3 className="text-xl font-bold">{startDate} - {endDate}</h3>
            <h3 className="text-xl font-bold">{title} at {employer}</h3>
            <p className="pt-3">{description}</p>
        </div>
    );
};

export default Job;
