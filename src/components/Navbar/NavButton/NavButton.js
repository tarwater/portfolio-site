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

        if(this.props.page === this.props.text){
            iconClasses = iconClasses + " " + Classes.Active;
        }

        return (
            <div className={Classes.Button} onMouseEnter={this.handleOnHover} onMouseLeave={this.handleOnLeave} onClick={() => this.props.clickHandler(this.props.text)}>
                <span className={iconClasses}><FontAwesomeIcon icon={this.props.icon}/></span>
                <span className={textClasses}>{this.props.text}</span>
            </div>
        )
    }
}

export default NavButton;
