import React from 'react';
import classes from './Navbar.module.css';
import NavButton from "./NavButton/NavButton";
import LogoImg from '../../assets/myLogo.png';
const NavBar = (props) => {

    return (
        <div className={classes.Navbar}>
            <div className={classes.Logo}>
                <img src={LogoImg} alt="logo"/>
            </div>
            <div className={classes.NavButtons}>
                <NavButton icon={"home"} text={"home"}/>
                <NavButton icon={"user"} text={"about"}/>
                <NavButton icon={"tools"} text={"skills"}/>
                <NavButton icon={"keyboard"} text={"work"}/>
                <NavButton icon={"paper-plane"} text={"contact"}/>
            </div>
        </div>
    )

};

export default NavBar;
