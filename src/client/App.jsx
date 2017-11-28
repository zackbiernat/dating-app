import React, { Component } from 'react';
import Main from './components/Main.jsx';
import Nav from './components/Nav.jsx';
import './../style/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <span>Welcome to the app</span>
        <Nav />
        <Main />
      </div>
    );
  }
}

