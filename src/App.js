import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Points from './Components/Points';
import Map from './Components/Map';
import Input from './Components/Input';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Test task for Funbox</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Input />
            <Points />
          </div>
          <div className="col-md-8">
            <Map />
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
