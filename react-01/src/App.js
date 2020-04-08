import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      myState: "TBD"
    };
    this.counter = 21;
  }
  onPushMe = () => {
    console.log("You Pushed Me");
    this.counter ++;
    this.setState({
      myState: "now:" + this.counter
    });
    console.log("Counter is: " + this.counter);
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>I am in control of this application and my name is Matthew {this.counter} {this.state.myState}</h1>
        <button onClick={this.onPushMe}>
          Push Me
        </button>
        <MyComponent
         
          />
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
      </header>
    </div>
  );
  }
}

export default App;
