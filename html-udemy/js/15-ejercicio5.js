'use strict'

/*

Muestre todos los numeros divisores introducidos en el prompt


*/

var numero= parseInt(prompt('Ingrese un numero'))

for(let i=1;i<=numero;i++){

	while(numero%i==0){
		console.log(i+' es un divisor de '+numero);
		i++;
	}
}