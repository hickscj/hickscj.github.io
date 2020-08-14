import React from "react";
import { render } from "react-dom";
import Job from "./Job";

const App = () => {
    return (
        <div>
            <h2>Chad J. Hicks</h2>
            <Job name="Software Engineer" />
        </div>
    )
};

render(<App />, document.getElementById("root"));
