import React from 'react';
import PropTypes from 'prop-types';

const SendButton = (props) => {
  const { disabled } = props;
  
  return (
    <div className="input-group-append">
      <button className="btn submit-button" disabled={disabled()}>
        SEND
      </button>
    </div>
  );
}

export default SendButton;

SendButton.propTypes = {
  disabled: PropTypes.func.isRequired
}
