	alert("Вас приветствует учебный центр");
	let name = prompt("Введите имя", 'имя');
	alert("Добро пожаловать на наши курсы, " + name);
	if (confirm("Хотите стать Web-дизайнером?")) { alert("Учите стили CSS и JavaScript!");}
	else { alert("Упускаете время!");}
	document.write("Задание 2 <br>");
	document.write("10+5=", 10 + 5, "<br>");
	document.write("'10'+'5'=", "10" + "5", "<br>");
	document.write("22+'5'=", 22 + "5", "<br>");
	document.write("'22'+5=", "22" + 5, "<br>");
setTimeout(function() {	alert("Результатом сложения строки и числа всегда будет – строка");}, 10);
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