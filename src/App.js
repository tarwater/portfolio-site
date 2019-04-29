import React, {Component} from 'react';
import classes from './App.module.css';
import NavBar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faHome, faUser, faTools, faPaperPlane, faKeyboard, faBars} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons';
import './scripts/misc';

library.add(faHome, faUser, faTools, faPaperPlane, faKeyboard, fab, faBars);

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            page: "home", // could also be about, skills, work, contact
        };
    }

    pageChangeHandler = (page) => {
        this.setState({
            page: page
        });
    };

    render() {
        return (
            <div className={classes.App}>
                <NavBar page={this.state.page} pageChangeHandler={this.pageChangeHandler}/>
                <Main page={this.state.page}/>
            </div>
        );
    }
}

export default App;
