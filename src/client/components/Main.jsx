import React, { Component } from 'react';
import SpeedListView from './SpeedListView.jsx';
import ChatView from './Chat.jsx';
import SignUpView from './SignUp.jsx';
import SignInView from './SignIn.jsx';
import { PostUser } from './../Utils/api.jsx';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
//import ReactCursorPosition from 'react-cursor-position';
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      profile: props.profile
    }
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility () {
    this.setState({
      visible: !this.state.visible
    })
  }


  componentDidMount () {
    let token = localStorage.getItem('dating-token');
    if (token !== "undefined" && token !== null && token !== undefined) {
      console.log('token found!')
    } else {
      window.location = '/login';
    }
  }
  render() {
    return (
      <div className="Main">
        <Sidebar.Pushable as={Segment}>
          <Sidebar width="thin" as={Menu} animation='overlay' direction='top' visible={this.state.visible} inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Singles Feed
            </Menu.Item>
            <Menu.Item name='chat'>
              <Icon name='chat' />
              My Chats
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <SignInView
                handleLogin={this.handleLogin}
              />
              <ChatView />
              <SignUpView />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
