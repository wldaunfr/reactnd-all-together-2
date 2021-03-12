import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './Chat.js';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }, { username: 'Daniel' }];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <Chat users={users} />
      </div>
    );
  }
}

export default App;
