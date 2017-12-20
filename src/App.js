import React, { Component } from "react";
import "./App.css";

import Autograph from "./Autograph";
import Cog from "./Cog";

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
          <Cog name="a" value={this.state.a} update={this.handleChange} />
          <Cog name="b" value={this.state.b} update={this.handleChange} />
        </div>
        <div className="output">
          <Autograph a={this.state.a} b={this.state.b} />
        </div>
      </div>
    );
  }
}

export default App;
