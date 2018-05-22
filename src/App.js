// import React, { Component } from 'react';
import React from 'react';
import logo from './logo.svg';
import './App.css';

// class Text extends Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//         color: props.color,
//         value: props.value,
//       };
//   }
//   render() {
//     return (
//       <span style={{color: this.props.color}}>{this.props.value}</span>
//     )
//   };
// }

function Text(props) {
  return (
    <span style ={{color: props.color}}>{props.value}</span>
  );
}

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

        <h1>Hi, I'm <Text color="blue" value="Ryan" /></h1>

    </div>
  )
}



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
        
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>

//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>

//         <h1>Hi, I'm <Text color="blue" value="Ryan" /></h1>

        
        
//       </div>
//     );
//   }
// }

export default App;
