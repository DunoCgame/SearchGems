
function Ladoderecho(){
ctx.save();
ctx.fillStyle="white";
ctx.fillRect(limite1,0,5,500);
ctx.restore();

ctx.save();
ctx.fillStyle="white";
ctx.fillRect(limite2,0,5,500);
ctx.restore();
}
var SECUENCIASC="";
var tex14="";

var Secuencia1=new Array(110);
var Secuencia2=new Array(122);
var a=0;
var b=0;
for (var n=0; n<54; n++){	
a=n*2;
Secuencia1[n]="secuencia-fondo/secuencia1/"+a+".png";
// console.log("Se1"+"  "+"POS"+"-"+n+" "+"Img"+" "+Secuencia1[n]);
}
for (var n=0; n<62; n++){	
b=n*2;
Secuencia2[n]="secuencia-fondo/secuencia2/"+b+".png";
// console.log("Se2"+"  "+"POS"+"-"+n+" "+"Img"+" "+Secuencia2[n]);
}



function fondo_juego(){
	// conSonido4=true;
	
	
if(idioma=="ENG"){tex14="PAUSE";  }
if(idioma=="ES"){tex14="PAUSA"; }

if(cicloFondo==1 ){
SECUENCIASC=Secuencia1[animacionFondo];
}
if(cicloFondo==2 ){
SECUENCIASC=Secuencia2[animacionFondo];

}
	
	
	if(COntrolsecuencia==5 ){
		COntrolsecuencia=0;
		animacionFondo+=1;
		
	}

ctx.save();
var imgfondo = new Image();
imgfondo.src=SECUENCIASC;
ctx.drawImage(imgfondo,fondo.PosX, fondo.PosY, fondo.fwidth, fondo.fheight);
ctx.restore();

if(cicloFondo==1 &&  animacionFondo==54 ){
		animacionFondo=9;
		if(NuevoDiamante!=9){ 		NuevoDiamante+=1; 		}
}

if(NuevoDiamante==9){
	
		cicloFondo=2;
}


//animacion
//animacion
//animacion

if(cicloFondo==2 &&  animacionFondo==49 && NuevoDiamante==9){ 
	AnimacionAciva=false; 	 	 } 	

if(AnimacionAciva==false && animacionFondo!=61){
	
	animacion+=1;	
	
if(animacion==15){ 	animacionFondo+=1; 	animacion=0; }
	
	
}






}



function Barra_choque(){
	 if(CapaColision==true){
ctx.save();
ctx.fillStyle="rgba(255,255,255,0)";
ctx.fillRect(Choquebarra.PosBX,Choquebarra.PosBY,Choquebarra.width,Choquebarra.height);
ctx.restore();
	 }
}
function Barra_choque2(){
	 if(CapaColision==true){
ctx.save();
ctx.fillStyle="rgba(258,0,255,0)";
ctx.fillRect(Choquebarra2.PosBX,Choquebarra2.PosBY,Choquebarra2.width,Choquebarra2.height);
ctx.restore();
	 }
}


