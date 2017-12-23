import React, { Component } from "react";
import "./Cog.css";

class Cog extends Component {
  constructor(props) {
    super(props);
    // this.dragging = false;
    // this.start = 0;
    // this.dist = props.value * 10;
    this.state = {
      dist: props.value * 10,
      start: 0,
      dragging: false
    };
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
  }
  componentDidMount() {
    this.bounds = this.cog.getBoundingClientRect();
  }
  mouseDown(e) {
    let cx = e.clientX || e.touches[0].clientX;
    let cy = e.clientY || e.touches[0].clientY;

    var x = cx - this.bounds.left - this.bounds.width / 2;
    var y = cy - this.bounds.top - this.bounds.height / 2;

    let a = Math.atan2(y, x);

    this.setState({
      dragging: true,
      start: a / (Math.PI * 2) * 360
    });
  }
  mouseUp() {
    this.setState({
      dragging: false,
      start: 0
    });
  }
  mouseMove(e) {
    if (this.state.dragging) {
      let cx = e.clientX || e.touches[0].clientX;
      let cy = e.clientY || e.touches[0].clientY;

      var x = cx - this.bounds.left - this.bounds.width / 2;
      var y = cy - this.bounds.top - this.bounds.height / 2;

      let a = Math.atan2(y, x);

      let dist = a / (Math.PI * 2) * 360 - this.state.start;
      this.setState(
        {
          dist: dist
        },
        () => {
          this.props.update({
            target: {
              name: this.props.name,
              value: this.state.dist
            }
          });
        }
      );
    }
  }

  render() {
    let style = {
      transform: "rotate(" + this.state.dist + "deg)"
    };
    let classes = ["indicator"];
    if (this.state.dragging === true) {
      classes.push("on");
    }
    return (
      <div
        className="Cog"
        ref={cog => {
          this.cog = cog;
        }}
      >
        <div
          className="metal radial notouch"
          draggable="false"
          onTouchStart={this.mouseDown}
          onTouchEnd={this.mouseUp}
          onTouchMove={this.mouseMove}
          onMouseDown={this.mouseDown}
          onMouseOut={this.mouseUp}
          onMouseUp={this.mouseUp}
          onMouseMove={this.mouseMove}
          style={style}
        >
          <div className={classes.join(" ")} />
        </div>
      </div>
    );
  }
}

export default Cog;
