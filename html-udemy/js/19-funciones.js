'use strict'

//Funciones

function calculadora(numero1,numero2){
    console.log("Suma "+(numero1+numero2));
    console.log("Resta "+(numero1-numero2));
    console.log("Multiplicación "+(numero1*numero2));
    console.log("División "+(numero1/numero2));
    console.log("******************************");
    //console.log("Hola soy la calculadora");
    //console.log("Soy memito");
    return "Hola soy la calculadora";
}

//console.log(calculadora(),calculadora())
//calculadora();
//calculadora();

var resultado=calculadora(2,5);
console.log(resultado);