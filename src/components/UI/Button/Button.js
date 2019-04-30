import React, {Component} from 'react';
import classes from "./Button.module.css"

class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {hovering: false};
    }

    handleOnHover = () => {
        this.setState({hovering: true})
    };

    handleOnLeave = () => {
        this.setState({hovering: false})
    };

    render(){
        let buttonClasses = classes.Button;

        if (this.state.hovering) {
            buttonClasses = buttonClasses + " " + classes.Hover;
        }

        return (
            <button className={buttonClasses} onClick={this.props.clickHandler} onMouseEnter={this.handleOnHover} onMouseLeave={this.handleOnLeave}>
                {this.props.children}</button>
        )
    }
}

export default Button;
