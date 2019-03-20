import React, { Component } from 'react';
import classes from './App.module.css';
import NavBar from "./components/Navbar/Navbar";

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
