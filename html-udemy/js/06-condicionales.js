'use strict'

//Condicionales

//Condicional IF

var edad1=5;
var nombre="Luis";
var edad2=21;

if(edad1>edad2){
	console.log("La edad 1 es mayor que la edad 2")


}else{
	console.log("La edad 1 es inferior que la edad 2")
}

if(edad1>=18){
	console.log(nombre+' '+"tiene"+' '+edad1+' '+ "es mayor de edad");
}else{
	console.log(nombre+' '+"tiene"+' '+edad1+' '+  "es menor de edad");
}

//Operadores lógicos


var year=2021;

//Negacion

if(year !=2021 ){
	console.log("No es el año 2021, realmente estamos en el año"+' '+year);
}else{
	console.log("Estamos en el año 2021");
}

//AND

if(year>=2000 && year<=2022){
	console.log("Estamos en la edad moderna");
}

//OR
 if(year%2==0 || year==2022){
 	console.log("El año es un múltiplo de 2");
 }else{
 	console.log("Es un año impar");
 }


