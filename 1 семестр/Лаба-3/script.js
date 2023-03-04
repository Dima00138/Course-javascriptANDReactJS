// Задание 1
document.write("<h2>Задание 1</h2>");
var arr1 = new Array();
arr1[0] = 6 * Math.pow(Math.PI,2) + 3 * Math.exp(8);
arr1[1] = 2 * Math.cos(4) + Math.cos(12) + 8 * Math.exp(3);
arr1[2] = 3 * Math.sin(9) + Math.log(5) + Math.sqrt(3);
arr1[3] = 2 * Math.tan(5) + 6 * Math.PI + Math.sqrt(12);
var x = Math.max(arr1[0],arr1[1],arr1[2],arr1[3]);
var num1 = arr1.indexOf(x);
var y = Math.min(arr1[0],arr1[1],arr1[2],arr1[3]);
var num2 = arr1.indexOf(y);
document.write("Максимальное значение - ", x, ". Номер: ", num1);
document.write("<br>Минимальное значение - ", y, ". Номер: ", num2, "<br>");

//Задание 2
document.write("<h2>Задание 2</h2>");
var arr2 = new Array('pow', 'pop', 'push', 'shift', 'round', 'floor', 'slice', 'sort');
for (let i = 0; i < arr2.length; i++) {
	document.write(arr2[i], " ");
}
document.write(arr2.length);
document.write("<br>");
//math
var arr3 = arr2.slice(0);
arr3.splice(1,3);
arr3.splice(3,2);
arr3.splice(0,0,"abs")
//array
var arr4 = arr2.slice(0);
arr4.splice(0,1);
arr4.splice(3,2);
arr4.push("concat")
for (let i = 0; i < arr3.length; i++) {
	document.write(arr3[i], " ");
}
document.write(arr3.length);
document.write("<br>");
for (let i = 0; i < arr4.length; i++) {
	document.write(arr4[i], " ");
}
document.write(arr4.length); 
document.write("<br>");

//Задание 3
document.write("<h2>Задание 3</h2>");
str1 = new String("свои Фамилия Имя Отчество");
document.write(str1," ");
document.write(str1.length);
document.write("<br>");
str2 = str1.toUpperCase();
document.write(str2," ");
document.write("<br>");
str3 = str1.toLowerCase();
document.write(str3," ");
document.write("<br>");
str3 = str2.concat(str3);
document.write(str3," ");
str1 = str1.replace("свои Фамилия Имя Отчество","ФИО");
document.write("<br>");
document.write(str1," ");

//Задание 4
var date1 = new Date();
document.write("<br><h2>Задание 4</h2>");
document.write("<table border><tr><td width='220px' align='center'>Год</td><td width='100px' align='center'>", date1.getFullYear(),"</td></tr>");
document.write("<tr><td width='220px' align='center'>Месяц</td><td width='100px' align='center'>", date1.getMonth(),"</td>");
document.write("<tr><td width='220px' align='center'>День</td><td width='100px' align='center'>", date1.getDate(),"</td>");
document.write("<tr><td width='220px' align='center'>Час</td><td width='100px' align='center'>", date1.getHours(),"</td>");
document.write("<tr><td width='220px' align='center'>Минуты</td><td width='100px' align='center'>", date1.getMinutes(),"</td>");
document.write("<tr><td width='220px' align='center'>Секунды</td><td width='100px' align='center'>", date1.getSeconds(),"</td>");