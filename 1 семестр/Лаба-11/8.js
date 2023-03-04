$(document).ready(function() {

$("#p1").mouseover( function() {
	$("#p1").css("color","red");
});

$("#p2").click(function() {
	$("#p2").css("fontSize","1.2em");
});

$("#i1").click(function() {
	$("#i1").attr("src","2.jpg");
});

$("#p3").click(function() {
	$("#p3").html("<img style='display: block;width:400px; height: 200px; margin: auto;' src='2.jpg'>");
});

$("#i2").mouseout(function() {
	$("#i2").css("width",parseInt(document.getElementById('i2').style.width)-200+'px');
});

$("#i2").mouseover(function() {
		$("#i2").css("width",parseInt(document.getElementById('i2').style.width)+200+'px');
});

$("#p4").dblclick(function() {
	$("#p4").css("border","2px solid blue");
});
});