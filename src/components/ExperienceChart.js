import React, { Component } from 'react';
import * as d3 from 'd3';

class ExperienceChart extends Component {

    constructor(props) {
        super(props);

        this.chartCanvas = React.createRef();
        // this.createChart();
    }

    createChart() {
        // const data = [{'name': 'A', 'value': 0.1}, {'name': 'B', 'value': 2}];
        // const width = 600, height = 400;
        // const svg = d3.create("svg").attr("viewBox", [0, 0, width, height]);
        // const margin = ({top: 20, right: 0, bottom: 30, left: 40});

        d3.select(this.chartCanvas.current)
            .attr("height", 200)
            .attr("width", 600)
            .attr("border", "2px solid red")
            .append("h1")
            .text("bananas");
    }

    renderCircle() {
        const circleProps = {
            cx: 60,
            cy: 60,
            r: 50,
            key: 1
        };
        return <circle {...circleProps} />;
    }

    // componentDidMount() 
    //     // const data = [2,4,2,6,8];
    //     this.createChart();
    // }

    render() {
        return (
            <svg width={this.props.width} height={this.props.height}>
                <g>{ this.renderCircle() }</g>
            </svg>
        );
    }
  }

  export default ExperienceChart;