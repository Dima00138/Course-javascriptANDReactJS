//Объект Gruppa
function Gruppa(n, spec, count) {
	//свойства
	this.n=n;
	this.spec=spec;
	this.count=count;

	//Методы
	//+
	this.add_stud=function add_stud(k) {
		this.count+=k;
		document.write('В группу ' + this.n + ' добавили '+ k + ' студентов.<br\>');
	}
	//-
	this.sub_stud=function sub_stud(k) {
		this.count-=k;
		document.write('Из группы ' + this.n + ' исключили '+ k + ' студентов.<br\>');
	}
}

document.write("<h2>Задание 1</h2>");
var gr2= new Gruppa(7, 'ПОИБМС', 15);
var gr3= new Gruppa(8, 'ПОИБМС', 10);
var gr4= new Gruppa(4, 'ПОИТ', 15);
document.write("В группе ",gr2.n," ",gr2.count," студентов<br>");
document.write("В группе ",gr3.n," ",gr3.count," студентов<br>");
document.write("В группе ",gr4.n," ",gr4.count," студентов<br>");
gr2.add_stud(2);
gr3.add_stud(1);
gr4.add_stud(3);
document.write("В группе ",gr2.n," ",gr2.count," студентов<br>");
document.write("В группе ",gr3.n," ",gr3.count," студентов<br>");
document.write("В группе ",gr4.n," ",gr4.count," студентов<br>");
gr2.sub_stud(4);
gr3.sub_stud(3);
gr4.sub_stud(5);
document.write("В группе ",gr2.n," ",gr2.count," студентов<br>");
document.write("В группе ",gr3.n," ",gr3.count," студентов<br>");
document.write("В группе ",gr4.n," ",gr4.count," студентов<br>");
document.write("<h2>Задание 2</h2>");

//Объект Student
function Student(name,surname,phisics,maths,it) {
	//Свойства
	this.name = name;
	this.surname = surname;
	this.phisics = phisics;
	this.maths = maths;
	this.it = it;

	//Методы
	this.FI=function FI() {
		document.write("Имя: ", this.name);
		document.write(". Фамилия: ", this.surname, "<br>");
	}
	this.srB=function srB() {
		let sr = (this.maths + this.phisics + this.it) / 3;
		document.write("Средний балл: ", sr, "<br>");
	}
	this.all_Info=function all_Info() {
		document.write("Имя: ", this.name, ". Фамилия: ", this.surname, "<br>");
		document.write("Оценки:<br>");
		document.write("<ol><li>Физика: ", this.phisics, "</li><li>Математика: ",this.maths, "</li><li>Информатика: ", this.it, "</li></ol><br>");
	}
}

Student.prototype.x=10;

var st1 = new Student("Вася","Волынин",5,6,7);
var st2 = new Student('Олег', 'Порт', 7,8,2);
var st3 = new Student('Митя', 'Бандек', 4,6,8);
document.write(st1.x);
st1.all_Info();
st2.all_Info();
st3.all_Info();


//Задание 3
document.write("<h2>Задание 3</h2>");
var arr2 = new Array('pow', 'pop', 'push', 'shift', 'round', 'floor', 'slice', 'sort');
var str1 = new String("свои Фамилия Имя Отчество");
for (let i = 0; i < arr2.length; i++) {
	document.write(arr2[i], " ");
}
document.write("<br>");
delete arr2[3];
for (let i = 0; i < arr2.length; i++) {
	document.write(arr2[i], " ");
}
document.write("<br>Элемент в массиве ");
document.write(2 in arr2);
document.write("<br>Свойство в объекте ");
document.write('name' in st1);
document.write("<br>Принадлежность объекта к Array ");
document.write(arr2 instanceof Array);
document.write("<br>Принадлежность объекта к Object ");
document.write(st1 instanceof Object);
document.write("<br>Принадлежность объекта к String ");
document.write(str1 instanceof String);

function funct() {
	return 5;
}

document.write("<br>Тип возвращаемого значения функции = ");
document.write(typeof funct());
document.write("<br>Тип объекта Gruppa = ");
document.write(typeof gr2);
document.write("<br>Тип объекта Student = ");
document.write(typeof st1);
document.write("<br>Тип строки = ");
document.write(typeof str1);
document.write("<br>Тип массива = ");
document.write(typeof arr2);
document.write("<br>Gruppa = ");
document.write(typeof gr2['n'], ", ",typeof gr2['spec'], ", ",typeof gr2['count']);
document.write("<br>Student = ");
document.write(typeof st1['name'], ", ", typeof st1['surname'], ", ", typeof st1['phisics'], ", ", typeof st1['maths'], ", ", typeof st1['it']);
document.write("<br>");