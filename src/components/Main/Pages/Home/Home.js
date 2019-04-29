import React, {Component} from 'react';
import classes from './Home.module.css';

class Home extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {

        return (
            <div>
                <div className={classes.Text}>
                    <h1>Hi,</h1><h1>I'm Clay,</h1><h1>web developer</h1>
                    <br/>
                    <h2>Full-stack dev | Problem Solver</h2>
                </div>

            </div>
        )
    }
}

export default Home;
