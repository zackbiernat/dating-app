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
      user: this.props.user.name
    }
    socket.emit('chat message', message);
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
        <h3 className="ui dividing header">Comments</h3>
        <div className="comment">
          <a className="avatar">
            <img src="/images/avatar/small/matt.jpg" />
          </a>
          <div className="content">
            <a className="author">Matt</a>
            <div className="metadata">
              <span className="date">Today at 5:42PM</span>
            </div>
            <div className="text">
              How artistic!
            </div>
            <div className="actions">
              <a className="reply">Reply</a>
            </div>
          </div>
        </div>
        <div className="comment">
          <a className="avatar">
            <img src="/images/avatar/small/elliot.jpg" />
          </a>
          <div className="content">
            <a className="author">Elliot Fu</a>
            <div className="metadata">
              <span className="date">Yesterday at 12:30AM</span>
            </div>
            <div className="text">
              <p>This has been very useful for my research. Thanks as well!</p>
            </div>
            <div className="actions">
              <a className="reply">Reply</a>
            </div>
          </div>
          <div className="comments">
            <div className="comment">
              <a className="avatar">
                <img src="/images/avatar/small/jenny.jpg" />
              </a>
              <div className="content">
                <a className="author">Jenny Hess</a>
                <div className="metadata">
                  <span className="date">Just now</span>
                </div>
                <div className="text">
                  Elliot you are always so right :)
                </div>
                <div className="actions">
                  <a className="reply">Reply</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="comment">
          <a className="avatar">
            <img src="/images/avatar/small/joe.jpg" />
          </a>
          <div className="content">
            <a className="author">Joe Henderson</a>
            <div className="metadata">
              <span className="date">5 days ago</span>
            </div>
            <div className="text">
              Dude, this is awesome. Thanks so much
            </div>
            <div className="actions">
              <a className="reply">Reply</a>
            </div>
          </div>
        </div>
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