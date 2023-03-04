function writing() {
	let forma = document.all['forma'];
	let div = document.getElementById('one');
	div.innerHTML = "<center><h1>" + forma.elements[0].value + "</h1></center>";
	div.innerHTML = div.innerHTML + "</br>Студент " + forma.sname.value + " специальность " + forma.spec.value + " курс " + forma.r1.value + " должен сдавать следующие предметы:</br>";
	div.innerHTML += "<ul>";
	(forma.oit.checked == true)?div.innerHTML+="<li>ОИТ</li>":div=div;
	(forma.oap.checked == true)?div.innerHTML+="<li>ОАП</li>":div=div;
	(forma.hist.checked == true)?div.innerHTML+="<li>История</li>":div=div;
	(forma.phis.checked == true)?div.innerHTML+="<li>Физика</li>":div=div;
	(forma.math.checked == true)?div.innerHTML+="<li>Математика</li>":div=div;
	div.innerHTML += "</ul>";
	let form = document.all['form2'];
let spis = form.elements[0];
(forma.oit.checked == true)?spis.innerHTML+="<option id='a1'>ОИТ</option>":(document.getElementById('a1') != null)?spis.innerHTML-="<option id='a1'>ОИТ</option>":spis=spis;
(forma.oap.checked == true)?spis.innerHTML+="<option id='a2'>ОАП</option>":(document.getElementById('a2') != null)?spis.innerHTML-="<option id='a2'>ОАП</option>":spis=spis;
(forma.hist.checked == true)?spis.innerHTML+="<option id='a3'>История</option>":(document.getElementById('a3') != null)?spis.innerHTML-="<option id='a3'>История</option>":spis=spis;
(forma.phis.checked == true)?spis.innerHTML+="<option id='a4'>Физика</option>":(document.getElementById('a4') != null)?spis.innerHTML-="<option id='a4'>Физика</option>":spis=spis;
(forma.math.checked == true)?spis.innerHTML+="<option id='a5'>Математика</option>":(document.getElementById('a5') != null)?spis.innerHTML-="<option id='a5'>Математика</option>":spis=spis;
}
