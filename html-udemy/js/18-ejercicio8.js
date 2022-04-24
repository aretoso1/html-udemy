'use stric'


var numero1=parseInt(prompt('Ingrese un número',0));

while(isNaN(numero1)){
	numero1=parseInt(prompt('Ingrese un número',0));

}


var numero2=parseInt(prompt('Ingrese otro número',0));

while(isNaN(numero2)){
	numero2=parseInt(prompt('Ingrese otro número',0));


}

var resultado='La suma es:'+(numero1+numero2)+'<br/>'+ 'La multiplicación es: '+(numero1*numero2)+'<br/>'+'La resta es: '+(numero1-numero2)+'<br/>'+'La división es: '+(numero1/numero2);
var resultadoCMD='La suma es:'+(numero1+numero2)+'\n'+ 'La multiplicación es: '+(numero1*numero2)+'\n'+'La resta es: '+(numero1-numero2)+'\n'+'La división es: '+(numero1/numero2);


document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);