import React, { Component } from "react";
import "./Cog.css";

class Cog extends Component {
  constructor() {
    super();
    this.dragging = false;
    this.start = 0;
    this.dist = 0;
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
      transform: "rotate(" + this.dist + "deg)",
      top: (this.props.pos - 1) * 300 + "px"
    };
    return (
      <div>
        <img
          src={"gear" + this.props.pos + ".svg"}
          draggable="false"
          className="Cog"
          onMouseDown={this.mouseDown}
          onMouseUp={this.mouseUp}
          onMouseMove={this.mouseMove}
          alt="Cog"
          style={style}
        />
      </div>
    );
  }
}

export default Cog;
