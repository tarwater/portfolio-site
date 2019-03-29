import React from 'react';
import classes from './MobileNavBar.module.css';

const MobileNavBar = (props) => {
    return (
        <div className={classes.MobileNavBar}>
            {props.children}
        </div>
    );
};

export default MobileNavBar;
