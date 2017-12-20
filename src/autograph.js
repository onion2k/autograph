import React, { Component } from "react";

class Autograph extends Component {
  constructor(props) {
    super(props);
    this.draw = this.draw.bind(this);
    this.state = {
      a: props.a,
      b: props.b
      // o: props.o
    };
    this.c = 1;
    this.d = 0.1;

    this.width = 0;
    this.height = 0;
  }
  draw() {
    if (this.c > 300 || this.c < -300) {
      this.d = this.d * -1;
    }
    this.ctx.clearRect(0, 0, this.width, this.height);

    this.ctx.lineWidth = 0.75;
    this.ctx.lineJoin = "round";
    this.ctx.beginPath();

    let x1 = 0;
    let y1 = 0;

    var cog_a = parseFloat(this.state.a) || 0;
    var cog_b = parseFloat(this.state.b) || 0;
    this.c += this.d;
    var i = this.c;

    var xoffset = this.width / 2;
    var yoffset = this.height / 2;
    var ra = i;
    var rb = this.height / 2 - i;
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

    requestAnimationFrame(this.draw);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        a: nextProps.a,
        b: nextProps.b
        // o: nextProps.o
      },
      () => {
        this.draw();
      }
    );
  }

  componentDidMount() {
    this.width = this.canvas.clientWidth;
    this.height = this.canvas.clientHeight;
    this.ctx = this.canvas.getContext("2d");
    this.draw();
  }
  render() {
    return (
      <canvas
        ref={canvas => {
          this.canvas = canvas;
        }}
        width={this.width}
        height={this.height}
      />
    );
  }
}

export default Autograph;
