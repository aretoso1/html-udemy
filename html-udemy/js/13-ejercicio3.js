'use strict'

/*
Hacer un programa que muestre todos los números
entre dos números introducidos por el usuario */

var numero1=parseInt(prompt("Introduce el primer número",0));
var numero2=parseInt(prompt("Introduce el segundo número",0));

if(numero1<numero2){

document.write("<h1>De "+numero1+" a "+numero2+" están los números:<h1/>")
	for(var i=numero1; i<=numero2;i++){
		document.write(i+"<br/>");
	}

}else if(numero2<numero1){
	document.write("<h1>De "+numero2+" a "+numero1+" están los números:<h1/>")
	for(var i=numero2; i<=numero1;i++){
		document.write(i+"<br/>");
	}

}else{
	document.write("<h1>El "+numero1+" y "+numero2+" son iguales<h1/>")
}

