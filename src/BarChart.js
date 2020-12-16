import React from 'react';
//import * as d3 from 'd3';

const BarChart = () => {
    return (
        <svg
            style={{
                height: 400,
                width: "100%"
            }}
        >
            <g className="plot-area" />
            <g className="x-axis" />
            <g className="y-axis" />
        </svg>
    )
};

export default BarChart;

