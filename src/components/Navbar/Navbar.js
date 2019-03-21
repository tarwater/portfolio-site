import React, {Component} from 'react';
import classes from './Navbar.module.css';
import NavButton from "./NavButton/NavButton";
import LogoImg from '../../assets/myLogo.png';

class NavBar extends Component {

    constructor(props){
        super(props);

        this.state = {
            page: "home" // could also be about, skills, work, contact
        }
    }

    clickHandler = (page) => {
        this.setState({
            page: page
        });
    };

    render() {
        return (
            <div className={classes.Navbar}>
                <div className={classes.Logo}>
                    <img src={LogoImg} alt="logo"/>
                </div>
                <div className={classes.NavButtons}>
                    <NavButton page={this.state.page} icon={"home"} text={"home"} clickHandler={this.clickHandler}/>
                    <NavButton page={this.state.page} icon={"user"} text={"about"} clickHandler={this.clickHandler}/>
                    <NavButton page={this.state.page} icon={"tools"} text={"skills"} clickHandler={this.clickHandler}/>
                    <NavButton page={this.state.page} icon={"keyboard"} text={"work"} clickHandler={this.clickHandler}/>
                    <NavButton page={this.state.page} icon={"paper-plane"} text={"contact"} clickHandler={this.clickHandler}/>
                </div>
            </div>
        )
    }

}

export default NavBar;
