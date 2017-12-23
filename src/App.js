import React, { Component } from "react";
import "./App.css";

import Autograph from "./Autograph";
import Cog from "./Cog";

class App extends Component {
  constructor() {
    super();
    let a = 0;
    let b = 0;
    let o = 0;
    if (window.location.hash !== "") {
      let h = window.location.hash.substr(1).split(",");
      a = parseFloat(h[0]);
      b = parseFloat(h[1]);
      o = parseFloat(h[2]);
    } else {
      a = Math.round(Math.random() * 10) - 5;
      b = Math.round(Math.random() * 10) - 5;
      o = Math.round(Math.random() * 10) - 5;
    }
    this.state = {
      a: a,
      b: b,
      o: o,
      oscillator: false
    };
    console.log(a, b, o);
    this.handleChange = this.handleChange.bind(this);
    this.oscillator = this.oscillator.bind(this);
  }
  handleChange = e => {
    window.location.hash =
      this.state.a + "," + this.state.b + "," + this.state.o;
    this.setState({ [e.target.name]: e.target.value });
  };
  oscillator() {
    this.setState({
      oscillator: !this.state.oscillator
    });
  }
  render() {
    let oscClasses = ["Auto"];
    if (this.state.oscillator) {
      oscClasses.push("on");
    }
    return (
      <div className="App">
        <div className="controls">
          <div className="control">
            <label>Iterator A</label>
            <Cog name="a" value={this.state.a} update={this.handleChange} />
          </div>
          <div className="control">
            <label>Iterator B</label>
            <Cog name="b" value={this.state.b} update={this.handleChange} />
          </div>
          <div className="control">
            <label>Oscillator</label>
            <Cog name="o" value={this.state.o} update={this.handleChange} />
            <button className={oscClasses.join(" ")} onClick={this.oscillator}>
              Auto
            </button>
          </div>
        </div>
        <div className="output">
          <Autograph
            a={this.state.a}
            b={this.state.b}
            o={this.state.o}
            auto={this.state.oscillator}
          />
        </div>
      </div>
    );
  }
}

export default App;
