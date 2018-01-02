import React, { Component } from 'react';
import './../../style/chat.css';

export default class ChatView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: '',
      convo: props.convo
    };
    this.handleMessageSend = this.handleMessageSend.bind(this);
  }

  handleMessageSend () {
    let message = {
      message: this.state.text,
      fromId: this.props.profile._id,
      toId: this.props.target._id,
      fromUN: this.props.profile.username,
      toUN: this.props.target.username
    }
    this.props.socket.emit('chat message', message);
    let target = this.props.target
    this.props.refreshConvo(target);
  }

  enterText (e) {
    e.preventDefault();
    this.setState({
      text: e.target.value
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      convo: nextProps.convo,
      text: ''
    });
  }
  render () {
    return (
      <div className="">
        <div className="comment-container">
          {this.state.convo.map((message, key) => {
            if (message.fromId === this.props.profile._id) {
              return (
                <div key={key} className="sent-message">
                  <span className="message-content">{message.message}</span>
                  <span className="message-username">{message.fromUN}</span>
                </div>
              )
            } else {
              return (
                <div key={key} className="received-message">
                  <span className="message-content">{message.message}</span>
                  <span className="message-username">{message.toUN}</span>
                </div>
              )
            }

          })}
        </div>
          <div className="response-container">
            <textarea className="response-field" onChange={e => this.enterText(e)} value={this.state.text}></textarea>
          </div>
          <div onClick={this.handleMessageSend} className="ui blue labeled submit icon button">
            <i className="icon edit"></i> Send Message
          </div>

      </div>
      )
  }
}