
const remote = require('electron').remote; 




var Mariposa={draw:false};
var Ave={draw:false};
var aniArbol=1;
var aniMariposa=1;
var aniAves=1;
var aniNuve=1;

var tex17="";
var tex18="";
var tex19="";
var tex20="";
var tex21="";



var velocidadX=50;	
var F=0;

	var letra1="white";
	var letra2="white";
	var letra3="white";

	var MenuActivo=false;
	var Tmenu=0;
	
var Tespera=0;







setInterval(function(){  aniArbol+=1; 	aniAves+=1;}, 5000);
 setInterval(function(){   	aniNuve+=1;  }, 10000);
var MariposaX=300;
var My=300;

		
	function Escena1(){
		
		
		
		
		

if(idioma=="ENG"){
	tex17="Play";
	tex18="Options";
	tex19="Exit";
	tex20="Press Enter";
	
}
if(idioma=="ES"){
	tex17="Jugar";
	tex18="Opciones";
	tex19="Salir";
	tex20="Presione Enter";

}	
	
F+=1;

if(F>5){
My=600;

}
if(F<8){
My=300;
}
if(F<12){
F=0;
}


	
	
const cueva = document.getElementById('fondiE1');	
const cielo = document.getElementById('cieloiE1');
const tierra = document.getElementById('tierraE1');
const tierra1 = document.getElementById('tierraE2');
const Nuve1 = document.getElementById('Nuve1E1');
const Nuve2 = document.getElementById('Nuve2E1');

const  ARBOL1= document.getElementById('ARBOL1E1');
const ARBOL2 = document.getElementById('ARBOL2E1');
const ARBOL3 = document.getElementById('ARBOL3E1');



ctx.save();
ctx.drawImage(cielo,Fondo.PosX,Fondo.PosY,Fondo.W,Fondo.H);
ctx.restore();

	ctx.save();
ctx.drawImage(Nuve2,Fondo.PosX,Fondo.PosY,Fondo.W,Fondo.H);
ctx.restore()
if(aniNuve==1){  

	ctx.save();
ctx.drawImage(Nuve1,Fondo.PosX,Fondo.PosY,Fondo.W,Fondo.H);
ctx.restore();
}
if(aniNuve==2){ 
ctx.save();
ctx.drawImage(Nuve2,Fondo.PosX,Fondo.PosY,Fondo.W,Fondo.H);
ctx.restore();}
if(aniNuve>2){ 
aniNuve=1;

 }	

ctx.save();
ctx.drawImage(tierra,Fondo.PosX,Fondo.PosY,Fondo.W,Fondo.H);
ctx.restore();

		
if(idioma=="ES"){
	ctx.save();
ctx.drawImage(cueva,Fondo.PosX,Fondo.PosY,Fondo.W,Fondo.H);
ctx.restore();
}
else
if(idioma=="ENG"){
ctx.save();
ctx.drawImage(cueva,Fondo.PosX,Fondo.PosY,Fondo.W,Fondo.H);
ctx.restore();	
}



ctx.save();
ctx.drawImage(tierra1,Fondo.PosX,Fondo.PosY,Fondo.W,Fondo.H);
ctx.restore();



//mariposad
 aniMariposa+=1;
 MariposaX-=velocidadX;

if(aniMariposa>3 ){ aniMariposa=1; }

if(MariposaX <= 0 || MariposaX >= W){ velocidadX*=-1  }
if(MariposaX <= 0 ){ Mariposa.draw=true; }
if(MariposaX  >= W ){ Mariposa.draw=false; }



if(Mariposa.draw==true){

ctx.save();
var mariposa = new Image();
mariposa.src ="Entrada/Mariposa2"+aniMariposa+".png";
ctx.drawImage(mariposa,MariposaX,My,60,60);
ctx.restore();
}
else{
ctx.save();
var mariposa = new Image();
mariposa.src ="Entrada/Mariposa"+aniMariposa+".png";
ctx.drawImage(mariposa,MariposaX,My,60,60);
ctx.restore();
}



//mariposa
	

	

	
	
if(aniArbol>3){
aniArbol=1;

}

if(aniArbol==1){
ctx.save();
ctx.drawImage(ARBOL1,Fondo.PosX,Fondo.PosY+20,Fondo.W,Fondo.H);
ctx.restore();

}
if(aniArbol==2){
ctx.save();
ctx.drawImage(ARBOL2,Fondo.PosX,Fondo.PosY+20,Fondo.W,Fondo.H);
ctx.restore();

}

if(aniArbol==3){
ctx.save();
ctx.drawImage(ARBOL3,Fondo.PosX,Fondo.PosY+20,Fondo.W,Fondo.H);
ctx.restore();

}
	



///////////////////////////////////////




	
	
	
	
	
	
	
	
	
if(teclado[teclaFlechaAbajo]  && Nletrero>=1 && TeclapressMenu1==0){ 
TeclapressMenu1=1;
Nletrero+=1; 
 if(EstadoSonido==true){
audioPasos.play();
 }
 
 if(Nletrero>3){ 	Nletrero=1; 	}
 
 }
	
if(teclado[teclaFlechaArriba] && Nletrero<=3 && TeclapressMenu1==0){ 

TeclapressMenu1=1;
Nletrero-=1; 
	if(EstadoSonido==true){
	audioPasos.play();
	}
if(Nletrero<1){ Nletrero=3; }

 }
 
 if(teclado[teclaFlechaAbajo]==false && teclado[teclaFlechaArriba]==false && TeclapressMenu1==1){
	
	TeclapressMenu1=0;
}
else if(teclado[teclaFlechaAbajo]==undefined && teclado[teclaFlechaArriba]==undefined){
	teclado[teclaFlechaAbajo]=false;
	teclado[teclaFlechaArriba]=false;
}

 var cambioEcenas=0;
	
	if(teclado[teclaEnter] && MenuActivo==false && Escena==1 ){
		
		if(EstadoSonido==true){
		audioPICOe.play();
		}
		MenuActivo=true;
		
		
		}
	if(MenuActivo==true && Tmenu<3){
		
Tmenu+=1;
	}if(Tmenu==3){
Tmenu=4;
	}
	





if( Nletrero==1 && Escena==1){
	 letra1="white";
	 letra2="grey";
	letra3="grey";

	
}if( Nletrero==2 && Escena==1){
	letra1="grey";
	letra2="white";
	letra3="grey";

	
}if( Nletrero==3 && Escena==1){
	letra1="grey";
	letra2="grey";
	letra3="white";
	
	

}
	

	
if(MenuActivo==false){

if(idioma=="ENG"){
ctx.save();
ctx.fillStyle="white";
ctx.font = '34px calibri black';
ctx.fillText(tex20,X-75,Y+150);
ctx.restore();
}
else
if(idioma=="ES"){
ctx.save();
ctx.fillStyle="white";
ctx.font = '34px calibri black';
ctx.fillText(tex20,X-95,Y+150);
ctx.restore();
}

}
// Tespera=0;

if(Tespera<3){
		
Tespera+=1;
	}if(Tespera==3){
Tespera=4;
	}
	
	
	
if(MenuActivo==true  && Tmenu==4 && Escena==1 ){

/////////////////cambios
if( Nletrero==1 && teclado[teclaEnter] && Tespera==4 ){
if(EstadoSonido==true){
		audioPICOe.play();
} 
Escena=2;
	
}
if( Nletrero==2  && teclado[teclaEnter] && Tespera==4 ){
		if(EstadoSonido==true){
		audioPICOe.play();
		}
SeleccionOpciones=1;
 Escena=3;
	
}
if( Nletrero==3  && teclado[teclaEnter] && Tespera==4 ){
if(EstadoSonido==true){
			audioPICOe.play();
}
var window = remote.getCurrentWindow(); 
    window.close(); 

	
}




////////////////////////////
if(idioma=="ENG"){
 ctx.save();
ctx.fillStyle=letra1;
ctx.font = '35px calibri black';
ctx.fillText(tex17,X-30,Y+100);
ctx.restore();
//////////////////
 ctx.save();
ctx.fillStyle=letra2;
ctx.font = '35px calibri black';
ctx.fillText(tex18,X-59,Y+135);
ctx.restore();
//////////////////
 ctx.save();
ctx.fillStyle=letra3;
ctx.font = '35px calibri black';
ctx.fillText(tex19,X-27,Y+170);
ctx.restore();

}
else
if(idioma=="ES"){
 ctx.save();
ctx.fillStyle=letra1;
ctx.font = '35px calibri black';
ctx.fillText(tex17,X-30,Y+100);
ctx.restore();
//////////////////
 ctx.save();
ctx.fillStyle=letra2;
ctx.font = '35px calibri black';
ctx.fillText(tex18,X-62,Y+135);
ctx.restore();
//////////////////

 ctx.save();
ctx.fillStyle=letra3;
ctx.font = '35px calibri black';
ctx.fillText(tex19,X-27,Y+170);
ctx.restore();

}
}


	}