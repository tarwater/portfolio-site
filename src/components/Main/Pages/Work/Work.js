import React, {Component} from 'react';
import classes from "./Work.module.css"
import {unmountWork, workBackground} from "../../../../scripts/misc";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Work extends Component {

    constructor(props) {
        super(props);
        this.state = {
            react: false,
            js: false,
            android: false,
            node: false
        };
    }

    onHover = (e) => {
        let classes = e.target.className.split(" ");

        let state = {
            react: classes.includes("react"),
            js: classes.includes("js"),
            android: classes.includes("android"),
            node: classes.includes("node"),
        };

        this.setState(state);
    };

    reset = (e) => {
        this.setState({
            react: false,
            js: false,
            android: false,
            node: false
        });
    };

    componentDidMount() {
        workBackground();
    }

    componentWillUnmount() {
        unmountWork();
    }

    render() {

        return (
            <div>
                <div className={classes.Main}>
                    <h1>Projects</h1>
                    <br/>
                    <p className={classes.Paragraph}>Here's a few things I've built for fun or practice.</p>
                    <ul className={classes.List}>
                        <li><a className={"react"} href="#" onMouseOver={this.onHover}
                               onMouseLeave={this.reset}>This very site!</a></li>
                        <li><a className={"node"} href="/projects/markov" onMouseOver={this.onHover}
                               onMouseLeave={this.reset}>Markov Text Generator</a></li>
                        <li><a className={"android"}
                               href="https://play.google.com/store/apps/details?id=com.clay.meditation"
                               onMouseOver={this.onHover} onMouseLeave={this.reset}>Meditation Timer</a></li>
                        <li><a className={"node"} href="https://github.com/tarwater/node-game-bot"
                               onMouseOver={this.onHover} onMouseLeave={this.reset}>IRC Game Bot</a></li>
                        <li><a className={"node js"} href="/projects/movies" onMouseOver={this.onHover}
                               onMouseLeave={this.reset}>CRUD Demo</a></li>
                        <li><a className={"js"} href="/projects/snake" onMouseOver={this.onHover}
                               onMouseLeave={this.reset}>Snake Game</a></li>
                        {/*<li><a className={"js"} href="/projects/simon" onMouseOver={this.onHover}*/}
                        {/*       onMouseLeave={this.reset}>Simon</a></li>*/}
                    </ul>
                </div>
                <div className={classes.IconContainer}>
                    <FontAwesomeIcon className={this.state.js ? classes.Active : 'no'} icon={['fab', 'js-square']}/>
                    <FontAwesomeIcon className={this.state.node ? classes.Active : 'no'} icon={['fab', 'node']}/>
                    <FontAwesomeIcon className={this.state.react ? classes.Active : 'no'} icon={['fab', 'react']}/>
                    <FontAwesomeIcon className={this.state.android ? classes.Active : 'no'} icon={['fab', 'android']}/>
                </div>
                <canvas className={classes.Canvas} id="work-scene">
                </canvas>
            </div>
        )

    }
}

export default Work;
