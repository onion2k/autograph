import React, { Component } from "react";
import "./App.css";

import Autograph from "./Autograph";

class App extends Component {
  constructor() {
    super();
    this.state = {
      a: 0,
      b: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="App">
        <div className="controls">
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
        </div>
        <div className="output">
          <Autograph a={this.state.a} b={this.state.b} />
        </div>
      </div>
    );
  }
}

export default App;
