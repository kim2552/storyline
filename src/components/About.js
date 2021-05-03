import React from 'react'

const About = () => {
    return (
        <div style={{margin:"5rem",marginTop: "1rem"}}>
            <h1 style={{fontSize: "2rem"}}>Storyline</h1>
            <p style={{fontSize: "1rem"}}>
                Travel back in time by looking at articles in the past!
            </p>
            <p style={{fontSize: "1rem"}}>
                Scroll through the timeline and click a year to generate articles written in the date selected.<br></br>
                Enter and submit a topic in the keyword search in order to generate articles related to the topic.<br></br>
                Scroll through a list of articles corresponding to the year and keyword selected.
            </p>
            <p style={{fontSize: "1rem"}}>
                This website uses Google News RSS feed to generate the list of articles.
            </p>
            <p style={{fontSize: "1rem"}}>
                Developed using React JS by <a href="https://kimd.dev" rel="noreferrer" target="_blank" style={{fontSize: "1rem", color: "blue"}}>David Kim</a>
            </p>
        </div>
    )
}

export default About
