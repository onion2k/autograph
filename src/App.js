import React, { Component } from "react";
import "./App.css";

import Autograph from "./Autograph";

class App extends Component {
  constructor() {
    super();
    this.state = {
      a: 0,
      b: 0,
      o: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="App">
        <div>
          <input
            type="number"
            name="a"
            value={this.state.a}
            onChange={this.handleChange}
          />
          <input
            type="number"
            name="b"
            value={this.state.b}
            onChange={this.handleChange}
          />
          <input
            type="number"
            name="o"
            value={this.state.o}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <Autograph a={this.state.a} b={this.state.b} o={this.state.o} />
        </div>
      </div>
    );
  }
}

export default App;
