import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SendButton from './SendButton.js';

class SendMessage extends Component {
  static propTypes = {
    onSendMessage: PropTypes.func.isRequired
  };
  
  state = {
    message: ''
  };

  handleChange = (message) => {
    this.setState({message});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSendMessage(this.state.message);
  };

  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return this.state.message === '';
  };

  render() {
    return (
      <form className="input-group" onSubmit={this.handleSubmit}>
        <input className="form-control"
          type="text"
          placeholder="Enter your message..."
          value={this.state.message}
          onChange={(event) => this.handleChange(event.target.value)} />
        <SendButton disabled={this.isDisabled} />
      </form>
    );
  }
}

export default SendMessage;