function GEMA(){

if(AnimacionAciva==true){
	
if(Obj.draw==true){
	if(CapaColision==true){
	ctx.save();
ctx.fillStyle="rgba(258,0,255,0)";
ctx.fillRect(Obj.PosX+50,Obj.PosY,CapachoqueOBJ.width,CapachoqueOBJ.height);
ctx.restore();
	}
if(TipodeGema==1){
ctx.save();
var Gemacon = new Image();
Gemacon.src ="Img/Gema1.png";
ctx.drawImage(Gemacon,Obj.PosX,Obj.PosY,Obj.width,Obj.height);
ctx.restore();
}
if(TipodeGema==2){
ctx.save();
var Gemacon = new Image();
Gemacon.src ="Img/Gema2.png";
ctx.drawImage(Gemacon,Obj.PosX,Obj.PosY,Obj.width,Obj.height);
ctx.restore();
}
if(TipodeGema==3){
ctx.save();
var Gemacon = new Image();
Gemacon.src ="Img/Gema3.png";
ctx.drawImage(Gemacon,Obj.PosX,Obj.PosY,Obj.width,Obj.height);
ctx.restore();
}
if(TipodeGema==4){
ctx.save();
var Gemacon = new Image();
Gemacon.src ="Img/Gema4.png";
ctx.drawImage(Gemacon,Obj.PosX,Obj.PosY,Obj.width,Obj.height);
ctx.restore();
}
if(TipodeGema==5){
ctx.save();
var Gemacon = new Image();
Gemacon.src ="Img/Gema5.png";
ctx.drawImage(Gemacon,Obj.PosX,Obj.PosY,Obj.width,Obj.height);
ctx.restore();
}
if(TipodeGema==6){
ctx.save();
var Gemacon = new Image();
Gemacon.src ="Img/Gema6.png";
ctx.drawImage(Gemacon,Obj.PosX,Obj.PosY,Obj.width,Obj.height);
ctx.restore();
}
if(FracmentoGemas==true){
ctx.save();
var Gemacon = new Image();
Gemacon.src ="Img/fracmentos.png";
ctx.drawImage(Gemacon,Obj.PosX,Obj.PosY,Obj.width,Obj.height);
ctx.restore();
}

}

}
}
/////SECUENCIAS DE LAS GEMAS INFERIORES
function cambio_Gema(){

switch(Cambiosecuencia) {

case 1:

                                if(CambiodeGema==1){

                                 GEMA1.PosCX1=GX1;
                                 GEMA2.PosCX2=GX2;
                                 GEMA3.PosCX3=GX3;
                                 GEMA4.PosCX4=GX4;
                                 GEMA5.PosCX5=GX5;
                                 GEMA6.PosCX6=GX6;
								 ////capa-coli
								 if(CapaColision==true){
								ColiGEMA1.CPosCX1=cGX1;
								ColiGEMA2.CPosCX2=cGX2;
								ColiGEMA3.CPosCX3=cGX3;
								ColiGEMA4.CPosCX4=cGX4;
								ColiGEMA5.CPosCX5=cGX5;
								ColiGEMA6.CPosCX6=cGX6;
								 }
									
                                }

                                if(CambiodeGema==2){

                                 GEMA1.PosCX1=GX2;
                                 GEMA2.PosCX2=GX5;
                                 GEMA3.PosCX3=GX3;
                                 GEMA4.PosCX4=GX1;
                                 GEMA5.PosCX5=GX4;
                                 GEMA6.PosCX6=GX6;
								  ////capa-coli
								   if(CapaColision==true){
								ColiGEMA1.CPosCX1=cGX2;
								ColiGEMA2.CPosCX2=cGX5;
								ColiGEMA3.CPosCX3=cGX3;
								ColiGEMA4.CPosCX4=cGX1;
								ColiGEMA5.CPosCX5=cGX4;
								ColiGEMA6.CPosCX6=cGX6;
								   }
                                }

                                if(CambiodeGema==3){

								 GEMA1.PosCX1=GX4;
                                 GEMA2.PosCX2=GX6;
                                 GEMA3.PosCX3=GX2;
                                 GEMA4.PosCX4=GX3;
                                 GEMA5.PosCX5=GX5;
                                 GEMA6.PosCX6=GX1;
								  if(CapaColision==true){
								  ////capa-coli
								ColiGEMA1.CPosCX1=cGX4;
								ColiGEMA2.CPosCX2=cGX6;
								ColiGEMA3.CPosCX3=cGX2;
								ColiGEMA4.CPosCX4=cGX3;
								ColiGEMA5.CPosCX5=cGX5;
								ColiGEMA6.CPosCX6=cGX1;
								  }
                                }

                                if(CambiodeGema==4){
								GEMA1.PosCX1=GX2;
                                 GEMA2.PosCX2=GX5;
                                 GEMA3.PosCX3=GX3;
                                 GEMA4.PosCX4=GX1;
                                 GEMA5.PosCX5=GX4;
                                 GEMA6.PosCX6=GX6;
								  if(CapaColision==true){
								  ////capa-coli
								ColiGEMA1.CPosCX1=cGX2;
								ColiGEMA2.CPosCX2=cGX5;
								ColiGEMA3.CPosCX3=cGX3;
								ColiGEMA4.CPosCX4=cGX1;
								ColiGEMA5.CPosCX5=cGX4;
								ColiGEMA6.CPosCX6=cGX6;
								  }
								
								
                                }

                                if(CambiodeGema==5){

                                  GEMA1.PosCX1=GX4;
                                 GEMA2.PosCX2=GX1;
                                 GEMA3.PosCX3=GX2;
                                 GEMA4.PosCX4=GX5;
                                 GEMA5.PosCX5=GX6;
                                 GEMA6.PosCX6=GX3;
								 if(CapaColision==true){
								  ////capa-coli
								ColiGEMA1.CPosCX1=cGX4;
								ColiGEMA2.CPosCX2=cGX1;
								ColiGEMA3.CPosCX3=cGX2;
								ColiGEMA4.CPosCX4=cGX5;
								ColiGEMA5.CPosCX5=cGX6;
								ColiGEMA6.CPosCX6=cGX3;
								 }
                                }

                 break;

case 2:
                                if(CambiodeGema==1){

                                 GEMA1.PosCX1=GX3;
                                 GEMA2.PosCX2=GX2;
                                 GEMA3.PosCX3=GX1;
                                 GEMA4.PosCX4=GX4;
                                 GEMA5.PosCX5=GX5;
                                 GEMA6.PosCX6=GX6;
								  if(CapaColision==true){
								  ////capa-coli
								ColiGEMA1.CPosCX1=cGX3;
								ColiGEMA2.CPosCX2=cGX2;
								ColiGEMA3.CPosCX3=cGX1;
								ColiGEMA4.CPosCX4=cGX4;
								ColiGEMA5.CPosCX5=cGX5;
								ColiGEMA6.CPosCX6=cGX6;
								  }
                                }

                                if(CambiodeGema==2){

								 GEMA1.PosCX1=GX4;
                                 GEMA2.PosCX2=GX6;
                                 GEMA3.PosCX3=GX2;
                                 GEMA4.PosCX4=GX5;
                                 GEMA5.PosCX5=GX3;
                                 GEMA6.PosCX6=GX1;
								  ////capa-coli
								   if(CapaColision==true){
								ColiGEMA1.CPosCX1=cGX4;
								ColiGEMA2.CPosCX2=cGX6;
								ColiGEMA3.CPosCX3=cGX2;
								ColiGEMA4.CPosCX4=cGX5;
								ColiGEMA5.CPosCX5=cGX3;
								ColiGEMA6.CPosCX6=cGX1;
								}
                              
                                }

                                if(CambiodeGema==3){

                                 GEMA1.PosCX1=GX2;
                                 GEMA2.PosCX2=GX5;
                                 GEMA3.PosCX3=GX3;
                                 GEMA4.PosCX4=GX1;
                                 GEMA5.PosCX5=GX4;
                                 GEMA6.PosCX6=GX6;
								  if(CapaColision==true){
								  ////capa-coli
								ColiGEMA1.CPosCX1=cGX2;
								ColiGEMA2.CPosCX2=cGX5;
								ColiGEMA3.CPosCX3=cGX3;
								ColiGEMA4.CPosCX4=cGX1;
								ColiGEMA5.CPosCX5=cGX4;
								ColiGEMA6.CPosCX6=cGX6;
								  }
                                }

                                if(CambiodeGema==4){

                                 GEMA1.PosCX1=GX3;
                                 GEMA2.PosCX2=GX2;
                                 GEMA3.PosCX3=GX1;
                                 GEMA4.PosCX4=GX4;
                                 GEMA5.PosCX5=GX5;
                                 GEMA6.PosCX6=GX6;
								  if(CapaColision==true){
								  ////capa-coli
								ColiGEMA1.CPosCX1=cGX3;
								ColiGEMA2.CPosCX2=cGX2;
								ColiGEMA3.CPosCX3=cGX1;
								ColiGEMA4.CPosCX4=cGX4;
								ColiGEMA5.CPosCX5=cGX5;
								ColiGEMA6.CPosCX6=cGX6;
								  }
								
                                }

                                if(CambiodeGema==5){

                                 GEMA1.PosCX1=GX1;
                                 GEMA2.PosCX2=GX3;
                                 GEMA3.PosCX3=GX5;
                                 GEMA4.PosCX4=GX2;
                                 GEMA5.PosCX5=GX4;
                                 GEMA6.PosCX6=GX6;
								  if(CapaColision==true){
								  ////capa-coli
								ColiGEMA1.CPosCX1=cGX1;
								ColiGEMA2.CPosCX2=cGX3;
								ColiGEMA3.CPosCX3=cGX5;
								ColiGEMA4.CPosCX4=cGX2;
								ColiGEMA5.CPosCX5=cGX4;
								ColiGEMA6.CPosCX6=cGX6;
								  }
                                }
                               
break;
case 3:

                if(CambiodeGema==1){
								GEMA1.PosCX1=GX2;
                                 GEMA2.PosCX2=GX1;
                                 GEMA3.PosCX3=GX5;
                                 GEMA4.PosCX4=GX4;
                                 GEMA5.PosCX5=GX6;
                                 GEMA6.PosCX6=GX3;
                               	////capa-coli
								 if(CapaColision==true){
								ColiGEMA1.CPosCX1=cGX1;
								ColiGEMA2.CPosCX2=cGX2;
								ColiGEMA3.CPosCX3=cGX3;
								ColiGEMA4.CPosCX4=cGX4;
								ColiGEMA5.CPosCX5=cGX5;
								ColiGEMA6.CPosCX6=cGX6;
								 }
								
                                }

                                if(CambiodeGema==2){
								GEMA1.PosCX1=GX2;
                                 GEMA2.PosCX2=GX1;
                                 GEMA3.PosCX3=GX4;
                                 GEMA4.PosCX4=GX3;
                                 GEMA5.PosCX5=GX6;
                                 GEMA6.PosCX6=GX5;
								  if(CapaColision==true){
								  ////capa-coli
								ColiGEMA1.CPosCX1=cGX2;
								ColiGEMA2.CPosCX2=cGX1;
								ColiGEMA3.CPosCX3=cGX4;
								ColiGEMA4.CPosCX4=cGX3;
								ColiGEMA5.CPosCX5=cGX6;
								ColiGEMA6.CPosCX6=cGX5;
								  }
                                 
								 
                                }

                                if(CambiodeGema==3){

                                 GEMA1.PosCX1=GX5;
                                 GEMA2.PosCX2=GX2;
                                 GEMA3.PosCX3=GX1;
                                 GEMA4.PosCX4=GX3;
                                 GEMA5.PosCX5=GX4;
                                 GEMA6.PosCX6=GX6;
								  if(CapaColision==true){
								  ////capa-coli
								ColiGEMA1.CPosCX1=cGX5;
								ColiGEMA2.CPosCX2=cGX2;
								ColiGEMA3.CPosCX3=cGX1;
								ColiGEMA4.CPosCX4=cGX3;
								ColiGEMA5.CPosCX5=cGX4;
								ColiGEMA6.CPosCX6=cGX6;
								  }
                                }

                                if(CambiodeGema==4){

                                 GEMA1.PosCX1=GX2;
                                 GEMA2.PosCX2=GX1;
                                 GEMA3.PosCX3=GX4;
                                 GEMA4.PosCX4=GX5;
                                 GEMA5.PosCX5=GX6;
                                 GEMA6.PosCX6=GX3;
								  if(CapaColision==true){
								  ////capa-coli
								ColiGEMA1.CPosCX1=cGX2;
								ColiGEMA2.CPosCX2=cGX1;
								ColiGEMA3.CPosCX3=cGX4;
								ColiGEMA4.CPosCX4=cGX5;
								ColiGEMA5.CPosCX5=cGX6;
								ColiGEMA6.CPosCX6=cGX3;
								  }
                                }

                                if(CambiodeGema==5){

                                 GEMA1.PosCX1=GX2;
                                 GEMA2.PosCX2=GX1;
                                 GEMA3.PosCX3=GX3;
                                 GEMA4.PosCX4=GX6;
                                 GEMA5.PosCX5=GX5;
                                 GEMA6.PosCX6=GX4
								  if(CapaColision==true){
								  ////capa-coli
								ColiGEMA1.CPosCX1=cGX2;
								ColiGEMA2.CPosCX2=cGX1;
								ColiGEMA3.CPosCX3=cGX3;
								ColiGEMA4.CPosCX4=cGX6;
								ColiGEMA5.CPosCX5=cGX5;
								ColiGEMA6.CPosCX6=cGX4;
								  }
								 
                                }
                                
break;
case 4:
							if(CambiodeGema==1){

                                 GEMA1.PosCX1=GX2;
                                 GEMA2.PosCX2=GX1;
                                 GEMA3.PosCX3=GX5;
                                 GEMA4.PosCX4=GX3;
                                 GEMA5.PosCX5=GX4;
                                 GEMA6.PosCX6=GX6;
								  if(CapaColision==true){
								 	  ////capa-coli
									  
								ColiGEMA1.CPosCX1=cGX2;
								ColiGEMA2.CPosCX2=cGX1;
								ColiGEMA3.CPosCX3=cGX5;
								ColiGEMA4.CPosCX4=cGX3;
								ColiGEMA5.CPosCX5=cGX4;
								ColiGEMA6.CPosCX6=cGX6;
								  }
                                }

                                if(CambiodeGema==2){
								GEMA1.PosCX1=GX3;
                                 GEMA2.PosCX2=GX2;
                                 GEMA3.PosCX3=GX1;
                                 GEMA4.PosCX4=GX4;
                                 GEMA5.PosCX5=GX5;
                                 GEMA6.PosCX6=GX6;
								 	  ////capa-coli
									   if(CapaColision==true){
								ColiGEMA1.CPosCX1=cGX3;
								ColiGEMA2.CPosCX2=cGX2;
								ColiGEMA3.CPosCX3=cGX1;
								ColiGEMA4.CPosCX4=cGX4;
								ColiGEMA5.CPosCX5=cGX5;
								ColiGEMA6.CPosCX6=cGX6;
									   }
                                }

                                if(CambiodeGema==3){

                               GEMA1.PosCX1=GX2;
                                 GEMA2.PosCX2=GX1;
                                 GEMA3.PosCX3=GX3;
                                 GEMA4.PosCX4=GX6;
                                 GEMA5.PosCX5=GX5;
                                 GEMA6.PosCX6=GX4;
								 	  ////capa-coli
									   if(CapaColision==true){
								ColiGEMA1.CPosCX1=cGX2;
								ColiGEMA2.CPosCX2=cGX1;
								ColiGEMA3.CPosCX3=cGX3;
								ColiGEMA4.CPosCX4=cGX6;
								ColiGEMA5.CPosCX5=cGX5;
								ColiGEMA6.CPosCX6=cGX4;
									   }
                                }

                                if(CambiodeGema==4){

                                GEMA1.PosCX1=GX4;
                                 GEMA2.PosCX2=GX3;
                                 GEMA3.PosCX3=GX6;
                                 GEMA4.PosCX4=GX5;
                                 GEMA5.PosCX5=GX2;
                                 GEMA6.PosCX6=GX1;
								 	  ////capa-coli
									   if(CapaColision==true){
								ColiGEMA1.CPosCX1=cGX4;
								ColiGEMA2.CPosCX2=cGX3;
								ColiGEMA3.CPosCX3=cGX6;
								ColiGEMA4.CPosCX4=cGX5;
								ColiGEMA5.CPosCX5=cGX2;
								ColiGEMA6.CPosCX6=cGX1;
									   }
                                }

                                if(CambiodeGema==5){

                                 GEMA1.PosCX1=GX2;
                                 GEMA2.PosCX2=GX3;
                                 GEMA3.PosCX3=GX5;
                                 GEMA4.PosCX4=GX6;
                                 GEMA5.PosCX5=GX4;
                                 GEMA6.PosCX6=GX1;
								  if(CapaColision==true){
								 	  ////capa-coli
								ColiGEMA1.CPosCX1=cGX2;
								ColiGEMA2.CPosCX2=cGX3;
								ColiGEMA3.CPosCX3=cGX5;
								ColiGEMA4.CPosCX4=cGX6;
								ColiGEMA5.CPosCX5=cGX4;
								ColiGEMA6.CPosCX6=cGX1;
								  }
                                }
                               
break;
case 5:
                        if(CambiodeGema==1){

                                 GEMA1.PosCX1=GX5;
                                 GEMA2.PosCX2=GX3;
                                 GEMA3.PosCX3=GX6;
                                 GEMA4.PosCX4=GX4;
                                 GEMA5.PosCX5=GX2;
                                 GEMA6.PosCX6=GX1;
								  if(CapaColision==true){
								 	  ////capa-coli
								ColiGEMA1.CPosCX1=cGX5;
								ColiGEMA2.CPosCX2=cGX3;
								ColiGEMA3.CPosCX3=cGX6;
								ColiGEMA4.CPosCX4=cGX4;
								ColiGEMA5.CPosCX5=cGX2;
								ColiGEMA6.CPosCX6=cGX1;
								  }
                                }

                                if(CambiodeGema==2){

                               GEMA1.PosCX1=GX5;
                                 GEMA2.PosCX2=GX3;
                                 GEMA3.PosCX3=GX6;
                                 GEMA4.PosCX4=GX2;
                                 GEMA5.PosCX5=GX4;
                                 GEMA6.PosCX6=GX1;
								  if(CapaColision==true){
								 	  ////capa-coli
								ColiGEMA1.CPosCX1=cGX5;
								ColiGEMA2.CPosCX2=cGX3;
								ColiGEMA3.CPosCX3=cGX6;
								ColiGEMA4.CPosCX4=cGX2;
								ColiGEMA5.CPosCX5=cGX4;
								ColiGEMA6.CPosCX6=cGX1;
								  }
                                }

                                if(CambiodeGema==3){

                                 GEMA1.PosCX1=GX5;
                                 GEMA2.PosCX2=GX3;
                                 GEMA3.PosCX3=GX2;
                                 GEMA4.PosCX4=GX1;
                                 GEMA5.PosCX5=GX4;
                                 GEMA6.PosCX6=GX6;
								  if(CapaColision==true){
								 	  ////capa-coli
								ColiGEMA1.CPosCX1=cGX5;
								ColiGEMA2.CPosCX2=cGX3;
								ColiGEMA3.CPosCX3=cGX2;
								ColiGEMA4.CPosCX4=cGX1;
								ColiGEMA5.CPosCX5=cGX4;
								ColiGEMA6.CPosCX6=cGX6;
								  }
                                }

                                if(CambiodeGema==4){
								GEMA1.PosCX1=GX5;
                                 GEMA2.PosCX2=GX3;
                                 GEMA3.PosCX3=GX2;
                                 GEMA4.PosCX4=GX4;
                                 GEMA5.PosCX5=GX6;
                                 GEMA6.PosCX6=GX1;
								  if(CapaColision==true){
								 	  ////capa-coli
								ColiGEMA1.CPosCX1=cGX5;
								ColiGEMA2.CPosCX2=cGX3;
								ColiGEMA3.CPosCX3=cGX2;
								ColiGEMA4.CPosCX4=cGX4;
								ColiGEMA5.CPosCX5=cGX6;
								ColiGEMA6.CPosCX6=cGX1;
								  }
                                
                                }

                                if(CambiodeGema==5){

								GEMA1.PosCX1=GX6;
                                 GEMA2.PosCX2=GX3;
                                 GEMA3.PosCX3=GX5;
                                 GEMA4.PosCX4=GX2;
                                 GEMA5.PosCX5=GX4;
                                 GEMA6.PosCX6=GX1;
								  if(CapaColision==true){
								 	  ////capa-coli
								ColiGEMA1.CPosCX1=cGX6;
								ColiGEMA2.CPosCX2=cGX3;
								ColiGEMA3.CPosCX3=cGX5;
								ColiGEMA4.CPosCX4=cGX2;
								ColiGEMA5.CPosCX5=cGX4;
								ColiGEMA6.CPosCX6=cGX1;
								  }
								
                                 
                                }
                               
break;
case 6:
                                if(CambiodeGema==1){

                                 GEMA1.PosCX1=GX5;
                                 GEMA2.PosCX2=GX6;
                                 GEMA3.PosCX3=GX3;
                                 GEMA4.PosCX4=GX4;
                                 GEMA5.PosCX5=GX2;
                                 GEMA6.PosCX6=GX1;
								  if(CapaColision==true){
								 	  ////capa-coli
								ColiGEMA1.CPosCX1=cGX5;
								ColiGEMA2.CPosCX2=cGX6;
								ColiGEMA3.CPosCX3=cGX3;
								ColiGEMA4.CPosCX4=cGX4;
								ColiGEMA5.CPosCX5=cGX2;
								ColiGEMA6.CPosCX6=cGX1;
								  }
								 
                                }

                                if(CambiodeGema==2){

                                 GEMA1.PosCX1=GX3;
                                 GEMA2.PosCX2=GX2;
                                 GEMA3.PosCX3=GX1;
                                 GEMA4.PosCX4=GX4;
                                 GEMA5.PosCX5=GX6;
                                 GEMA6.PosCX6=GX5;
								 	  ////capa-coli
									   if(CapaColision==true){
								ColiGEMA1.CPosCX1=cGX3;
								ColiGEMA2.CPosCX2=cGX2;
								ColiGEMA3.CPosCX3=cGX1;
								ColiGEMA4.CPosCX4=cGX4;
								ColiGEMA5.CPosCX5=cGX6;
								ColiGEMA6.CPosCX6=cGX5;
									   }
								 
                                }

                                if(CambiodeGema==3){

								 GEMA1.PosCX1=GX2;
                                 GEMA2.PosCX2=GX1;
                                 GEMA3.PosCX3=GX3;
                                 GEMA4.PosCX4=GX5;
                                 GEMA5.PosCX5=GX6;
                                 GEMA6.PosCX6=GX4;
								  if(CapaColision==true){
								 	  ////capa-coli
								ColiGEMA1.CPosCX1=cGX2;
								ColiGEMA2.CPosCX2=cGX1;
								ColiGEMA3.CPosCX3=cGX3;
								ColiGEMA4.CPosCX4=cGX5;
								ColiGEMA5.CPosCX5=cGX6;
								ColiGEMA6.CPosCX6=cGX4;
								  }
                                }

                                if(CambiodeGema==4){

                                GEMA1.PosCX1=GX3;
                                 GEMA2.PosCX2=GX2;
                                 GEMA3.PosCX3=GX1;
                                 GEMA4.PosCX4=GX6;
                                 GEMA5.PosCX5=GX5;
                                 GEMA6.PosCX6=GX4;
								  if(CapaColision==true){
								 	  ////capa-coli
								ColiGEMA1.CPosCX1=cGX3;
								ColiGEMA2.CPosCX2=cGX2;
								ColiGEMA3.CPosCX3=cGX1;
								ColiGEMA4.CPosCX4=cGX6;
								ColiGEMA5.CPosCX5=cGX5;
								ColiGEMA6.CPosCX6=cGX4;
								  }
								
                                }

                                if(CambiodeGema==5){

                                 GEMA1.PosCX1=GX2;
                                 GEMA2.PosCX2=GX1;
                                 GEMA3.PosCX3=GX3;
                                 GEMA4.PosCX4=GX4;
                                 GEMA5.PosCX5=GX5;
                                 GEMA6.PosCX6=GX6;
								  if(CapaColision==true){
								 	  ////capa-coli
								ColiGEMA1.CPosCX1=cGX2;
								ColiGEMA2.CPosCX2=cGX1;
								ColiGEMA3.CPosCX3=cGX3;
								ColiGEMA4.CPosCX4=cGX4;
								ColiGEMA5.CPosCX5=cGX5;
								ColiGEMA6.CPosCX6=cGX6;
								  }
								 
                                }
                              
break;
default:

break;

}

        }

		
