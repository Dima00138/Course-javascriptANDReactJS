$(document).ready(function() {
$('#nav').mouseover(function(event){
//отслеживает нахождение мыши внутри блока
var target = $(event.target);
//отслеживаем клик
if (target[0].getAttribute("class") == 'menu-item'){
$(".menu-item").find(".submenu").hide();
target.children().toggle();
//массив, содержащий ложное меню
}
});

$(document).mouseover(function(event){
var target = event.target;
if (target.className!='menu-item' && target.className!='submenu')
$(".menu-item").find(".submenu").hide();
});
});