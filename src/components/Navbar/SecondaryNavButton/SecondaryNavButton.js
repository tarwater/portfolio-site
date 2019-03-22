import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import classes from './SecondaryNavButton.module.css';

const SecondaryNavButton = (props) => {

    return (
        <div className={classes.SecondaryNavButton}>
            <a href={props.link}>
                <span><FontAwesomeIcon icon={props.icon}/></span>
            </a>
        </div>

    )
};

export default SecondaryNavButton;
