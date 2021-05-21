

var TA="";
var TC="";

var TeclaSO=new Array(8);




var Selecactivo=false;

SeleccionOpciones=1;

var Secolor1="white";
var Secolor2="white";
var Secolor3="white";
var Secolor4="white";
var Secolor5="white";
var Secolor6="white";
var Secolor7="white";
var Secolor8="white";
var Letratexto="";
var Codigo="";

var tex1="";
var tex2="";
var tex3="";
var tex4="";
var tex5="";
var tex6="";
var tex7="";
var tex8="";
var tex9="";
var tex10="";
var tex11="";
var tex12="";
var tex13="";
var texSondo="";
var texidioma="";


var  letf="";
var riht="";
var Dow="";
var  up="";
var Ente="";
var Pau="";
	
	
	
	


function TeclaPress(){
		if(teclaCodigo!=teclaEnter){
		 TA = String.fromCharCode(teclaCodigo);
		 TC=teclaCodigo;
		}
}




function textllamada(){


if(idioma=="ENG"  ){
		letf="Left";
		riht="Right";
		Dow="Down";
		up="Up";
		Ente="Enter";
		Pau="Space";

	}
else
	if(idioma=="ES" ){
		letf="Izquierda";
		riht="Derecha";
		Dow="Abajo";
		up="Arriva";
		Ente="Enter";
		Pau="Espacio";
	}
}
textllamada();



