var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d"); 
var X,Y,W,H,r;              
var s,w,h;
var fwidth = 0; // ancho
var fheight =0; // alto
s = getComputedStyle(canvas);
w = s.width;
h = s.height;		
W = canvas.width = w.split("px")[0];
H = canvas.height = h.split("px")[0]; 
X = Math.floor(W/2);
Y = Math.floor(H/2);
r = Math.floor(W/3);
fwidth=W;
fheight=H;
// CONTADOR DE FPS Y APS 		
var fps=0;
var aps=0;
var Seg=0;
/*JUEGO variable*/
var Tiempo=0; 
var teclado={};
var teclado2={};

var teclaM = 77;
teclaN = 78;

var teclaFlechaDerecha=37;
var teclaFlechaArriba=38;
var teclaFlechaIzquierda=39;
var teclaFlechaAbajo=40;
var teclaEsc=27;
var teclaEnter = 13;
var teclaEspacio = 32;
var teclaRetroceso = 8;
var teclaMayus = 16;
var teclaControl = 17;

var Teclapress=0;
var TIEMPOGEMACAIDA=0;

var Escena=1;
//////////////////
var SelecaIdioma=true;
var idioma="";
if(SelecaIdioma==true){
	idioma="ENG";
}
if(SelecaIdioma==false){
	idioma="ES";
}
"ES=>Español"
"ENG=>Ingles"


/////////////
var ejecucion=false;
var PTS=0;

var COntrolsecuencia=0;

var premios=0;
var conpremio=0;
var Nletrero=1;

var CapaColision=true;

var Fondo={PosX:0,PosY:0,W:fwidth,H:fheight};

//E2
var Pause=false;
var AnimacionAciva=true;

var fondo={draw:false,PosX:0,PosY:0,fwidth,fheight};
/*VARIABLE*/
/////////////
var derumbe=0;
var TipodeGema=1;
var CambiodeGema=1;
var Cambiosecuencia=1;
var Vida=3;
var AnimacionVIDA=0;
var Vcaida=10;
var Velocidad=30;
var Colision=1;
var FracmentoGemas=false;
var animacionDerrumbe=0;

var animacion=0;
var animacionFondo=0;
var EstadoAnimaconFondo=0;
var pasos=0;
var cicloFondo=1;


var VelocidadAcelerada=0;
var NuevoDiamante=0;
var controldeDiamantes=0;
var controldeDiamantesEstado=0;


var TipodeSecuencia=1;
var ControlSecuencia=0;
var Ciclo_de_Obj=1;
var colisionconGemas=0;
var colisionsinGemas=0;





/*JUEGO variable*/
/*SONIDO*/
 var EstadoSonido=true;

	var conSonido2=false;
	var conSonido3=false;
	var conSonido4=false;
	var conSonido5=false;
	var conSonido6=false;
	var conSonido1=false;
	
		 
/*SONIDO*/


var GX1=W/2-450;
var GX2=W/2-306;
var GX3=W/2-162;
var GX4=W/2-18;
var GX5=W/2+126;
var GX6=W/2+270;
var GY=H/2+150


var gw=140;
var gh=100;


var Obj={draw:true,PosX:445,PosY:0,width:gw,height:gh};


var juego={draw:false}
var fractura={draw:false}


var Choquebarra={draw:false,PosBX:W/2-450,PosBY:GY+5,width:860,height:90};
var Choquebarra2={draw:false,PosBX:W/2-450,PosBY:GY-16,width:860,height:90};
var SeccionGemas={draw:false,PosBX:0,PosBY:400,width:600,height:90};
var GEMA1={draw:false,PosCX1:GX1,PosCY1:GY,width:gw,height:gh};
var GEMA2={draw:false,PosCX2:GX2,PosCY2:GY,width:gw,height:gh};
var GEMA3={draw:false,PosCX3:GX3,PosCY3:GY,width:gw,height:gh};
var GEMA4={draw:false,PosCX4:GX4,PosCY4:GY,width:gw,height:gh};
var GEMA5={draw:false,PosCX5:GX5,PosCY5:GY,width:gw,height:gh};
var GEMA6={draw:false,PosCX6:GX6,PosCY6:GY,width:gw,height:gh};
//////CAPA DE COLISION 
var Cgw=75;
var Cgh=100;


var cGX1=W/2-420;
var cGX2=W/2-273;
var cGX3=W/2-130;
var cGX4=W/2+15;
var cGX5=W/2+159;
var cGX6=W/2+303;
var cGY=H/2+150;

var CapachoqueOBJ={draw:true,width:40,height:70};

var ColiGEMA1={draw:false,CPosCX1:cGX1,CPosCY1:cGY,width:Cgw,height:Cgh};
var ColiGEMA2={draw:false,CPosCX2:cGX2,CPosCY2:cGY,width:Cgw,height:Cgh};
var ColiGEMA3={draw:false,CPosCX3:cGX3,CPosCY3:cGY,width:Cgw,height:Cgh};
var ColiGEMA4={draw:false,CPosCX4:cGX4,CPosCY4:cGY,width:Cgw,height:Cgh};
var ColiGEMA5={draw:false,CPosCX5:cGX5,CPosCY5:cGY,width:Cgw,height:Cgh};
var ColiGEMA6={draw:false,CPosCX6:cGX6,CPosCY6:cGY,width:Cgw,height:Cgh};


var Derum={draw:false,PosX:0,PosY:0,width:1000,height:200};


	var Diamante={draw:true};
	var G=0;
/*VARIABLE */
var limite1=W/2-450;
var limite2=W/2+410;

	 var animacionFondoU=98;
	
	
	var Tesperaf=0;
	
	
	var TeclapressOpciones=0;
	var TeclapressMenu1=0;
	
	var TiempoAnimacionEntrada=0;
	
	var TiempoTransicion=0.1;
	var Tt=true;
	