import React, { Component } from "react";

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
        target: { name: this.props.name, value: this.dist }
      });
    }
  }

  render() {
    let style = {
      transform: "rotate(" + this.dist + "deg)"
    };
    return (
      <div>
        <img
          src="gear.svg"
          draggable="false"
          className="Cog"
          onMouseDown={this.mouseDown}
          onMouseUp={this.mouseUp}
          onMouseMove={this.mouseMove}
          alt="Cog"
          style={style}
        />
        <input
          type="number"
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.update}
        />
      </div>
    );
  }
}

export default Cog;
