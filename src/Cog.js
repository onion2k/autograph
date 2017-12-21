import React, { Component } from "react";
import "./Cog.css";

class Cog extends Component {
  constructor(props) {
    super(props);
    this.dragging = false;
    this.start = 0;
    this.dist = props.value * 10;
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
  }

  mouseDown(e) {
    this.dragging = true;
    this.start = e.clientY;
  }
  mouseUp() {
    this.dragging = false;
  }
  mouseMove(e) {
    if (this.dragging) {
      this.dist = e.clientY - this.start;
      this.props.update({
        target: { name: this.props.name, value: Math.floor(this.dist / 10) }
      });
    }
  }

  render() {
    let style = {
      transform: "rotate(" + this.dist + "deg)"
    };
    return (
      <div className="Cog">
        <div
          className="metal radial"
          draggable="false"
          onMouseDown={this.mouseDown}
          onMouseUp={this.mouseUp}
          onMouseMove={this.mouseMove}
          style={style}
        >
          <div className="indicator" />
        </div>
      </div>
    );
  }
}

export default Cog;
