import React, { Component } from 'react';
import SpeedListView from './SpeedListView.jsx';
import ChatView from './Chat.jsx';
import SignUpView from './SignUp.jsx';
import SignInView from './SignIn.jsx';
import { PostUser, GetUser } from './../Utils/api.jsx';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
import io from 'socket.io-client';
//import ReactCursorPosition from 'react-cursor-position';
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      profile: props.profile,
      isChatting: false,
      isFeed: true,
      target: null
    }
    this.toggleFeed = this.toggleFeed.bind(this);
    this.toggleChat = this.toggleChat.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleTarget = this.handleTarget.bind(this);
  }
  toggleVisibility () {
    this.setState({
      visible: !this.state.visible,
    })
  }
  toggleFeed () {
    this.setState({
      isChatting: false,
      isFeed: true
    })
  }
  toggleChat () {
    this.setState({
      isChatting: true,
      isFeed: false
    })
  }
  handleLogin (email, password) {
    GetUser(email, password, (err, profile) => {
      if (!err) {
        this.setState({
          profile: profile
        });
      } else {
        console.log('EERRRRR', err)
      }
    })
  }
  handleTarget (target) {
    this.setState({
      target: target
    });
    this.toggleChat();
  }


  componentDidMount () {
    let token = localStorage.getItem('dating-token');
    if (token !== "undefined" && token !== null && token !== undefined) {
      //token was found
    } else {
      // make them login
      // window.location = '/login';
    }
  }
  render() {
    const socket = io('http://localhost:3000');
    return (
      <div className="Main">
        <Sidebar.Pushable as={Segment}>
          <Sidebar width="thin" as={Menu} animation='overlay' direction='top' visible={this.state.visible} inverted>
            <Menu.Item onClick={this.toggleFeed} name='home'>
              <Icon name='home' />
              Singles Feed
            </Menu.Item>
            <Menu.Item onClick={this.toggleChat} name='chat'>
              <Icon name='chat' />
              My Chats
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              {!this.state.profile ?
                <SignInView handleLogin={this.handleLogin} />
                :
                <div>
                  {this.state.isFeed ?
                <SpeedListView handleTarget={this.handleTarget} />
                :
                <ChatView target={this.state.target} profile={this.state.profile} socket={socket} />
              }</div>}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
