import React from "react";
// import { firestore } from './firebase';

const Job = ({ dates, name, desc }) => {
    return (
        <div>
            <h4>{dates}</h4>
            <h4>{name}</h4>
            <p>{desc}</p>
        </div>
    );
}

export default Job;