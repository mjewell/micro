import React, { Component } from 'react';
import { TextInput } from 'weather';
import { typedAdd } from 'calculator';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>2 + 2 = {typedAdd(2, 2)}</p>
          <TextInput label="whatever" />
        </header>
      </div>
    );
  }
}

export default App;
