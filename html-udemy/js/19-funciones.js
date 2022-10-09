'use strict'

//Funciones

function PorConsola(numero1,numero2){
        console.log("Suma "+(numero1+numero2));
        console.log("Resta "+(numero1-numero2));
        console.log("Multiplicación "+(numero1*numero2));
        console.log("División "+(numero1/numero2));
        console.log("******************************");

}

function PorPantalla(numero1,numero2){
        document.write("Suma "+(numero1+numero2)+"</br>");
        document.write("Resta "+(numero1-numero2)+"</br>");
        document.write("Multiplicación "+(numero1*numero2)+"</br>");
        document.write("División "+(numero1/numero2)+"</br>");
        document.write("******************************"+"</br>");

}

function calculadora(numero1,numero2, mostrar=false){
    
    if(mostrar==false){
        PorConsola(numero1,numero2)
        //console.log("Hola soy la calculadora");
        //console.log("Soy memito");
        //return "Hola soy la calculadora";
    }else{
        PorPantalla(numero1,numero2)
        
        //console.log("Hola soy la calculadora");
        //console.log("Soy memito");
        //return "Hola soy la calculadora";
    }

    return true
    
    
}

//calculadora(13,17,true);

//console.log(calculadora(),calculadora())
//calculadora();
//calculadora();

//var resultado=calculadora(2,5);
//console.log(resultado);

for(var i=1; i<=10;i++){
    console.log(i);
    calculadora(i,17,true);
}

for(var i=1; i<=10;i++){
    console.log(i);
    calculadora(i,10);
}