window.onload = function(event) {
	let canvas = document.getElementById('f1');
	let ctx = canvas.getContext('2d');

		ctx.beginPath();
			ctx.arc(canvas.width/2, canvas.height/2,50,0,Math.PI*2,true); // Внешняя окружность
			ctx.moveTo((canvas.width/2)+35,75);
			ctx.arc(canvas.width/2,canvas.height/2,35,0,Math.PI,false);  // рот (по часовой стрелке)
			ctx.moveTo((canvas.width/2)-5,65);
			ctx.arc(canvas.width/2-10,65,5,0,Math.PI*2,true);  // Левый глаз
			ctx.moveTo(canvas.width/2+20,65);
			ctx.arc(canvas.width/2+15,65,5,0,Math.PI*2,true);  // Правый глаз
			ctx.closePath();
			ctx.stroke();

    canvas = document.getElementById('f2');
	ctx = canvas.getContext('2d');
        // Filled triangle
    	ctx.beginPath();
    	ctx.moveTo(25,25);
    	ctx.lineTo(105,25);
    	ctx.lineTo(25,105);
    	ctx.fill();

    	// Stroked triangle
    	ctx.beginPath();
    	ctx.moveTo(125,125);
    	ctx.lineTo(125,45);
    	ctx.lineTo(45,125);
    	ctx.closePath();
    	ctx.stroke();

    	 // Quadratric curves example
  	canvas = document.getElementById('f3');
	ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(75,25);
    ctx.quadraticCurveTo(25,25,25,62.5);
    ctx.quadraticCurveTo(25,100,50,100);
    ctx.quadraticCurveTo(50,120,30,125);
    ctx.quadraticCurveTo(60,120,65,100);
    ctx.quadraticCurveTo(125,100,125,62.5);
    ctx.quadraticCurveTo(125,25,75,25);
    ctx.stroke();

    canvas = document.getElementById('f4');
	ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(75,40);
    ctx.bezierCurveTo(75,37,70,25,50,25);
    ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
    ctx.bezierCurveTo(20,80,40,102,75,120);
    ctx.bezierCurveTo(110,102,130,80,130,62.5);
    ctx.bezierCurveTo(130,62.5,130,25,100,25);
    ctx.bezierCurveTo(85,25,75,37,75,40);
    ctx.fill();
}