import React, { Component } from 'react';
import Main from './components/Main.jsx';
import Nav from './components/Nav.jsx';
import { Grid } from 'semantic-ui-react';

import './../style/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
              <Nav />

            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={14}>
              <Main />

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

