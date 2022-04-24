'use strict'

//LocalStorage podemos guardar información
//Se usa muchisimos en aplicaciones de javascript o angular
//Para compartir infor. Aplicacion monolítica se usa la sesiones es una memoria que persite en backend
// Localstorage Es una memoria que esta en nuestro ordenador nos permite guardar info

//Con lo siguiente podremos saber si nuestro navegador es compatible con nuestro localstorage

if(typeof(Storage) !== undefined){
    console.log("El LocalStorage está disponible");
}else{
    console.log("El LocalStorage no está disponible");
}

//Para guardar datos en el localsotrage

localStorage.setItem("titulo", "Curso de variedades convexas");

//Recuperar elementos, localStorage.getItem bueno esto es como un rescate de lo que se guarda. Se debe buscar por id

document.querySelector("#conferencias").innerHTML=localStorage.getItem("titulo");

//Guardar objetos json en el localstorage

var usuario={
    nombre:"Mario",
    email:"mario@gmail.com",
    web:"marioburguer.cl"
};

//Si guardamos de esta manera el localstorage no puede reconocer el objeto. Siempre se recomienda trabajar con objetos json string
localStorage.setItem("usuario",usuario);

// De la siguiente manera se observa la diferencia JSON.stringify
var usuario2={
    nombre:"Fabiola",
    email:"fabiola@gmail.com",
    web:"fabiolabella.cl"
};

// De esta manera es la correcta
localStorage.setItem("usuario2",JSON.stringify(usuario2));

//Recuperar objeto JSON
//Del siguiente modo nos recupera un string no el objeto JSON como tal

console.log(localStorage.getItem("usuario2"));

//La forma correcta es usar JSON.parse, me permite transformar el json string en un objeto javascrip utilizable

var usuariojs= JSON.parse(localStorage.getItem("usuario2"));

console.log(usuariojs);
//Lo siguiente añade al documento, leer sobre queryselector
document.querySelector("#conferencias").append(" "+usuariojs.nombre+"-"+usuariojs.email);

//Podemos crear un nuevo div y obtener los datos que se encuentran en el localsotrage
document.querySelector("#datos").append(usuariojs.nombre+"-"+usuariojs.email);

//localStorage.remove() localStorage.clear() para borrar datos, en el primero se busca por id

