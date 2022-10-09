'use strict'

//DOM- Document Object Model

function cambiaColor(color){
	caja.style.background=color;
}

//Conseguir elemento con id correcto

//var caja=document.getElementById("micaja");
var caja= document.querySelector("#micaja");
caja.innerHTML="¡Texto en la caja desde JS!";
caja.style.background="red";
caja.style.padding="20px";
caja.style.color="white";
caja.className="Hola";

//Conseguir elementos por su etiqueta
var todosLosDivs= document.getElementsByTagName('div');
console.log(todosLosDivs);


var seccion = document.querySelector('#miseccion');
var hr= document.createElement("hr");


var valor;
for(valor in todosLosDivs){
	if(typeof todosLosDivs[valor].textContent=="string" ){
		    var parrafo=document.createElement("p"); 
			var texto=document.createTextNode(todosLosDivs[valor].textContent);
			parrafo.append(texto);
			seccion.append(parrafo);
		}

	}
	
seccion.append(hr);

//Conseguir elementos por su clase css

var divsRojos=document.getElementsByClassName('rojo');
var divsAmarillo=document.getElementsByClassName('amarillo');
divsAmarillo[0].style.background="yellow";

var div;
for(div in divsRojos){
       if(divsRojos[div].className=='rojo'){
       	divsRojos[div].style.background="blue";
       }

}

console.log(divsRojos);

// Query Selector

var id= document.querySelector('#encabezado')
console.log(id);


var claseRojo= document.querySelectorAll('.rojo')
console.log(claseRojo);
