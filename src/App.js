import React, { Component } from 'react';
import classes from './App.module.css';
import NavBar from "./components/Navbar/Navbar";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faUser, faTools, faPaperPlane, faKeyboard, faBars } from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons';

library.add(faHome, faUser, faTools, faPaperPlane, faKeyboard, fab, faBars);

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
          <NavBar/>
      </div>
    );
  }
}

export default App;
