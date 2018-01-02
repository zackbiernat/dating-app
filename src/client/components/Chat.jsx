import React, { Component } from 'react';

export default class ChatView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleMessageSend = this.handleMessageSend.bind(this);
  }

  handleMessageSend () {
    let message = {
      text: this.state.text,
      user: this.props.profile.username
    }
    this.props.socket.emit('chat message', message);
  }

  enterText (e) {
    e.preventDefault();
    this.setState({
      text: e.target.value
    });
  }
  render () {
    return (
      <div className="ui container comments">
        <form className="ui reply form">
          <div className="field">
            <textarea onChange={e => this.enterText(e)} value={this.state.text}></textarea>
          </div>
          <div onClick={this.handleMessageSend} className="ui blue labeled submit icon button">
            <i className="icon edit"></i> Add Reply
          </div>
        </form>
      </div>
      )
  }
}