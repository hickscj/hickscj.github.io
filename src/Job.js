import React from "react";

const Job = ({ dates, name, desc }) => {
    return (
        <div className="job">
            <h4>{dates}</h4>
            <h4>{name}</h4>
            <p>{desc}</p>
        </div>
    );
}

export default Job;