function zad1() {
	alert("Вас приветствует учебный центр");
	let name = prompt("Введите имя", 'имя');
	alert("Добро пожаловать на наши курсы, " + name);
	if (confirm("Хотите стать Web-дизайнером?")) { alert("Учите стили CSS и JavaScript!");}
	else { alert("Упускаете время!");}
}
function zad2() {
	document.write("<style type='text/css'>body{font-family: monospace; font-size: 25px; color: #6A1717;}</style>");
	document.write("Задание 2 <br>");
	document.write("10+5=", 10 + 5, "<br>");
	document.write("'10'+'5'=", "10" + "5", "<br>");
	document.write("22+'5'=", 22 + "5", "<br>");
	document.write("'22'+5=", "22" + 5, "<br>");
	setTimeout(function() {	alert("Результатом сложения строки и числа всегда будет – строка");}, 10);
}
function zad3() {
	document.write("<style type='text/css'>body{font-family: monospace; font-size: 20px; color: #751DA3;}</style>");
	document.write("Задание 3 <br>");
	let res1;
	res1 = (35*10-25*20)/5+232;
	let res2;
	console.log(res1);
	res2 = (8*20/10+5*10/20-43)*6;
	console.log(res2);
	//document.write(res1, "<br>");
	//document.write(res2, "<br>");
	document.write("Остаток от деления: ", res1 % res2, "<br>");
	let res3 = res1 % res2;
	setTimeout(function() { alert("Остаток от деления: " + res3);}, 150);
}
function zad4() {
	document.write("<style type='text/css'>body{font-family: monospace; font-size: 20px; color: #418D0F;}</style>");
		document.write("Задание 4 <br>");
	let num1 = prompt("Введите любое число");
	if ((num1 > 20) || (num1 < 40) && (num1 != 15) && (num1 % 5 == 0)) {
		document.write("Правильное значение <br>");
	}else {
		document.write("Неправильное значение <br>");
	}
	let num2 = prompt("Введите любое число(2)");
		if ((num2 == 20) || ((num2 < 20) && (num2 % 2 == 0) != (num2 == 18))) {
		document.write("Число меньше либо равно 20, четное и не равно 18 <br>");
	}else {
		document.write("Число больше 20 <br>");
	}
}
function zad5() {
	document.write("<style type='text/css'>body{font-family: monospace; font-size: 20px; color: #73790C;}</style>");
	document.write("Задание 5 <br>");
	let num3 = prompt("Введите первое число");
	let num4 = prompt("Введите второе число");
	if (num3 > num4) {
		document.write("Число ", num3, " больше числа ", num4, " <br>");
	} else if(num4 > num3) { 
		document.write("Число ", num3, " больше числа ", num4, "<br>");
	}else {
		document.write("Числа равны <br>");
	}
	(num4>40)?document.write("Число ", num4, " больше 40<br>"):document.write("Число ", num4, " меньше 40<br>");
}
function zad6() {
	document.write("<style type='text/css'>body{font-family: monospace; font-size: 20px; color: #012CB7;}</style>");
	document.write("Задание 6<br>");
	let day = prompt("Номер дня недели");
	//console.log();
	switch (day) {
		case '1': document.write("Сегодня понедельник<br>");
		break;
		case '2': document.write("Сегодня вторник<br>");
		break;
		case '3': document.write("Сегодня среда<br>");
		break;
		case '4': document.write("Сегодня четверг<br>");
		break;
		case '5': document.write("Сегодня пятница<br>");
		break;
		case '6': document.write("Сегодня суббота<br>");
		break;
		case '7': document.write("Сегодня воскресенье<br>");
		break;
	}
}
function zad7() {
	document.write("<style type='text/css'>body{font-family: monospace; font-size: 16px; color: #6BBB9C;}</style>");
	document.write("Задание 7<br>");
	try {
		var name2 = prompt("Введите имя 'Вася'");
		if (name2 != "Вася") {
			throw new SyntaxError("Неправильно введено имя");
		}
		document.write("Молодец");
	} catch(err) {
		document.write("Неправильное имя");
	}
}

		var a = [];
		var b = [];

