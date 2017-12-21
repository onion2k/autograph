import React, { Component } from "react";
import "./App.css";

import Autograph from "./Autograph";
import Cog from "./Cog";

class App extends Component {
  constructor() {
    super();
    let a = 0;
    let b = 0;
    if (window.location.hash !== "") {
      let h = window.location.hash.substr(1).split(",");
      a = parseInt(h[0], 10);
      b = parseInt(h[1], 10);
    } else {
      a = Math.round(Math.random() * 10) - 5;
      b = Math.round(Math.random() * 10) - 5;
    }
    this.state = {
      a: a,
      b: b
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = e => {
    window.location.hash = this.state.a + "," + this.state.b;
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="App">
        <div className="controls">
          <Cog
            name="a"
            value={this.state.a}
            update={this.handleChange}
            pos={1}
          />
          <Cog
            name="b"
            value={this.state.b}
            update={this.handleChange}
            pos={2}
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
