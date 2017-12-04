import React, { Component } from 'react';
import SpeedListCard from './SpeedListCard.jsx';
import mockData from './SampleCards.jsx';


export default class SpeedListView extends Component {
  render() {
    return (
      <div className="ui four column grid">
        {mockData.SampleCardData.map((person, key) => {
          return (
              <SpeedListCard
                profile={person}
                key={key}
               />

            )
        })}
      </div>
    );
  }
}