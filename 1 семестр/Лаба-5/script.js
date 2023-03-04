//Задание 1
var al = document.all;
for (var a = 0; a < al.length; a++) {
	document.write(al.item([a]).tagName, "(" ,a , ")", al.item([a]).nodeType);
}

document.write("</br>");

//Задание 2
for (var b = 0; b < document.body.childNodes.length; b++) {
	document.write(document.body.childNodes[b], " ");
}

document.write("</br>");

//Задание 3
for (var i = 0; i < al.length; i++) {
	if (al.item([i]).tagName == "SPAN") {
		document.write(al.item([i]).innerHTML);
		break;
	}
}
//console.log(document.all);
document.write("</br>");
document.write(document.getElementsByTagName('span')[0].innerHTML);
document.write("</br>");
document.write(document.getElementById('frs').innerHTML);

document.write("</br>");

//Задание 4
var table = document.all.item(64);
var s1 = table.rows[3].cells[1].innerHTML.toString();
var s2 = table.rows[3].cells[2].innerHTML.toString();
var s3 = s1 + " и " + s2;
al.item(15).innerHTML = al.item(15).innerHTML + " (" + s3 + ")";