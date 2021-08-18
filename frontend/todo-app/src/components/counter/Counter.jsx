import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

class Counter extends Component {
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
  }
}

Counter.defaultProps = {
  by : 1
}

Counter.propTypes = {
  by: PropTypes.number
}

export default Counter;