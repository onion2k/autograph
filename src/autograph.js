import React, { Component } from "react";

class Autograph extends Component {
  constructor(props) {
    super(props);
    this.draw = this.draw.bind(this);
    this.state = {
      a: props.a,
      b: props.b,
      o: props.o
    };
  }
  draw() {
    this.ctx.clearRect(0, 0, 600, 600);

    this.ctx.lineWidth = 0.75;
    this.ctx.lineJoin = "round";
    this.ctx.beginPath();

    let x1 = 0;
    let y1 = 0;

    var width = 600;
    var height = 600;
    var cog_a = parseFloat(this.state.a);
    var cog_b = parseFloat(this.state.b);
    var i = parseFloat(this.state.o);

    var xoffset = width / 2;
    var yoffset = height / 2;
    var ra = i;
    var rb = width / 2 - i;
    var xi = (x1 = ra * Math.cos(cog_a) + rb * Math.cos(cog_b));
    var yi = (y1 = ra * Math.sin(cog_a) + rb * Math.sin(cog_b));
    var ta = cog_a;
    var tb = cog_b;

    this.ctx.moveTo(x1 + xoffset, y1 + yoffset);

    do {
      cog_a += ta;
      cog_b += tb;
      x1 = ra * Math.cos(cog_a) + rb * Math.cos(cog_b);
      y1 = ra * Math.sin(cog_a) + rb * Math.sin(cog_b);

      this.ctx.lineTo(x1 + xoffset, y1 + yoffset);
    } while (!(Math.abs(x1 - xi) < 2 && Math.abs(yi - y1) < 2));

    this.ctx.stroke();
  }

  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        a: nextProps.a,
        b: nextProps.b,
        o: nextProps.o
      },
      () => {
        this.draw();
      }
    );
  }

  componentDidMount() {
    this.ctx = this.canvas.getContext("2d");
    this.draw();
  }
  render() {
    return (
      <canvas
        ref={canvas => {
          this.canvas = canvas;
        }}
        width="600"
        height="600"
      />
    );
  }
}

export default Autograph;
