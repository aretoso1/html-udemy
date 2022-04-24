'use strict'

/*
Mostrar todos los números impares introducidos por el usuario
*/

var numero1= parseInt(prompt("Ingrese un número",0));
var numero2= parseInt(prompt("Ingrese un número",0));





if(numero1<numero2){

	for( let i=numero1; i<=numero2;i++){


		while(i%2==1){
		console.log(i+" es un numero impar");
			i++

	}

	}
		



	}else if(numero2<numero1){

		for(let i=numero2;i<=numero1;i++ ){

			while(i%2==1){


		console.log(i+" es un numero impar");
			i++;

		}	

	}
}else{
	console.log("Escribe dos números diferentes");}