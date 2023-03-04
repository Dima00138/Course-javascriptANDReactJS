var flag = false;
var work = false;
var ide = "";
var moving = 0;
var x = 0;
var xc; var yc;
var intervalCircle;
var coord ="";

$(document).ready(function() {
   
$("body").mousemove(function(){
 if (flag){ 
 $("#" + ide).css("top",((event.pageY-(parseInt($("#"+ide).css("width"))/4)) + 'px'));
 $("#" + ide).css("left",((event.pageX-(parseInt($("#"+ide).css("height"))/4)) + 'px'));
    }
});
$("body").mouseup(function(){
 flag = false;
});

$("body").on("dragstart", function() {
   ide = $('[draggeble="on"]:hover')[0].getAttribute("id");
 flag = true;
});

$("#mimg2").dblclick(function() {
   ide = $("#mimg2");
   ide.animate({left:380}, 3700);
});

$("#mimg3").dblclick(function() {
   ide = $("#mimg3");
   if (work == false)
      work = true;
   else work = false;
   if (work==true) {
      intervalCircle = setInterval(function() {
         xc = 10 + 50*Math.sin(0.03*x);
         yc = 600 + 50*Math.cos(0.03*x);
         ide.animate({
            top: eval(yc) + 'px',
            left: eval(xc) + 'px'},
            10);
         x++;
      },10);
   }else {   
      ide.stop(true,true);
      clearInterval(intervalCircle);
      ide.animate({left:x0,
                  top:y0},100)};
      x0 = ide.css("left");
      y0 = ide.css("top");
   });

$("#r1,#r2,#r3,#r4").click(function() {
   ide = $(event.currentTarget);
   coord = ide[0].getAttribute("coord");
   var pcol = "";
   /* ycc - выражение с переменной х
   х00, у00 - координаты начала кривой
   t - количество точек кривой (значений переменной х)
   s - длина штриха и паузы 
   k - приращение  x*/
   let ycc = coord.split(",")[0];
   let x00 = parseInt(coord.split(",")[1]);
   let y00 = parseInt(coord.split(",")[2]);
   let t = parseInt(coord.split(",")[3]);
   let s = parseInt(coord.split(",")[4]);
   let k = parseInt(coord.split(",")[5]);
   if ($("#color option:selected").text() == "Черный")
      pcol = "bl";
   else if ($("#color option:selected").text() == "Красный")
      pcol = "rd";
      else pcol = "blue";
   $("#graph").html("");
   draw = true;
   let i = 0;
   let istr0="<img src='point"+pcol+".bmp' style='position: absolute;width:3px;height:3px;  top:";
   for (let x = -1 * t/2;x < t/2; x+=k) {
      if (draw)
        var istr = istr0 + (y00 + eval(ycc)) + "px;left:" + (x00 + x) + "px;'>";
         if ((i > s) && (s > 0)) {
            draw = false;
            i = 0;
            }
            i++;
            $("#graph").html($("#graph").html()+istr);
         }
});

});