function GemasInferior(){
					if(AnimacionAciva==true){
					 if(CapaColision==true){	
				// blue		
ctx.save();
ctx.fillStyle="rgba(258,0,255,0)";
ctx.fillRect(ColiGEMA1.CPosCX1,ColiGEMA1.CPosCY1,ColiGEMA1.width,ColiGEMA1.height);
ctx.restore();
// red
ctx.save();
ctx.fillStyle="rgba(258,0,255,0)";
ctx.fillRect(ColiGEMA2.CPosCX2,ColiGEMA2.CPosCY2,ColiGEMA2.width,ColiGEMA2.height);
ctx.restore();
// green
ctx.save();
ctx.fillStyle="rgba(258,0,255,0)";
ctx.fillRect(ColiGEMA3.CPosCX3,ColiGEMA3.CPosCY3,ColiGEMA3.width,ColiGEMA3.height);
ctx.restore();
// yellow
ctx.save();
ctx.fillStyle="rgba(258,0,255,0)";
ctx.fillRect(ColiGEMA4.CPosCX4,ColiGEMA4.CPosCY4,ColiGEMA4.width,ColiGEMA4.height);
ctx.restore();
// grey
ctx.save();
ctx.fillStyle="rgba(258,0,255,0)";
ctx.fillRect(ColiGEMA5.CPosCX5,ColiGEMA5.CPosCY5,ColiGEMA5.width,ColiGEMA5.height);
ctx.restore();
// black
ctx.save();
ctx.fillStyle="rgba(258,0,255,0)";
ctx.fillRect(ColiGEMA6.CPosCX6,ColiGEMA6.CPosCY6,ColiGEMA6.width,ColiGEMA6.height);
ctx.restore();
					 }
					 
/////////////////////////////////////GEMAS INFERIOR
ctx.save();
var Gema1 = new Image();
Gema1.src ="Img/Gema1.png";
ctx.drawImage(Gema1,GEMA1.PosCX1,GEMA1.PosCY1,GEMA1.width,GEMA1.height);
ctx.restore();

ctx.save();
var Gema2 = new Image();
Gema2.src ="Img/Gema2.png";
ctx.drawImage(Gema2,GEMA2.PosCX2,GEMA2.PosCY2,GEMA2.width,GEMA2.height);
ctx.restore();

ctx.save();
var Gema3 = new Image();
Gema3.src ="Img/Gema3.png";
ctx.drawImage(Gema3,GEMA3.PosCX3,GEMA3.PosCY3,GEMA3.width,GEMA3.height);
ctx.restore();

ctx.save();
var Gema4 = new Image();
Gema4.src ="Img/Gema4.png";
ctx.drawImage(Gema4,GEMA4.PosCX4,GEMA4.PosCY4,GEMA4.width,GEMA4.height);
ctx.restore();
 
ctx.save();
var Gema5 = new Image();
Gema5.src ="Img/Gema5.png";
ctx.drawImage(Gema5,GEMA5.PosCX5,GEMA5.PosCY5,GEMA5.width,GEMA5.height);
ctx.restore();


ctx.save();
var Gema6 = new Image();
Gema6.src ="Img/Gema6.png";
ctx.drawImage(Gema6,GEMA6.PosCX6,GEMA6.PosCY6,GEMA6.width,GEMA6.height);
ctx.restore();


}

}
/*Seccion de juego*/






