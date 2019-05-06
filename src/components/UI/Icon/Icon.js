import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classes from "../../Main/Pages/Work/Work.module.css";

const Icon = (props) => {



    return (
        <FontAwesomeIcon icon={props.icon}/>
    );
};

export default Icon;
