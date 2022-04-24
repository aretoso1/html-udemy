'use strict'

//Transformación de texto

var numero=444;
var texto1= "Bienvendio a nuestro portal de clientes";
var texto2= "Tenemos un servicio de matemáticas aplicadas";

// Método .toString()

var dato= numero.toString();
console.log(dato);

// Método .toUpperCase()-.toLowerCase()

var dato2=texto1.toUpperCase();
var dato3=texto2.toLowerCase();

console.log(dato2);
console.log(dato3);

// Longitud .length

var nombre= "Luis Guillermo";
var nombre2= "LuisGuillermo";
var nombre3= "";
//var nombre4= 0; muestra undefined ya que no hay string que contar
//var nombre5= null; nos genera un error del tipo cannot read propierties of null
var lista=["Luis","Guillermo"];

console.log(nombre.length);
console.log(nombre2.length);
console.log(nombre3.length);
//console.log(nombre4.length);
//console.log(nombre5.length);
console.log(lista.length);

//Concatenar textos--mediante + y el método concat()
var textoTotal1= texto1+". "+texto2;
var textoTotal2=texto1.concat(". "+texto2);

console.log(textoTotal1);
console.log(textoTotal2);


