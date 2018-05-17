import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav.js';
import "../style/App.css";


class App extends Component {
  render() {
    return (
      <dev className="App">
       <Nav/>
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </dev>
    );
  }
}

export default App;
