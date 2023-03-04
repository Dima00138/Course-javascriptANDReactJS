function quest1() {
	document.getElementById('p1').style.color = "red";
}

function quest2() {
	document.getElementById('p2').style.fontSize = "1.2em";
}

function quest3() {
	let img = document.getElementById('i1');
	img.src = "2.jpg";
}

function quest4() {
	let img = document.getElementById('p3');
	img.innerHTML = "<img style='display: block;width:400px; height: 200px; margin: auto;' src='2.jpg'>";
}

function quest5() {
	document.getElementById('i2').style.width = parseInt(document.getElementById('i2').style.width)-200+'px';
}

function quest51() {
		document.getElementById('i2').style.width = parseInt(document.getElementById('i2').style.width)+200+'px';
}

function quest6() {
	document.getElementById('p4').style.border = "2px solid blue";
}
