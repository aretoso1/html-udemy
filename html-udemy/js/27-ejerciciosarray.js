'use strict'

/*
1.Pida 6 números por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos ) en el cuerpo de la página y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo 
5.Mostrar cuantos elementos tiene el array
6.Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
(se valorá el uso de funciones)

*/

var content= [];
var item=Number;
document.write("<ul>");
for(let i=0;i<6;i++){
    item=parseInt(prompt('Ingrese un número',0));
    content.push(item);
    document.write( "<li>"+content[i]+"</li>"  );
    }

document.write("</ul>");    

console.log(content);
console.log(content.sort(function(a,b){return a - b;}));
console.log(content.reverse());
console.log(content.length);

var busqueda= parseInt(prompt('Introduzca uno de sus números introducidos',0));
var indice=content.indexOf(busqueda);
if(indice>-1){
    
    alert('Uste ha buscado el número '+content[indice]+' y su índice es '+ indice);
}else{
    
    alert('Debe ingresar un número de la lista introducida');
 
}
