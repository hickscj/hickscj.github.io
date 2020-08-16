import React from "react";
import { render } from "react-dom";
import Job from "./Job.js";
import { firestore } from './firebase';

const App = () => {

    return (
        <div>
            <h2>Chad J. Hicks</h2>
            <Job name="Software Engineer" />
        </div>
    )
};


render(<App />, document.getElementById("root"));
