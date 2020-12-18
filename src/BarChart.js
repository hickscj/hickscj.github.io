import React, { Component } from 'react';
import * as d3 from 'd3';

class BarChart extends Component {

    drawChart() {
        const data = [12, 5, 6, 6, 9, 10];

        const svg = d3.select('#bar-chart').append('svg')
            .attr('width', 700)
            .attr('height', 200);

        svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', 65)
            .attr('height', 101)
            .attr('fill', 'green');
    }

    componentDidMount() {
        this.drawChart();
    }

    render() {
        return <div id='bar-chart'></div>;
    }
}

export default BarChart;

