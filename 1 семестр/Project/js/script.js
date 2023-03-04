//Меню
function closeMenu() {
	var menu = document.getElementsByClassName('nav-spis');
	for (let i = 0; i < menu.length; i++)
		menu[i].style.display = "none";
}

document.onmouseover = function(event) {
	var target = event.target;
	if ((target.className != 'navigate_href') && (target.className != 'navigate_href1') && (event.path[1].className != 'navigate_href') && (event.path[1].className != 'navigate_href1'))
		closeMenu();
}

document.getElementById('nav').onmouseover = function(event) {
	var target = event.target;
	if ((target.className == 'navigate_href')) {
		var s = target.getElementsByClassName('nav-spis');
		closeMenu();
		s[0].style.display = "block";
	}
	if (event.path[1].className == 'navigate_href') {
		var s = event.path[1].getElementsByClassName('nav-spis');
		closeMenu();
		s[0].style.display = "block";
	}
}

//изоброжения статей
document.body.onload = function() {
	let state = document.getElementsByTagName('section');
	for (let i = 0; i < state.length; i++) {
		let paragraph = state[i].getElementsByTagName('p')[0];
		let image	  = state[i].getElementsByTagName('img')[0];
		image.style.height = 220 - paragraph.clientHeight + "px";
	}
}