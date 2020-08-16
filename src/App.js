import React from "react";
import { render } from "react-dom";
import Jobs from "./Jobs";

const App = () => {
    return (
        <div>
            <h2>Chad J. Hicks</h2>
            <Jobs />
        </div>
    )
};


render(<App />, document.getElementById("root"));
