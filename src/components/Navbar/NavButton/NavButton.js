import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Classes from './NavButton.module.css';

class NavButton extends Component {

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

    render() {
        let iconClasses, textClasses;
        if (this.state.hovering) {
            iconClasses = Classes.Icon + " " + Classes.Hide;
            textClasses = Classes.Text + " " + Classes.Show;
        } else {
            iconClasses = Classes.Icon;
            textClasses = Classes.Text;
        }

        return (
            <div onMouseEnter={this.handleOnHover} onMouseLeave={this.handleOnLeave}>
                <a href="">
                    <span className={iconClasses}><FontAwesomeIcon icon={this.props.icon}/></span>
                    <span className={textClasses}>{this.props.text}</span>
                </a>
            </div>
        )
    }

}

export default NavButton;
