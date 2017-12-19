
	function autograph(a,b,o) {

		var canvas = document.getElementById('autograph');

		if (canvas.getContext){
			var ctx = canvas.getContext('2d');

			ctx.clearRect(0,0,460,460);

			ctx.lineWidth = 0.5;
			ctx.lineJoin = 'round';
			ctx.beginPath();

			//User settings
			var width = 920;
			var height = 920;
			var dots=1;
			var cog_a=parseFloat(a);
			var cog_b=parseFloat(b);
			var i=parseFloat(o);

			var downscale = 2;

			//Other stuff
			var xoffset = width/2;
			var yoffset = height/2;
			var ra=(i);
			var rb=(((width)/2)-i);
			var xi=x1=((ra*Math.cos(cog_a))+(rb*Math.cos(cog_b)));
			var yi=y1=((ra*Math.sin(cog_a))+(rb*Math.sin(cog_b)));
			var ta=cog_a;
			var tb=cog_b;
			var c=0;

			ctx.moveTo((x1+xoffset)/downscale,(y1+yoffset)/downscale);

			do {

				c++;

				x2=x1;
				y2=y1;
				cog_a+=ta;
				cog_b+=tb;
				x1=((ra*Math.cos(cog_a))+(rb*Math.cos(cog_b)));
				y1=((ra*Math.sin(cog_a))+(rb*Math.sin(cog_b)));

				ctx.lineTo((x1+xoffset)/downscale,(y1+yoffset)/downscale);

			}while (!((Math.abs(x1-xi)<2)&&(Math.abs(yi-y1)<2)));

			ctx.stroke();

		}

	}
