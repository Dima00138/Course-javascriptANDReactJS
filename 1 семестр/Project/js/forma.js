document.getElementsByTagName("button")[0].onclick = function(event) {
	event.preventDefault();
	let months    = [ "Месяца", "января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
	let forma     = document.all['forma'];
	let date      = forma.birthdate.value.split(/-|\./);
	let div       = document.getElementsByClassName('out_forma')[0];
	div.innerHTML = "<center><h1>" + forma.fname.value + " " + forma.sname.value + " " + forma.tname.value + "</h1></center></br>";
	div.innerHTML += "Дата рождения: " + date[2] + " " + months[parseInt(date[1])] + " " + date[0] + "г.";
	div.innerHTML += "</br>Пол: " + forma.sex.value;
	div.innerHTML += "</br>О себе: " + forma.dopinfo.value;
}