function probabilidad(){
if(Obj.draw==false && Math.floor(Math.random()*1+1)<3){
Obj.PosX=Math.floor(Math.random()*(canvas.width-Obj.width));
Obj.draw=true;
 
}
}

//////////////////////////////////
function colision_borde(){
if (Obj.PosX < limite1) Obj.PosX  = limite1;
if (Obj.PosX+Obj.width > limite2) Obj.PosX  = limite2-Obj.width;
}



function colision_obj(){

// ColiGEMA1.CPosCX1,ColiGEMA1.CPosCY1,ColiGEMA1.width,ColiGEMA1.height

if(Colision==1 && TipodeGema==1){

if ( ((Obj.PosX+50+CapachoqueOBJ.width) > ColiGEMA1.CPosCX1)  && 
 
(Obj.PosX+50 < (ColiGEMA1.CPosCX1+ColiGEMA1.width)) ) {
	
if ( ((ColiGEMA1.CPosCY1+ColiGEMA1.height) > Obj.PosY)  &&  

(ColiGEMA1.CPosCY1 < (Obj.PosY+CapachoqueOBJ.height)) ) {
	
FracmentoGemas=false;	
Obj.draw=false;
Obj.PosY=0;
Ciclo_de_Obj+=1;
if(PTS<=100000){
PTS+=1;		
}

COntrolsecuencia+=1;
Obj.PosY=0;
if(EstadoSonido==true){
audioPICO.play();
}
ControlSecuencia+=1;
AnimacionVIDA+=1;

	
				
			
				
                                }
                                 }
                }


if(Colision==2 && TipodeGema==2){
	
if ( ((Obj.PosX+50+CapachoqueOBJ.width) > ColiGEMA2.CPosCX2)  && 
 
(Obj.PosX+50 < (ColiGEMA2.CPosCX2+ColiGEMA2.width)) ) {
	
if ( ((ColiGEMA2.CPosCY2+ColiGEMA2.height) > Obj.PosY)  &&  

(ColiGEMA2.CPosCY2 < (Obj.PosY+CapachoqueOBJ.height)) ) {
	
	
	
	FracmentoGemas=false;
Obj.draw=false;
if(EstadoSonido==true){
audioPICO.play();
}

COntrolsecuencia+=1;
Obj.PosY=0;
Ciclo_de_Obj+=1;
if(PTS<=100000){
PTS+=1;		
}	
Obj.PosY=0;		
ControlSecuencia+=1;
AnimacionVIDA+=1;

	
				  
				  
				  
                }
                }

}



if(Colision==3 && TipodeGema==3){

if ( ((Obj.PosX+50+CapachoqueOBJ.width) > ColiGEMA3.CPosCX3)  && 
 
(Obj.PosX+50 < (ColiGEMA3.CPosCX3+ColiGEMA3.width)) ) {
	
if ( ((ColiGEMA3.CPosCY3+ColiGEMA3.height) > Obj.PosY)  &&  

(ColiGEMA3.CPosCY3 < (Obj.PosY+CapachoqueOBJ.height)) ) {
	



	 
	 FracmentoGemas=false;      
           Obj.draw=false;    

		   COntrolsecuencia+=1;
Ciclo_de_Obj+=1;
	if(PTS<=100000){
PTS+=1;		
}	
Obj.PosY=0;	
if(EstadoSonido==true){
audioPICO.play();
}
ControlSecuencia+=1;
	  AnimacionVIDA+=1;
	 
	
				}
				
				
                }


}

if(Colision==4 && TipodeGema==4){
	
	
if ( ((Obj.PosX+50+CapachoqueOBJ.width) > ColiGEMA4.CPosCX4)  && 
 
(Obj.PosX+50 < (ColiGEMA4.CPosCX4+ColiGEMA4.width)) ) {
	
if ( ((ColiGEMA4.CPosCY4+ColiGEMA4.height) > Obj.PosY)  &&  

(ColiGEMA4.CPosCY4 < (Obj.PosY+CapachoqueOBJ.height)) ) {
	
	



	 FracmentoGemas=false;
     Obj.draw=false;
	  Ciclo_de_Obj+=1;
	if(PTS<=100000){
PTS+=1;		
}
COntrolsecuencia+=1;
	 Obj.PosY=0;
if(EstadoSonido==true){
audioPICO.play();
}
ControlSecuencia+=1;
	  AnimacionVIDA+=1;
	 
	
                }
                }

}
if(Colision==5 && TipodeGema==5){

if ( ((Obj.PosX+50+CapachoqueOBJ.width) > ColiGEMA5.CPosCX5)  && 
 
(Obj.PosX+50 < (ColiGEMA5.CPosCX5+ColiGEMA5.width)) ) {
	
if ( ((ColiGEMA5.CPosCY5+ColiGEMA5.height) > Obj.PosY)  &&  

(ColiGEMA5.CPosCY5 < (Obj.PosY+CapachoqueOBJ.height)) ) {
	



	 FracmentoGemas=false; 
 Obj.draw=false;      
Ciclo_de_Obj+=1;
Obj.PosY=0;
if(PTS<=100000){
PTS+=1;		
}
COntrolsecuencia+=1;
if(EstadoSonido==true){
audioPICO.play();
}
ControlSecuencia+=1;
	  AnimacionVIDA+=1;
	
	
                }
                }


}

if(Colision==6 && TipodeGema==6){


if ( ((Obj.PosX+50+CapachoqueOBJ.width) > ColiGEMA6.CPosCX6)  && 
 
(Obj.PosX+50 < (ColiGEMA6.CPosCX6+ColiGEMA6.width)) ) {
	
if ( ((ColiGEMA6.CPosCY6+ColiGEMA6.height) > Obj.PosY)  &&  

(ColiGEMA6.CPosCY6 < (Obj.PosY+CapachoqueOBJ.height)) ) {
	


	FracmentoGemas=false;
	  Obj.draw=false;
Obj.PosY=0;
	 Ciclo_de_Obj+=1;
if(PTS<=100000){
PTS+=1;		
}
COntrolsecuencia+=1;
if(EstadoSonido==true){
 audioPICO.play();
}
ControlSecuencia+=1;
	  AnimacionVIDA+=1;
	 


                }
                }



}



}//colisionObjeto
function barrachoque2Colision(){



if ( ((Obj.PosX+50+CapachoqueOBJ.width) > Choquebarra2.PosBX)  && 
 (Obj.PosX+50 < (Choquebarra2.PosBX+Choquebarra2.width)) ) {
if ( ((Choquebarra2.PosBY+Choquebarra2.height) > Obj.PosY)  &&  
(Choquebarra2.PosBY < (Obj.PosY+CapachoqueOBJ.height)) ) {
	 FracmentoGemas=true;
	 
	
	  
	  
                           }          }  

}

