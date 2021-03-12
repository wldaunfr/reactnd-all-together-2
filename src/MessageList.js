import React from 'react';
import Message from './Message.js';

const MessageList = (props) => {
  const { messages, sender } = props;
  
  return (
    <ul className="message-list">
      {messages.map((message, index) => (
        <Message key={index} message={message} sender={sender} />
      ))}
    </ul>
  );
}

export default MessageList;
