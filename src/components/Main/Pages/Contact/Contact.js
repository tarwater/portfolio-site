import React, {Component} from 'react';
import classes from './Contact.module.css';
import Button from '../../../UI/Button/Button';
import {initGoogleMap} from "../../../../scripts/misc";

class Contact extends Component {

    componentDidMount() {
        initGoogleMap();
    }

    render() {

        return (
            <div>
                <div className={classes.Main}>
                    <h1>Contact Me</h1>
                    <br/>
                    <p>If you have any questions, please feel free to contact me using the form below.</p>
                    <br/>
                    <form>
                    <input type="text" placeholder="Name"/>
                        <span></span>
                    <input type="text" placeholder="Email" required={true}/>
                        <span></span>
                        <input type="text" placeholder="Subject"/>
                        <span></span>
                        <textarea placeholder={"Message"} required={true}/>
                        <span></span>
                        <Button>SEND</Button>
                    </form>
                </div>
                <div className={classes.MapContainer}>
                    <div className={classes.Map} id="map"></div>
                </div>
            </div>


        )
    }
}

export default Contact;