function barrachoqueColision(){




if ( ((Obj.PosX+50+CapachoqueOBJ.width) > Choquebarra.PosBX)  &&
 (Obj.PosX+50 < (Choquebarra.PosBX+Choquebarra.width))	) {
if ( ((Choquebarra.PosBY+Choquebarra.height) > Obj.PosY)  &&
 (Choquebarra.PosBY < (Obj.PosY+CapachoqueOBJ.height)) ) {
					FracmentoGemas=false;	
Ciclo_de_Obj+=1;					
					Obj.draw=false;
					Obj.PosY=0;
					Vida-=1;
					Derum.PosY=0;
					animacionDerrumbe=1;
					if(PTS>=1){
					PTS-=1;
				 }

 if(EstadoSonido==true){
audioDERUMBE.play(); 

 }
 
 
 
                                }
                                 }
								 
							
}

function derumb(){
			if(animacionDerrumbe==1  && Pause==false){
			
					ctx.save();
					ctx.fillStyle="#5c3566";
					var Derumbefondo = new Image();
					Derumbefondo .src ="Img/DERRUMBE.png";
					ctx.drawImage(Derumbefondo,Derum.PosX, Derum.PosY, Derum.width, Derum.height);
					ctx.restore();
					
				
					Derum.PosY+=30;

			}
	
}

