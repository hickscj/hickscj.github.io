import React, { Component } from 'react';

class TestComponent extends Component {

    constructor(props) {
        super(props);
        this.timeStyle = { 
            color: 'white', 
            background: 'red',
            padding: '10px 2px',
            textAlign: 'center'
        };
    }

    render() {
        return (
            <div>
                <h4 style={ this.timeStyle }>{ this.props.whatever }</h4>
                <h5>a TEST Component</h5>
            </div>
        )
    }
}

export default TestComponent;
