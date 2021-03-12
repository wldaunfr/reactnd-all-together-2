import React from 'react';
import PropTypes from 'prop-types';
import MessageList from './MessageList.js';
import SendMessage from './SendMessage.js';

const ChatWindow = (props) => {
  const { sender, messages, onSendMessage } = props;

  const handleSendMessage = (message) => {
    onSendMessage({
      username: sender,
      text: message
    });
  };

  return (
    <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{sender}</div>

      <MessageList sender={sender} messages={messages} />
      <SendMessage onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;

ChatWindow.propTypes = {
  messages: PropTypes.array.isRequired,
  sender: PropTypes.string.isRequired,
  onSendMessage: PropTypes.func.isRequired
};