function Vida_jugador(){

				if(Vida==0 && NuevoDiamante!=9){     
				 
	PTS=0;


Vida=3;	
 TipodeSecuencia=1;
 Ciclo_de_Obj=1;
ControlSecuencia=0;
AnimacionVIDA=0;
animacionFondo=0;
NuevoDiamante=0;
cicloFondo=1;

//AGRGEGAR A COLISION
					 }
					 else
						 	if(Vida==0 && NuevoDiamante==9){     
				 
	PTS=0;


Vida=3;	
TipodeSecuencia=1;
Ciclo_de_Obj=1;
ControlSecuencia=0;
AnimacionVIDA=0;
animacionFondo=0;
NuevoDiamante=0;
cicloFondo=1;
 SelecaIdioma=true;
 AnimacionAciva=true;

//AGRGEGAR A COLISION
					 }
					
				


}


function animacionVida(){
	if(AnimacionAciva==true && Pause==false){
		
			if(AnimacionAciva==true){
			if (AnimacionVIDA>9){
			AnimacionVIDA=0;
			Vida+=1;//Agrega una nueva vida
			}
			
			if(Vida==5){
			AnimacionVIDA=0
			Vida==5;}	 

			var x=-40;
			
			if(Vida<=5){
					for (var i=0; i<Vida; i++){
						x+=40;
						ctx.save();
						var vidaimg = new Image();
						vidaimg.src ="Img/VIDA.png";
						ctx.drawImage(vidaimg,x,10,60,40);
						ctx.restore(); 
					}
			}
			}
			
	}
}
// AnimacionDiamante
function AnimacionDiamante(){
	
	
		if(AnimacionAciva==true && Pause==false){
		var d=X-95;
			
			if(NuevoDiamante<=9){
					for (var i=0; i<NuevoDiamante; i++){
						d+=55;
				ctx.save();
				var Diamant= new Image();
				Diamant.src ="Img/DIAMANTE.png";
				ctx.drawImage(Diamant,d,-10,150,87);
				ctx.restore();
					}
			}
	
		}
		for (var i=0; i<9; i++){
						d+=55;
				ctx.save();
				var Diamant= new Image();
				Diamant.src ="Img/DIAMANTEF.png";
				ctx.drawImage(Diamant,d,-10,150,87);
				ctx.restore();
					}
	
}




