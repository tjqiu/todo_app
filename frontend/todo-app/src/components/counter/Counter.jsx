import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter : 0
    }
    this.increment = this.increment.bind(this);
  }

  render() {
    return (
      <div className="counter">
        <CounterButton by={1} incrementMethod = {this.increment}></CounterButton>
        <CounterButton by={5} incrementMethod = {this.increment}></CounterButton>
        <CounterButton by={10} incrementMethod = {this.increment}></CounterButton>
      </div>
    );
  }

  increment(by) {
    console.log(`increment by - ${by}`)
    // this.setState({
    //   counter : this.state.counter + this.props.by
    // })
  }
}


class CounterButton extends Component {
  //Define the initial state
  constructor() {
    super();
    this.state = {
      counter : 0
    }
    this.increment = this.increment.bind(this);
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.increment}>+{this.props.by}</button>
        <span className='count'>{this.state.counter}</span>
      </div>
    )
  }

  increment() { //update the state
    //console.log('increment');
    //this.state.counter++;
    this.setState({
      counter : this.state.counter + this.props.by
    })
    this.props.incrementMethod(this.props.by)
  }
}

CounterButton.defaultProps = {
  by : 1
}

CounterButton.propTypes = {
  by: PropTypes.number
}

export default Counter;