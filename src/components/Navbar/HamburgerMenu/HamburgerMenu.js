import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import classes from './HamburgerMenu.module.css';

const HamburgerMenu = (props) => {

    return (
        <div className={classes.HamburgerMenu}>
            <FontAwesomeIcon icon="bars"/>
        </div>
    );
};

export default HamburgerMenu;
