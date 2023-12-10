// 3. DÍA DE LOS INOCENTES

var camino = 0;
var ok=1;
var op = new Array();
op[1] = "DÍA DE LOS SANTOS INOCENTES"
op[2] = "DIA DE LOS SANTOS INOCENTES"


var msgs = new Array();
msgs[0] = "\n\t 3. DÍA DE LOS INOCENTES: \n \n \t \t Responded sabiamente para conseguir las uvas. \n \n \t \t -La respuesta solo EN LETRAS MAYÚSCULAS \n \n\n\n \t \t  ¿CUÁL ES EL NOMBRE COMPLETO DEL 'DÍA DE LOS INOCENTES'?"
msgs[1] = "\t \t ¡Enhorabuena! Aquí tenéis tres uvas para Jan."
msgs[2] = "\t \t ¡Enhorabuena! Aquí tenéis tres uvas para Jan."
msgs[3] = "\t El texto escrito no es una posible respuesta. Intentadlo de nuevo. (Wprowadzony tekst nie jest jedną z możliwych odpowiedzi. Spróbujcie jeszcze raz.)"
 
var x = ""
num = 1
toggle = 1
OOK = 0
timval = 0
var tval = ""
var msg = msgs[0];
var cont=0;

function cambiarImg(){
    var valor="img/"+camino+".png"
    $(".imagen img").fadeOut("fast",function(){
        $(".imagen img").attr("src",valor);
    });
    $(".imagen img").fadeIn("fast");
}

$(document).ready(function(){
   $("form").submit(function(){
        var entry = $("#entrada").val();
        var p = -1;
        var i = 1;
        ok=0
        while (i<=3){
            if (entry!="") p= entry.indexOf(op[i]);
            if (p!=-1){
                camino = i;
                msg = msgs[camino];
                num = 1;
                ok = 1;
                toggle=1
                cambiarImg();
                scroll();
            }
            i=i+1;
        }

       if(ok!=1) {
            msg = msgs[3];
            num = 1
            toggle=1
            scroll();
            setTimeout("iniciar()", "4500")
        }
        $("#entrada").val("");
        return false;
  });
 });

function iniciar(){
    msg = msgs[0];
    num = 1;
    toggle=1;
    ok=1;
    scroll();
}
function scroll() {
  document.myform.entrada.disabled = "disabled"
    if (num <= msg.length)
      OOK = 1
  if ( OOK == 1)
 {
 OOK = 0
 x = msg.substring(0,num)
 document.myform.scroll.value = x
 num = num+1;
 }
  else
 {
 x = ""
 document.myform.scroll.value = msg
 if ((camino==0)&&(ok==1)) document.myform.entrada.disabled = ""
 document.myform.entrada.focus();
 num = msg.length;
 toggle=0;
 }
  if (toggle == 1)
 setTimeout("scroll()", timval)
 }