function Escena3(){
// conSonido5=true;
	
		if(idioma=="ENG"  ){
		tex1="Sound";
		tex2="Yes";
		tex3="Not";
		tex4="Languaje";
		tex5="English";
		tex6="Spanish";
		tex7="Left";
		tex8="Right";
		tex9="Up";
		tex10="Down";
		tex11="Enter";
		tex12="Pause";
		tex13="Back";
			
		}
		if(idioma=="ES" ){
			
		tex1="Sonido";
		tex2="Si";
		tex3="No";
		tex4="Idioma";
		tex5="Ingles";
		tex6="Espa\u00F1ol";
		tex7="Izquierda";
		tex8="Derecha";
		tex9="Arriba";
		tex10="Abajo";
		tex11="Enter";
		tex12="Pausa";
		tex13="Regresar";
		}
			
	//////////img

ctx.save();
var OP = new Image();
OP.src ="Img/OP.png";
ctx.drawImage(OP,0,0,W,H);
ctx.restore();
	
//movimiento
		if(teclado[teclaFlechaAbajo]  && SeleccionOpciones<=9  && Escena==3  && TeclapressOpciones==0){ 	
		 audioPasos.play();
		 TeclapressOpciones=1;
		SeleccionOpciones+=1; 
	
		}
		if(SeleccionOpciones>9){ SeleccionOpciones=1; }
		
		if(teclado[teclaFlechaArriba] && SeleccionOpciones>=1  && Escena==3 && TeclapressOpciones==0){
			audioPasos.play();
TeclapressOpciones=1;
		SeleccionOpciones-=1; 
		
		}
		if(SeleccionOpciones<1){ SeleccionOpciones=9; }
		
		
if(teclado[teclaFlechaAbajo]==false && teclado[teclaFlechaArriba]==false && TeclapressOpciones==1){
	
	TeclapressOpciones=0;
}
else if(teclado[teclaFlechaAbajo]==undefined && teclado[teclaFlechaArriba]==undefined){
	teclado[teclaFlechaAbajo]=false;
	teclado[teclaFlechaArriba]=false;
}

if(teclado[teclaEnter]  && SeleccionOpciones==1  && Escena==3){
		audioPICOe.play();
if(EstadoSonido==false){ EstadoSonido=true;     }
else
if(EstadoSonido==true){ EstadoSonido=false;    	}

}

if(teclado[teclaEnter]  && SeleccionOpciones==9 && Escena==3){ 
audioPICOe.play();
Escena=1; Nletrero=1;
Tespera=0;
}

if(teclado[teclaEnter]  && SeleccionOpciones==2 && Escena==3){
	audioPICOe.play();
	
if(SelecaIdioma==false){ SelecaIdioma=true;  idioma="ENG"; textllamada(); }
else
if(SelecaIdioma==true){ SelecaIdioma=false; idioma="ES"; textllamada();} 
	
}

	
	
	


//movimiento
if(SeleccionOpciones==1){
	Secolor1="white";
Secolor2="grey";
Secolor3="grey";
Secolor4="grey";
Secolor5="grey";
Secolor6="grey";
Secolor7="grey";
Secolor8="grey";
Secolor9="grey";	
}

if(SeleccionOpciones==2){
	Secolor2="white";
	Secolor1="grey";
Secolor3="grey";
Secolor4="grey";
Secolor5="grey";
Secolor6="grey";
Secolor7="grey";
Secolor8="grey";
Secolor9="grey";
	
}

if(SeleccionOpciones==3){
Secolor3="white";
Secolor1="grey";
Secolor2="grey";
Secolor4="grey";
Secolor5="grey";
Secolor6="grey";	
Secolor7="grey";
Secolor8="grey";	
Secolor9="grey";
}

if(SeleccionOpciones==4){
Secolor4="white";
Secolor1="grey";
Secolor2="grey";
Secolor3="grey";
Secolor5="grey";
Secolor6="grey";	
Secolor7="grey";
Secolor8="grey";	
Secolor9="grey";
}
if(SeleccionOpciones==5){
	Secolor5="white";
	
Secolor1="grey";
Secolor2="grey";
Secolor3="grey";
Secolor4="grey";
Secolor6="grey";	
Secolor7="grey";
Secolor8="grey";
Secolor9="grey";
		
}if(SeleccionOpciones==6){
	Secolor6="white";
Secolor1="grey";
Secolor2="grey";
Secolor3="grey";
Secolor4="grey";
Secolor5="grey";	
Secolor7="grey";
Secolor8="grey";
Secolor9="grey";
		
}if(SeleccionOpciones==7){
Secolor7="white";
Secolor6="grey";
Secolor1="grey";
Secolor2="grey";
Secolor3="grey";
Secolor4="grey";
Secolor5="grey";	
Secolor8="grey";
Secolor9="grey";	
}
if(SeleccionOpciones==8){
Secolor8="white";
Secolor9="grey";
Secolor7="grey";
Secolor6="grey";
Secolor1="grey";
Secolor2="grey";
Secolor3="grey";
Secolor4="grey";
Secolor5="grey";	

		
}
if(SeleccionOpciones==9){
Secolor9="white";
Secolor8="grey";
Secolor7="grey";
Secolor6="grey";
Secolor1="grey";
Secolor2="grey";
Secolor3="grey";
Secolor4="grey";
Secolor5="grey";	

		
}
if(SeleccionOpciones==3 && teclado[teclaEnter] ){
teclaFlechaIzquierda=TC;
letf=TA;          

  }
if(SeleccionOpciones==4 && teclado[teclaEnter] ){
teclaFlechaDerecha=TC;
riht=TA;            }
if(SeleccionOpciones==5 && teclado[teclaEnter] ){
teclaFlechaArriba=TC;
up=TA;            }
if(SeleccionOpciones==6 && teclado[teclaEnter] ){
teclaFlechaAbajo=TC;
Dow=TA;            }
if(SeleccionOpciones==7 && teclado[teclaEnter] ){
teclaEnter=TC;
Ente=TA;            }
if(SeleccionOpciones==8 && teclado[teclaEnter] ){
teclaEspacio=TC;
 Pau=TA;            }


 
 
	/*Opciones*/
	

	 
	/*Opciones*/
	
 ctx.save();
ctx.fillStyle="white";
ctx.font = '40px calibri black';
ctx.fillText(tex1,X/2+100,Y/2+26);
ctx.restore();

 if(EstadoSonido==true){
		 ctx.save();
ctx.fillStyle=Secolor1;
ctx.font = '40px calibri black';
ctx.fillText(tex2,X/2+300,Y/2+26);
ctx.restore();
	 }
	 else{
		 ctx.save();
ctx.fillStyle=Secolor1;
ctx.font = '40px calibri black';
ctx.fillText(tex3,X/2+300,Y/2+26);
ctx.restore();
		
	}


//Borrar datos
			 ctx.save();
ctx.fillStyle="white";
ctx.font = '40px calibri black';
ctx.fillText(tex4,X/2+100,Y/2+64);
ctx.restore();

if(SelecaIdioma==true){
 ctx.save();
ctx.fillStyle=Secolor2;
ctx.font = '40px calibri black';
ctx.fillText(tex5,X/2+300,Y/2+63);
ctx.restore();
}
else{
////
 ctx.save();
ctx.fillStyle=Secolor2;
ctx.font = '40px calibri black';
ctx.fillText(tex6,X/2+300,Y/2+63);
ctx.restore();
}

//izquierda
			 ctx.save();
ctx.fillStyle="white";
ctx.font = '40px calibri black';
ctx.fillText(tex7,X/2+100,Y/2+110);
ctx.restore();
 ctx.save();
ctx.fillStyle=Secolor3;
ctx.font = '40px calibri black';
ctx.fillText(letf,X/2+300,Y/2+110);
ctx.restore();
// //derecha
	 ctx.save();
ctx.fillStyle="white";
ctx.font = '40px calibri black';
ctx.fillText(tex8,X/2+100,Y/2+145);
ctx.restore();
 ctx.save();
ctx.fillStyle=Secolor4;
ctx.font = '40px calibri black';
ctx.fillText(riht,X/2+300,Y/2+145);
ctx.restore();
// //arriba
			 ctx.save();
ctx.fillStyle="white";
ctx.font = '40px calibri black';
ctx.fillText(tex9,X/2+100,Y/2+185);
ctx.restore();

 ctx.save();
ctx.fillStyle=Secolor5;
ctx.font = '40px calibri black';
ctx.fillText(up,X/2+300,Y/2+185);
ctx.restore();


// //abajo
			 ctx.save();
ctx.fillStyle="white";
ctx.font = '40px calibri black';
ctx.fillText(tex10,X/2+100,Y/2+225);
ctx.restore();

 ctx.save();
ctx.fillStyle=Secolor6;
ctx.font = '40px calibri black';
ctx.fillText(Dow,X/2+300,Y/2+225);
ctx.restore();
		// //Enter
	ctx.save();
ctx.fillStyle="white";
ctx.font = '40px calibri black';
ctx.fillText(tex11,X/2+100,Y/2+270);
ctx.restore();
 ctx.save();
ctx.fillStyle=  Secolor7;
ctx.font = '40px calibri black';
ctx.fillText(Ente,X/2+300,Y/2+270);
ctx.restore();
	// //Enter
			 ctx.save();
ctx.fillStyle="white";
ctx.font = '40px calibri black';
ctx.fillText(tex12,X/2+100,Y/2+304);
ctx.restore();
 ctx.save();
ctx.fillStyle=Secolor8;
ctx.font = '40px calibri black';
ctx.fillText(Pau,X/2+300,Y/2+304);
ctx.restore();
		
	
	/*Opciones*/
	
if(idioma=="ENG"){
	ctx.save();
ctx.fillStyle=Secolor9;
ctx.font = '40px calibri black';
ctx.fillText(tex13,X-50,Y+230);
ctx.restore();
}

if(idioma=="ES"){
	ctx.save();
ctx.fillStyle=Secolor9;
ctx.font = '40px calibri black';
ctx.fillText(tex13,X-77,Y+230);
ctx.restore();
}


if(SeleccionOpciones>0 && SeleccionOpciones<3 ){
		if(idioma=="ENG"){
		ctx.save();
ctx.fillStyle="white";
ctx.font = '28px calibri black';
ctx.fillText("Press enter ",X/2-170,Y/2+110);
ctx.fillText("to change",X/2-170,Y/2+145);
ctx.restore();
		}
else		
		if(idioma=="ES"){
		ctx.save();
ctx.fillStyle="white";
ctx.font = '28px calibri black';
ctx.fillText("Presione enter ",X/2-170,Y/2+110);
ctx.fillText("para cambiar",X/2-170,Y/2+145);
ctx.restore();
		}
	
}if(SeleccionOpciones>=3 && SeleccionOpciones<9 ){
	
	if(idioma=="ENG"){
	ctx.save();
ctx.fillStyle="white";
ctx.font = '28px calibri black';
ctx.fillText("Select a key",X/2-150,Y/2+110);
ctx.fillText("and enter to change",X/2-200,Y/2+145);
ctx.restore();
	}
else
	if(idioma=="ES"){
ctx.save();
ctx.fillStyle="white";
ctx.font = '28px calibri black';
ctx.fillText("Seleccione una tecla ",X/2-200,Y/2+110);
ctx.fillText("y enter para cambiar",X/2-200,Y/2+145);
ctx.restore();
	
	}
 }
	
	
 
 
 
 
 
 
 
 

 


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}




	
	