'use strict'

//JSON-- Javascript Object Notation

var conferencia={
    titulo:"Estadística Bayesiana",
    year: 2022,
    profesor:"Mario Silva"
};

//Podemos cambiar los valores de nuestro diccionario accediendo a la propiedad
conferencia.titulo="Procesos de Poisson";



console.log(conferencia);

//Podemos crear arrays de json

var conferencias=[
    {titulo:"Medidas Aleatorias", year:2020,profesor:"Luis Hernandez"},
    conferencia,
 ];

 console.log(conferencias);

 // Podemos tomar elementos del json y representarlo en la vista de la página

 var caja_conferencias=document.querySelector("#conferencias");
 var index;
 for(index in conferencias){
     var p=document.createElement("p");
     p.append(conferencias[index].titulo+"-"+conferencias[index].year);
     caja_conferencias.append(p);
 }