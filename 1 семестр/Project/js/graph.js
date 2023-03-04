//Обработчик
function graph() {
   let equat  = document.getElementById('equat').value;
   let re     = /[-]+|[=]+|[+]+/;
   let eqate  = equat.split(re);
       re     = /\w*\**\/*/;
   let znaks  = equat.split(re);
       znaks  = znaks.filter(function(el) {return el != "";});


   curve(equat, 300, 250, 400, 0, 10);
}

//Строитель
function curve(yc, x0, y0, t, s, k) {
   /* yc - выражение с переменной х
   х0, у0 - координаты начала кривой
   t - количество точек кривой (значений переменной х)
   s - длина штриха и паузы 
   k - приращение  x*/
   document.getElementsByClassName('graph_plo')[0].innerHTML = "";
   draw = true;
   var i = 0;
   //var v = 0;
   var istr0="<img src='../images/pointbl.bmp' style='position: absolute;width:3px;height:3px;  top:";
   // for (let x = -1 * t/2; x < t/2; x+=k) {
   //    if (i == 0) {
   //    var em = eval(yc);}
   //    i++;
   //    console.log(eval(yc) - em);
   //       if (((eval(yc) - em > 200) || (eval(yc) - em < -200)) && (v < 4) && ((x > -1*t/8) || (x > t/8))) {
   //          em = eval(yc);
   //          v++;
   //       if ((yc.endsWith("0.1") || (yc.endsWith("01")))) {
   //          yc = yc.substring(0,yc.length-1);
   //          yc += "01";
   //       }else {yc = "(" + yc + ")*0.1";}
         
   //    }
   // }
   // i = 0;
   yc = "(" + yc + ")*0.001";

   //Обработка ошибок
   try {

   for (let x = -1 * t/2; x < t/2; x+=k) {
        if (draw)
        var istr = istr0 + (y0 + eval(yc)) + "px;left:" + (x0 + x) + "px;'>";
         if ((i > s) && (s > 0)) {
            draw = false;
            i = 0;
            }
            i++;
      document.getElementsByClassName('graph_plo')[0].innerHTML += istr;
   }
   } catch(e) {
      alert("Ошибка в написании уравнения.");
   }
}