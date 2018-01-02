import React, { Component } from 'react';
import SpeedListCard from './SpeedListCard.jsx';
import mockData from './SampleCards.jsx';


export default class SpeedListView extends Component {
  render() {
    return (
      <div className="ui four column grid container">
        {mockData.SampleCardData.map((person, key) => {
          return (
              <SpeedListCard
                handleTarget={this.props.handleTarget}
                profile={person}
                key={key}
               />

            )
        })}
      </div>
    );
  }
}