import React from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './Text.jsx';

function App () {
  return (
    <div className="App">
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <h1>Hi, I'm <Text color="blue">Ryan</Text></h1>

    </div>
  )
}

export default App;
