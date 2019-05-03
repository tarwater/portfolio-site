import React, {Component} from 'react';
import classes from "./Skills.module.css";
import {drawSkills, initGoogleMap} from "../../../../scripts/misc";

class Skills extends Component {

    componentDidMount() {
        drawSkills();
    }

    render(){
        let standard = 'text';
        let special = 'text ' + classes.Highlight;
        return (
            <div>
                <div className={classes.Main}>
                    <h1>About Me</h1>
                    <br/>
                    <div className={classes.Paragraph}><span className={standard}>I'm a</span> <span className={special}>full-stack web</span> <span className={standard}>and</span> <span className={special}>mobile developer</span> <span className={standard}>in Charlotte, USA.</span></div>
                    <div className={classes.Paragraph}><span className={standard}>My main tools are</span><span className={special}> PHP + Laravel</span><span className={standard}>, </span><span className={special}> Javascript + Node</span><span className={standard}>, and </span><span className={special}> Linux</span><span className={standard}>. On the front end, I adore </span><span className={special}> React.</span></div>
                    <div className={classes.Paragraph}><span className={standard}>Currently I'm spending my time building apps to support research and operations at UNC Charlotte, where I earned my undergraduate degree. I'm also working on my </span><span className={special}> Master of Computer Science</span><span className={standard}> degree at Georgia Tech.</span></div>
                    <div className={classes.Paragraph}><span className={standard}>My tech-related interests include natural language processing, data visualization, and human-computer interaction. When not developing, I can often be found cooking, running, or buried in a book.</span></div>
                </div>
                <div className={classes.CanvasContainer}>
                <canvas className={classes.Canvas} id="skills-scene">
                </canvas>
                </div>
            </div>

        )
    }
}

export default Skills;
