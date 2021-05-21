

var textapart=true;
var tex15="";
var tex16="";

var Tesperaf=0;








function Escena4(){
	if(idioma=="ENG"){
		tex15="WIN"; tex16="SCORE";

if(animacionFondoU==98){ 
 // paso0
  var YLetrero=Y-130;
var aL="33px calibri black";
var Xl=X-35; 

  }
if(animacionFondoU==100){ 
// // paso1
textapart=true;

var YLetrero=Y-87;
var aL="44px calibri black";
var Xl=X-40;

if(textapart==true){
			var aL2="28px calibri black";
			var YPUNTOS=Y-60;
			var Xl2=X-40;
			}
   }
if(animacionFondoU==102){  // paso2
 var YLetrero=Y-70;
var aL="50px calibri black";
var Xl=X-45;
if(textapart==true){
				 var aL2="28px calibri black";
				var YPUNTOS=Y-23;
				var Xl2=X-30;
			}
   }
if(animacionFondoU>=104){


	
 var aL="55px calibri black";
 var YLetrero=Y-60;
var Xl=X-45;
// finaliza en Y-60;
if(textapart==true){
				 var aL2="28px calibri black";
				var YPUNTOS=Y-23;
				var Xl2=X-30;
			}
		
  }	}//cierre de idioma
if(idioma=="ES"){tex15="GANASTE"; tex16="PUNTOS";


if(animacionFondoU==98){ 
 // paso0
 
 
  var YLetrero=Y-130;
var aL="33px calibri black";
var Xl=X-70; 


  }
if(animacionFondoU==100){ 
// // paso1
textapart=true;

  var YLetrero=Y-87;
var aL="44px calibri black";
var Xl=X-80;

if(textapart==true){
				 var aL2="28px calibri black";
				var YPUNTOS=Y-60;
				var Xl2=X-50;
			}
   }
if(animacionFondoU==102){  // paso2
 var YLetrero=Y-70;
var aL="50px calibri black";
var Xl=X-100;
if(textapart==true){
				 var aL2="28px calibri black";
				var YPUNTOS=Y-23;
				var Xl2=X-50;
			}
   }
if(animacionFondoU>=104){


	
 var aL="55px calibri black";
 var YLetrero=Y-60;
var Xl=X-110;
// finaliza en Y-60;
if(textapart==true){
				 var aL2="28px calibri black";
				var YPUNTOS=Y-23;
				var Xl2=X-50;
			}
		
  }

}


	







	ctx.save();
	var imgfondo = new Image();
	imgfondo.src="secuencia-fondo/Secuencia2/"+animacionFondoU+".png";
	ctx.drawImage(imgfondo,fondo.PosX, fondo.PosY, fondo.fwidth, fondo.fheight);
	ctx.restore();
	
//titulo
ctx.save();	
ctx.font = aL;
ctx.fillStyle="rgb(57,38,0)";
ctx.fillText(tex15,Xl,YLetrero);
ctx.restore();
//puntos

ctx.save();	
ctx.font = aL2;
ctx.fillStyle="rgb(57,38,0)";
ctx.fillText(tex16,Xl2,YPUNTOS);
ctx.restore();



if(Tesperaf<20 && animacionFondoU==122){
		
Tesperaf+=1;

	}
	if(Tesperaf==20){
Tesperaf=21;
	}

 if(Tesperaf==21 ){
	
ctx.save();
		ctx.fillStyle="rgba(115, 115, 115, 0.3)";
		ctx.fillRect(
		0,
		0,
		W,
		H);
		ctx.restore();

	if(idioma=="ES"){
ctx.save();
ctx.font = '45px calibri black';
ctx.fillStyle="white";
ctx.fillText("Presione Entrar para Jugar",X-300,Y+220);
ctx.restore();
	}
		if(idioma=="ENG"){

ctx.save();
ctx.font = '45px calibri black';
ctx.fillStyle="white";
ctx.fillText("Press Enter to Play",X-188,Y+220);
ctx.restore();

		 }

}


	
	
	
	
	
	
	
	
	
	
	



}

