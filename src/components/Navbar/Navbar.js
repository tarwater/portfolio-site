import React from 'react';
import classes from './Navbar.module.css';
import NavButton from "./NavButton/NavButton";

const NavBar = (props) => {

    return (
        <div className={classes.Navbar}>
            <div className={classes.Logo}>
                <span>c</span>
                <span>l</span>
                <span>a</span>
                <span>y</span>
            </div>
            <div className={classes.NavButtons}>
                <NavButton icon={""} text={"Home"}/>
                <NavButton icon={""} text={"About"}/>
                <NavButton icon={""} text={"Skills"}/>
                <NavButton icon={""} text={"Work"}/>
                <NavButton icon={""} text={"Contact"}/>
            </div>
        </div>
    )

};

export default NavBar;
