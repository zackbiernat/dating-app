import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

export default class SpeedListCard extends Component {

  render() {
    return (
      <div className="SpeedListCard">
        <Card>
          <Image src={this.props.profile.picture} />
          <Card.Content>
            <Card.Header>
              {this.props.profile.name}
            </Card.Header>
            <Card.Meta>
              <span className='location'>
                {this.props.profile.city}, {this.props.profile.state}
              </span>
            </Card.Meta>
            <Card.Description>
              {this.props.profile.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              {this.props.profile.age} y/o
            </a>
          </Card.Content>
        </Card>
      </div>
    );
  }
}