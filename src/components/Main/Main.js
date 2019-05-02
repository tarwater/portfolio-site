import React, {Component} from 'react';
import classes from './Main.module.css';
import Home from './Pages/Home/Home';
import Contact from "./Pages/Contact/Contact";
import {textEffects} from "../../scripts/misc";

class Main extends Component {

    componentDidMount() {
        setTimeout(textEffects, 0);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        setTimeout(textEffects, 0);
    }

    render() {

        let content;

        switch (this.props.page) {
            case "home":
                content = <Home pageChangeHandler={this.props.pageChangeHandler}/>;
                break;
            case "contact":
                content = <Contact/>;
                break;
            default:
                content = <Home pageChangeHandler={this.props.pageChangeHandler}/>;
        }


        return (
            <div className={classes.Main}>
                {content}
            </div>
        );
    }
}

export default Main;
