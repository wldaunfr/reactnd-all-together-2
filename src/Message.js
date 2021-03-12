import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
  const { sender, message } = props;
  
  return (
    <li className={ message.username === sender ? 'message sender' : 'message recipient' }>
      <p>{`${message.username}: ${message.text}`}</p>
    </li>
  );
}

export default Message;

Message.propTypes = {
  sender: PropTypes.string.isRequired,
  message: PropTypes.object.isRequired
};
