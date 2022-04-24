'use strict'

/*
Muestre la tabla de multiplicar de un número

*/

var numero=parseInt(prompt('Introduzca un numero',0));


document.write('<h1>Tabla del '+numero+'</h1>');


for(let i=1;i<=10;i++){
	document.write(numero+'*'+i+'='+numero*i+'<br/>');
}	

/*
Muestre todas las tabla de multiplicar de un número

*/
for(let c=1;c<=15;c++ ){
	document.write('<h1>Tabla del '+c+'</h1>');
	for(let i=1;i<=10;i++ ){
		document.write(c+'*'+i+'='+c*i+'<br/>');
}	

	}

