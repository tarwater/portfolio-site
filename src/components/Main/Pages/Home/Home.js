import React, {Component} from 'react';
import classes from './Home.module.css';
import Button from '../../../UI/Button/Button';

class Home extends Component {

    clickHandle = () => {
        this.props.pageChangeHandler("contact")
    };

    render() {

        return (
            <div>
                <div className={classes.Main}>
                    <h1>Hi,</h1><h1>I'm Clay,</h1><h1>web developer</h1>
                    <br/>
                    <h2>Full-stack dev | Problem Solver</h2>
                    <Button clickHandler={this.clickHandle}>CONTACT ME</Button>
                </div>
            </div>
        )
    }
}

export default Home;
