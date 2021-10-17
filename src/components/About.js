import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <section id="about">
                <h3 className="text-xl font-bold pb-1">About</h3>
                <p>I am a Software Engineer who loves science, the outdoors, and learning new things. I&apos;m also interested in psychology and productivity.</p>
                <h3 className="text-xl font-bold pt-5 pb-1">Personality and Disposition</h3>
                <ul>
                    <li>Strengths Finder: 
                        &nbsp;<a href="https://www.gallup.com/cliftonstrengths/en/252278/input-theme.aspx" target="_blank" rel="noreferrer">Input</a>, 
                        &nbsp;<a href="https://www.gallup.com/cliftonstrengths/en/252293/learner-theme.aspx" target="_blank" rel="noreferrer">Learner</a>, 
                        &nbsp;<a href="https://www.gallup.com/cliftonstrengths/en/252197/connectedness-theme.aspx" target="_blank" rel="noreferrer">Connectedness</a>, 
                        &nbsp;<a href="https://www.gallup.com/cliftonstrengths/en/252323/restorative-theme.aspx" target="_blank" rel="noreferrer">Restorative</a>, 
                        &nbsp;<a href="https://www.gallup.com/cliftonstrengths/en/252350/strategic-theme.aspx" target="_blank" rel="noreferrer">Strategic</a>
                    </li>
                    <li>Enneagram: <a href="https://www.enneagraminstitute.com/type-9" target="_blank" rel="noreferrer">Type 9 - The Peacemaker</a>&nbsp;|&nbsp;  
            <a href="https://www.enneagraminstitute.com/type-7" target="_blank" rel="noreferrer">Type 7 - The Enthusiast</a></li>
                    <li>
                        DiSC Assessment:
                        <br />Highest dimension: <a href="https://www.discprofiles.com/blog/2019/08/what-is-the-disc-sc-style/" target="_blank" rel="noreferrer">Steadiness and Conscientiousness</a>
                        <br />Segment Number: D 2 i 4 S 5 C 5
                        <br />Classical Pattern: <a href="https://www.discprofiles4u.com/blog/2012/disc-classic-2-perfectionist-pattern-15-of-16/" target="_blank" rel="noreferrer">Perfectionist</a>
                    </li>
                </ul>
            </section>
        );  
    }
}
