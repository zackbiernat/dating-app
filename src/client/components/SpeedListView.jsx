import React, { Component } from 'react';
import SpeedListCard from './SpeedListCard.jsx';


export default class SpeedListView extends Component {
  render() {
    return (
      <div className="SpeedListView">
        SpeedListView Component
        <SpeedListCard />
      </div>
    );
  }
}