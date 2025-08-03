import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello = () => {
    alert("Hello! Have a great day.");
  };

  increaseAndGreet = () => {
    this.increment();
    this.sayHello();
  };

  sayWelcome = (msg) => {
    alert(`Welcome! ${msg}`);
  };

  handleClick = (e) => {
    alert("I was clicked");
  };

  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.increaseAndGreet}>Increase</button>
        <br /><br />
        <button onClick={() => this.sayWelcome("You're awesome!")}>Say Welcome</button>
        <br /><br />
        <button onClick={this.handleClick}>Synthetic Event Button</button>
      </div>
    );
  }
}

export default Counter;
