import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// TODO find out how to handle css in tests
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, Funbox! </h1>
        <h2> I would like to work with you</h2>
      </div>
    );
  }
}

export default hot(module)(App);
