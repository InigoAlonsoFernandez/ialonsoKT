import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'react-bootstrap';

//import Button from 'react-bootstrap/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="headerBar">
          <span>Username: @Iñigo</span>
          <span>change user</span>
        </header>
      </div>
    );
  }
}

export default App;
