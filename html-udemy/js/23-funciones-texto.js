'use strict'

//Transformación de texto

var numero=444;
var texto1= "Bienvendio a nuestro portal de portal clientes";
var texto2= "Tenemos un servicio de matemáticas aplicadas";
var texto3="   Bienvendio a nuestro portal de portal clientes    ";
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

//busqueda de textos mediante .indexOf() nos da la primera posición donde empieza la palabra

var busqueda=texto1.indexOf("portal");
console.log(busqueda);

//Cuando no hay coincidencia nos muestra un -1
var busqueda2=texto1.indexOf("saca");
console.log(busqueda2);

//busqueda de textos mediante .lastIndexOf() nos da la última posición donde empieza la palabra

var busqueda3=texto1.lastIndexOf("portal");
console.log(busqueda3);

//busqueda de textos mediante .search() nos da la primera posición donde empieza la palabra es similar a .indexOf()

var busqueda4=texto1.search("portal");
console.log(busqueda4);

//busqueda de textos mediante .match() nos da un array mas interesante cuando quremos el número de coincidencias etc

var busqueda5=texto1.match("portal");
console.log(busqueda5);

//Si queremos máss busquedas de palabras mediante .match() debemos agregar //g

var busqueda6=texto1.match(/portal/g);
console.log(busqueda6);

//Si queremos quitar palabras desde cierta posición y cantidad de palabras usamos substr()

var busqueda7=texto1.substr(21,6);
console.log(busqueda7);

//Si queremos quitar una palabra en concreto usamos chartAt()

var busqueda8=texto1.charAt(40);
console.log(busqueda8);

//Si queremos buscar lo que esta al inicio startsWith()

var busqueda9=texto1.startsWith("Bi");
console.log(busqueda9);

//Si queremos buscar lo que esta al final endsWith()

var busqueda10=texto1.endsWith("clientes");
console.log(busqueda10);


//Si queremos buscar una palabra .includes()

var busqueda11=texto1.includes("clientes");
console.log(busqueda11);

//Si queremos reemplazar una palabra .replace()

var busqueda12=texto1.replace("Bienvendio","Bienvenido");
console.log(busqueda12);

//Si queremos pedazo del texto usamos .slice() debemos especificar las posiciones de inicio y fin

var busqueda13=texto1.slice(21,42);
console.log(busqueda13);

//Si queremos guardar el texto en un array usamos .split()

var busqueda14=texto1.split();
console.log(busqueda14);

//Si queremos guardar cada palabra del texto en un array por separado usamos .split(" ")

var busqueda15=texto1.split(" ");
console.log(busqueda15);

//Si queremos quitar los espacios al inicio o al final de un texto usamos el método .trim() útil cuando guardamos correos o nombres

var busqueda16=texto3.trim();
console.log(texto3);
console.log("*****************************************");
console.log(busqueda16);
