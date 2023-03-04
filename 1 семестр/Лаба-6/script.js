var newwind1;
var newwind2;

function ookno1() {
	newwind1 = window.open('about:blank', 'okno1');
	newwind1.document.head.innerHTML = "<title>Окно 1</title>";
}

function cokno1() {
	newwind1.window.close('okno1');
}

function tokno1() {
	newwind1.document.body.innerHTML = "Текст Oкно 1 ";
}

function ookno2() {
	newwind2 = window.open('about:blank', 'okno2');
	newwind2.document.head.innerHTML = "<title>Окно 2</title>";
}

function cokno2() {
	newwind2.window.close('okno2');
}

function tokno2() {
	newwind2.document.body.innerHTML = "Текст Окно 2";
}
//Задание 2
document.write("<table border><tr><td>Свойство</td><td>Значение</td></tr>");
document.write("<td>userAgent</td><td>", navigator.userAgent,"</td>");
document.write("<tr><td>appVersion</td><td>", navigator.appVersion,"</td></tr>");
document.write("<tr><td>appName</td><td>", navigator.appName,"</td></tr>");
document.write("<tr><td>appCodeName</td><td>", navigator.appCodeName,"</td></tr>");
document.write("<tr><td>platform</td><td>", navigator.platform,"</td></tr>");
document.write("<tr><td>javaEnabled()</td><td>", window.navigator.javaEnabled(),"</td></tr>");
document.write("<tr><td>width</td><td>", screen.width,"</td></tr>");
document.write("<tr><td>height</td><td>", screen.height,"</td></tr>");
document.write("<tr><td>colorDepth</td><td>", screen.colorDepth,"</td></tr>");
document.write("<tr><td>history</td><td>", history.href,"</td></tr>");
document.write("<tr><td>pathname</td><td>", location.pathname,"</td></tr>");
document.write("<tr><td>host</td><td>", location.host,"</td></tr></table>");