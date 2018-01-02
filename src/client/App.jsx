import React, { Component } from 'react';
import Main from './components/Main.jsx';
import Nav from './components/Nav.jsx';
import { Grid } from 'semantic-ui-react';

import './../style/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