function Mover(){

if(Pause==false){
    if(Escena==2 && TIEMPOGEMACAIDA<10){
		TIEMPOGEMACAIDA++;
	}
	if(Escena==2 && TIEMPOGEMACAIDA==10){
		Obj.PosY+=Vcaida+VelocidadAcelerada;
	}
		   if(AnimacionAciva==true){
			   
					if (teclado[teclaFlechaDerecha]){Obj.PosX -=Velocidad;  	} 	 	
					if (teclado[teclaFlechaIzquierda]){Obj.PosX +=Velocidad;  	}
			
		   }
   
	
}
}
// ///control principal

function Control_Principal(){
if(Pause==false){
					CambiodeGema=Ciclo_de_Obj;
					TipodeGema=Ciclo_de_Obj;
					Colision=Ciclo_de_Obj;
}
	
	if(Ciclo_de_Obj>5){ Ciclo_de_Obj=1;}

if(ControlSecuencia>10){ ControlSecuencia=1; TipodeSecuencia+=1;  } 

if(TipodeSecuencia==10){ Cambiosecuencia=1; }

if(TipodeSecuencia==20){ Cambiosecuencia=2; }

if(TipodeSecuencia==30){ Cambiosecuencia=3; }

if(TipodeSecuencia==40){ Cambiosecuencia=4; }

if(TipodeSecuencia==50){ Cambiosecuencia=5; }

if(TipodeSecuencia==60){ Cambiosecuencia=6; }

if(TipodeSecuencia==70){TipodeSecuencia=1;}


}

