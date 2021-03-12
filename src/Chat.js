import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatWindow from './ChatWindow.js';

class Chat extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired
  };
  
  state = {
    messages: []
  };

  handleSendMessage = (message) => {
    this.setState((prevState) => {
      return {
        messages: [...prevState.messages, message]
      };
    });
  };

  render() {
    const { users } = this.props;
    const { messages } = this.state;
    
    return (
      <div className="container">
        {
          users.map((user) => (
            <ChatWindow key={user.username} sender={user.username} messages={messages} onSendMessage={this.handleSendMessage} />
          ))
        }
      </div>
    );
  }
}

export default Chat;
