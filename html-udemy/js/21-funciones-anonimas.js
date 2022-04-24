'use strict'

//Funciones anónimas
//Son aquellas que no tienen nombre

var pelicula= function(nombre){
    return "El nombre de la película es: "+nombre;
}

//Ejemplo de funciones de callback

function sumame(numero1,numero2, sumaYmuestra, dobleDesuma){
    var sumar=numero1+numero2;
    sumaYmuestra(sumar);
    dobleDesuma(sumar);
    return sumar;

}

sumame(5,7,function(dato){
    console.log("La suma es ", dato);
},
function(dato){
    console.log("El doble de la suma es ", (dato*2));
});

//Ejemplo funciones flechas
//Si tiene un parámetro no es necesario los paréntesis, para más parámetros si.

sumame(13,11,dato=>{
    console.log("La suma es ", dato);
},
dato=>{
    console.log("El doble de la suma es ", (dato*2));
});
