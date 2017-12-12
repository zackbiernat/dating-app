import React, { Component } from 'react';
import SpeedListView from './SpeedListView.jsx';
import ChatView from './Chat.jsx';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
//import ReactCursorPosition from 'react-cursor-position';
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility () {
    this.setState({
      visible: !this.state.visible
    })
  }

  componentDidMount () {
    console.log('socket', socket);
  }
  render() {
    return (
      <div className="Main">
        <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar width="thin" as={Menu} animation='overlay' direction='top' visible={this.state.visible} inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <SpeedListView />
              <ChatView />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>

      </div>
    );
  }
}
