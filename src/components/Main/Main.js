import React, {Component} from 'react';
import classes from './Main.css';
import Home from './Pages/Home/Home';

class Main extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {

        let content;

        switch (this.props.page) {
            case "home":
                content = <Home/>;
                break;
            default:
                content = <Home/>;
        }

        return (
            <div className={classes.Page}>
                {content}
            </div>
        );
    }
}

export default Main;
