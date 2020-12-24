// functional version
import React, { useState } from 'react';
import TestComponentClass from './TestComponent.class';

export default function TestComponent(props) {
    let [test1, setTest1] = useState();

    setInterval(() => {
        let d = new Date();
        setTest1(d.toUTCString());
    }, 1000);

    return (
        <div>
            <h3>This is { props.whatever } a FUNCTIONAL TestComponent</h3>
            <TestComponentClass whatever={ test1 } />
        </div>
    )
};
