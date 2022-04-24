'use strict'

/*
Muestre los numeros impares y pares introducidos por el usuario

*/

var numero=parseInt(prompt('Introduce un numero',0));


while(isNaN(numero)){
	numero=parseInt(prompt('Introduce un numero',0));


}



if(numero%2==0){
	alert('El '+numero+' es par.');
}else if(numero%2==1){
	alert('El '+numero+' es impar.');
}