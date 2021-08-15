import React, { Component } from 'react';
import FirstComponent from './components/learning-example/FirstComponent'
import SecondComponent from './components/learning-example/SecondComponent'
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        My Hello World
        <FirstComponent />
        <SecondComponent></SecondComponent>
      </div>
    );
  }
}

export default App;