function zadanie2() {
	let a1 = prompt("Введите первое число");
	let b1 = prompt("Введите второе число");
	for (let i = 1; i <= a1; i++) {
		a[i] = i;
		//console.log(a[i]);
			}
for (let i = 1; i <= b1; i++) {
		b[i] = i;
		//console.log(b[i]);
			}
	document.write("<table border>");
	for (let i = 1; i <= Math.max(a1,b1); i++) {
		if (a[i] < a.length) {
		document.write("<tr><td width='40px' height='30px' align='center' bgcolor='#FBACAC'>", a[i],"</td>");
	for (let j = 2; j <= b1; j++) {
		if (b[j] < b.length) {
		document.write("<td width='40px' align='center' bgcolor='#8B98FD'>", b[j]*a[i],"</td>");
	}}
	}}
	document.write("</table>");
}

function zadanie3() {
	
	var r = Number(prompt("Введите первое число"));
	var d = Number(prompt("Введите второе число"));
	var s = Number(Math.PI * r * r);
	var dl = Number(2 * Math.PI * r);

	document.write("<table border style='font-family: arial;'>");
	document.write("<tr><td width='110px' align='center' bgcolor='#F44747'>Радиус</td><td width='110px' height='20px' align='center' bgcolor='#F960E5'>Площадь круга</td><td width='110px' height='20px' align='center' bgcolor='#F7BE36'>Длина окружности</td></tr>")

	do {
		s = s.toFixed(2);
		dl = dl.toFixed(2);

		console.log(r, d);
		document.write("<tr><td width='110px' align='center' bgcolor='#F44747'>", r,"</td><td width='110px' height='20px' align='center' bgcolor='#F960E5'>", s,"</td><td width='110px' height='20px' align='center' bgcolor='#F7BE36'>", dl,"</td><tr>");
		r = Number(r + 0.3);
		s = Math.PI * r * r;
		dl = 2 * Math.PI * r;
		d = d.toFixed(2);
		r  = r.toFixed(2);
		r = parseFloat(r);
		d = parseFloat(d);

	}while(r < d);
	document.write("</table");
}

function zadanie4() {
	var numb1 = Number('127');
	var numb2 = Number('127.18');

	document.write("<table border>");
	document.write("<tr><td>Число</td><td>Метод</td><td>Результат</td><td>Описание метода</td></tr>");
	document.write("<tr><td rowspan='4'>", numb1,"</td><td>toExponential(3)</td><td>", numb1.toExponential(3),"</td><td>Число в экспоненциальной форме с 2-мя знаками после запятой</td></tr>")
	document.write("<tr><td>toFixed(2)</td><td>", numb1.toFixed(2),"</td><td>Число в форме с фиксированно 2-мя цифрами после точки</td></tr>");
	document.write("<tr><td>toPrecision(2)</td><td>", numb1.toPrecision(2),"</td><td>Число с заданным общим количеством значащих цифр, равным 2-м цифрам</td></tr>")
	document.write("<tr><td>toString(16)</td><td>", numb1.toString(16),"</td><td>Строковое представление числа в 16-ричной системе счисления</td></tr>");
	document.write("<tr><td rowspan='4'>", numb2,"</td><td>toExponential(3)</td><td>", numb2.toExponential(3),"</td><td>Число в экспоненциальной форме с 2-мя знаками после запятой</td></tr>")
	document.write("<tr><td>toFixed(2)</td><td>", numb2.toFixed(2),"</td><td>Число в форме с фиксированно 2-мя цифрами после точки</td></tr>");
	document.write("<tr><td>toPrecision(2)</td><td>", numb2.toPrecision(2),"</td><td>Число с заданным общим количеством значащих цифр, равным 2-м цифрам</td></tr>")
	document.write("<tr><td>toString(16)</td><td>", numb2.toString(16),"</td><td>Строковое представление числа в 16-ричной системе счисления</td></tr>");
}