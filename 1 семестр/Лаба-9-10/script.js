let flag = false;
var work = false;
var interCircle;
var interCircle2;
var ide = "";
var moving = 0;
var x;

function drag() {
 flag = true;
 ide = event.srcElement.id;
}

function mbody1(){
 if (flag){ 
 document.all[ide].style.top = (event.clientY-(parseInt(document.all[ide].style.width)/4)) + 'px';
 document.all[ide].style.left = (event.clientX-(parseInt(document.all[ide].style.height)/4)) + 'px';
    }
}
function mbody2(){
 flag = false;
}

function init_horl() {
   ide = event.srcElement.id;
   moving = setInterval("horl()", 10);
}

function horl() {
   document.all[ide].style.left = parseInt(document.all[ide].style.left)+1 +'px';
   if ((parseInt(document.all[ide].style.left) > 380))
      clearInterval(moving);
}

function curvemove(xc,yc,time) {
   if (work == false) {
      work = true;
   if (!xc) xc = "x";
   if (!yc) yc = "x";
   if (!time) time = 100;
   x = 0;
   ide = event.srcElement.id;
   var x00 = document.all[ide].style.left;
   var y00 = document.all[ide].style.top;
   interCircle = setInterval(function(){
      x++;(x==181)?x=0:x=x;
   document.all[ide].style.top = eval(yc) + 'px';
   document.all[ide].style.left = eval(xc) + 'px';}, time);}
   else {
      work = false;
      clearInterval(interCircle);
      interCircle = null;
      if ((xc != x00) || (yc != y00) || (x!=0)) {
         interCircle2 = setInterval(function(){
            x--;
            if (x==0) {
               clearInterval(interCircle2);
               interCircle2 = null;
            }
   document.all[ide].style.top = eval(yc) + 'px';
   document.all[ide].style.left = eval(xc) + 'px';}, time);
      }else { clearInterval(interCircle2);interCircle2 = null;}

   }
}

function cmove(ide, xc, yc) {
   x++;
   document.all[ide].style.top = eval(yc) + 'px';
   document.all[ide].style.left = eval(xc) + 'px';
}

function curve(yc, x0, y0, t, s, k) {
   /* yc - выражение с переменной х
   х0, у0 - координаты начала кривой
   t - количество точек кривой (значений переменной х)
   s - длина штриха и паузы 
   k - приращение  x*/
   var pcol = "";
   if (document.all['f1'].elements[0].value == "Черный")
      pcol = "bl";
   else if (document.all['f1'].elements[0].value == "Красный")
      pcol = "rd";
      else pcol = "blue";
   document.getElementById('graph').innerHTML = "";
   draw = true;
   var i = 0;
   var istr0="<img src='point"+pcol+".bmp' style='position: absolute;width:3px;height:3px;  top:";
   for (let x = -1 * t/2; x < t/2; x+=k) {
      if (draw)
        var istr = istr0 + (y0 + eval(yc)) + "px;left:" + (x0 + x) + "px;'>";
         if ((i > s) && (s > 0)) {
            draw = false;
            i = 0;
            }
            i++;
      document.getElementById('graph').innerHTML += istr;
   }
}