var GEMAI= new Array(5);
// GEMAI[0]="Img/Gema1.png";
GEMAI[1]="Img/Gema1.png";
GEMAI[2]="Img/Gema2.png";
GEMAI[3]="Img/Gema3.png";
GEMAI[4]="Img/Gema4.png";
GEMAI[5]="Img/Gema5.png";
GEMAI[6]="Img/Gema6.png";


var aL="";
var aL2="";
var YPUNTOS=0;
var YLetrero=0;
var Xl=0;
var Xl2=0;
var textapart=true;
var tex15="";
var tex16="";
function texto(){
	
	


if(AnimacionAciva==true && Pause==false){
var Gemacon = new Image();
Gemacon.src =GEMAI[TipodeGema];
ctx.drawImage(Gemacon,220,0,86,60);
ctx.restore();

ctx.font = '45px calibri black';
ctx.fillStyle="#BFBFBF";
ctx.fillText(PTS,300,45);
ctx.save();
}

if(AnimacionAciva==false  && Pause==false){
	
		if(idioma=="ENG"){
		tex15="WIN"; tex16="SCORE";

if(animacionFondo==49){ 
 // paso0
YLetrero=Y-130;
 aL="33px calibri black";
Xl=X-35; 

  }
if(animacionFondo==50){ 
// // paso1
textapart=true;

YLetrero=Y-87;
aL="44px calibri black";
Xl=X-40;

if(textapart==true){
			aL2="28px calibri black";
		YPUNTOS=Y-60;
			 Xl2=X-40;
			}
   }
if(animacionFondo==51){  // paso2
YLetrero=Y-70;
aL="50px calibri black";
Xl=X-45;
if(textapart==true){
				aL2="28px calibri black";
				YPUNTOS=Y-23;
				Xl2=X-30;
			}
   }
if(animacionFondo>=52){


	
aL="55px calibri black";
 YLetrero=Y-60;
Xl=X-45;
// finaliza en Y-60;
if(textapart==true){
			aL2="28px calibri black";
			YPUNTOS=Y-23;
			Xl2=X-30;
			}
		
  }	}//cierre de idioma
if(idioma=="ES"){tex15="GANASTE"; tex16="PUNTOS";


if(animacionFondo==49){ 
 // paso0
 
 
YLetrero=Y-130;
aL="33px calibri black";
Xl=X-70; 


  }
if(animacionFondo==50){ 
// // paso1
textapart=true;

 YLetrero=Y-87;
 aL="44px calibri black";
Xl=X-80;

if(textapart==true){
				 aL2="28px calibri black";
				YPUNTOS=Y-60;
				 Xl2=X-50;
			}
   }
if(animacionFondo==51){  // paso2
YLetrero=Y-70;
aL="50px calibri black";
 Xl=X-100;
if(textapart==true){
				 aL2="28px calibri black";
				 YPUNTOS=Y-23;
				 Xl2=X-50;
			}
   }
if(animacionFondo>=52){
  aL="55px calibri black";
 YLetrero=Y-60;
 Xl=X-110;
// finaliza en Y-60;
if(textapart==true){ aL2="28px calibri black";	 YPUNTOS=Y-23; 	 Xl2=X-50;	}
		
  }

}/*letrero de salida en ingles*/

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


		
	

}/*letrero de salida en ingles*/
if(AnimacionAciva==false && animacionFondo==61 && Pause==false){
ctx.save();
ctx.font = '45px calibri black';
ctx.fillStyle="rgb(57,38,0)";
ctx.fillText(PTS,X-16,Y+16);
	ctx.restore();
	
	

	
if(teclado[teclaEnter]  && Escena==2){ Escena=1; Nletrero=1; Tespera=0;

PTS=0;


Vida=3;	
TipodeSecuencia=1;
Ciclo_de_Obj=1;
ControlSecuencia=0;
AnimacionVIDA=0;
animacionFondo=0;
NuevoDiamante=0;
cicloFondo=1;
Tesperaf=0;
 SelecaIdioma=true;
 AnimacionAciva=true;
  EstadoSonido=true;
  
  Pause=false;
 AnimacionAciva=true;


/*VARIABLE*/
/////////////
 derumbe=0;
TipodeGema=1;
CambiodeGema=1;
Cambiosecuencia=1;
Vida=3;
 AnimacionVIDA=0;
Vcaida=10;
Velocidad=30;
Colision=1;
FracmentoGemas=false;
animacionDerrumbe=0;

 animacion=0;
animacionFondo=0;
EstadoAnimaconFondo=0;
pasos=0;
cicloFondo=1;


VelocidadAcelerada=0;
NuevoDiamante=9;
controldeDiamantes=0;
controldeDiamantesEstado=0;


TipodeSecuencia=1;
ControlSecuencia=0;
 Ciclo_de_Obj=1;
colisionconGemas=0;
colisionsinGemas=0;





}

	
	
}//cierre de la funcion 



if(Tesperaf<20 && animacionFondo==61){
		
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
}/*cierre funcion*/

/*
VERIFICAR SECUENTCIA DE GEMAS 

*/

var Tpause=0;
function Pausar(){

if(Tpause<3){
		
Tpause+=1;
	}if(Tpause==3){
Tpause=4;
	}

	if(teclado[teclaEspacio] && Tpause==4 && Escena==2){
		
	if(Pause==true){Pause=false; Tpause=0;}
	else
	if(Pause==false){Pause=true; Tpause=0;}
		
		}
	
	if(Pause==true){
		 // conSonido3=true;
		 // conSonido3=true;
		 if(EstadoSonido==true){
		 audioFondo4.play();
		 }
		 audioZonajuego.pause();
	//////////img
	ctx.save();
	var PA = new Image();
	PA.src ="Img/pause.png";
	ctx.drawImage(PA,0,0,W,H);
	ctx.restore();
	//////////img
	
if(idioma=="ENG"){
			ctx.save();
			ctx.font = '70px calibri black';
			ctx.fillStyle="white";
			ctx.fillText(tex14,X-110,Y);
			ctx.restore();
}
else
if(idioma=="ES"){
					ctx.save();
					ctx.font = '70px calibri black';
					ctx.fillStyle="white";
					ctx.fillText(tex14,X-100,Y);
					ctx.restore();
}
	}
	else{
		audioFondo4.pause();
	}
					
	}
	


