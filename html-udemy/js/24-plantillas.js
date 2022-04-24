'use stric'

//como hacer plantillas de texto

//La primera forma que plantearemos es inproductiva

var nombre= prompt("Ingresa tu nombre");
var apellido= prompt("Ingresa tu apellido");

var texto= "Mi nombre es: "+nombre+"</br> Mi apellido es: "+apellido;

document.write(texto);

//La siguiente forma es usando comillas invertidas, según otros videos también esto es inproductivo mucho texto

var texto1= `
        <h1>Welcome to our website</h1>
        <h3>Your name is: ${nombre}</h3>
        <h3>Your lastname is: ${apellido}</h3>


`;

document.write(texto1);