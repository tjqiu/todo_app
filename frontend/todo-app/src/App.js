import React, { Component } from 'react';
import FirstComponent from './components/learning-example/FirstComponent'
import SecondComponent from './components/learning-example/SecondComponent'
import Counter from './components/counter/Counter';
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter></Counter>
        <Counter by={5}></Counter>
        <Counter by={10}></Counter>
      </div>
    );
  }
}

class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponents">
        My Hello World
        <FirstComponent />
        <SecondComponent></SecondComponent>
      </div>
    );
  }
}

export default App;
