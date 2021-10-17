import React from "react";

const Job = ({ title, startDate, endDate, employer, description }) => {
    return (
        <div className="border border-gray-300 rounded-md p-5 mb-4">
            <h3 className="text-xl font-bold">{startDate} - {endDate}</h3>
            <h3 className="text-xl font-bold">{title} at {employer}</h3>
            <p className="pt-3">{description}</p>
        </div>
    );
};

export default Job;
